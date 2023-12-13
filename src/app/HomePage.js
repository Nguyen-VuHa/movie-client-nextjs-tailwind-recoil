"use client"
import React, { useEffect } from "react";
import GiftIcon from '@/assets/images/gift-card.gif'
import Image from "next/image";
import { Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setFullName, setModalEnterName } from "@/redux/reducers/global.reducer";
import { useState } from "react";
import authApi from "@/apis/auth";
import ModalCustom from "@/components/Common/ModalCustom";
import ButtonCustom from "@/components/Common/ButtonCustom";
// write description -> SEO page
export const metadata = {
    title: 'Trang chủ | BHD Star Cineplex',
    icons: {
        icon: '/short-cut-icons.png',
        shortcut: '/short-cut-icons.png',
    },
}

export default function HomePage() {

    const { isModalEnterName, fullName } = useSelector(state => state.globalState)
    const dispatch = useDispatch()  

    const [isSubmit, setIsSubmit] = useState(false)
    const [isChoose, setIsChoose] = useState(false)
    const [giftList, setGiftList] = useState([])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage && localStorage.getItem("name")) {
                dispatch(setModalEnterName(false))
                fetchListGift(localStorage.getItem("name"))
            }
        }
    }, [])

    const fetchListGift = async (fullname) => {
        const resultGift = await authApi.getListGift({
            fullname,
        })

        if (resultGift && resultGift.status == "SUCCESS") {
            setGiftList(resultGift.data)
        }
    }

    const handleSubmitName = async () => {
        if (!isSubmit) {
            setIsSubmit(true)

            const result = await authApi.noelSubmitName({
                fullname: fullName,
            })

            if (result && result.status == "SUCCESS") {
                localStorage.setItem("name", fullName)
                dispatch(setModalEnterName(false))
                fetchListGift(fullName)
            } else {
                message.error(result?.message || "Ngủm")
            }

            setIsSubmit(false)
        }
    }

    const handleSelectGift = async (data) => {
        if (!isChoose) {
            setIsChoose(true)

            const result = await authApi.nodelChoose({
                fullname: localStorage.getItem("name"),
                userGift: data.name,
            })

            if (result && result.status === "SUCCESS") {
                localStorage.setItem("user_gift", result.data)
                message.success("Chọn thành công!.")
            } else {
                message.error(result.message)
            }

            setIsChoose(false)
        }
    }
    
    
    return (
        <div>
            <div className="grid grid-cols-2 gap-2 w-full">
                <ModalCustom 
                    status={isModalEnterName} 
                >
                    <div className="px-6 py-6 lg:px-8 w-full">
                        <h3 className="mb-4 font-bold uppercase font-primary">Who là ai ?</h3>
                        {/* <FormInput /> */}
                        <Input 
                            placeholder="Nhập tên đi bro ... chần chừ gì nữa"
                            value={fullName}
                            onChange={(e) => {
                                dispatch(setFullName(e.target.value))
                            }}
                        />
                        <ButtonCustom 
                            className="mt-3 w-full"
                            buttonName="Gửi ông già noel - xin điều ước"
                            onClick={() => {
                                    if(fullName) {
                                        handleSubmitName()
                                    } else {
                                        message.warning("Nhập cái tên rồi mần gì mần.")
                                    }
                            }}  
                            loading={isSubmit}
                        />
                    </div>
                </ModalCustom>

                {
                   
                    typeof window !== 'undefined' && !localStorage.getItem("user_gift") &&
                    giftList && giftList.length > 0 && 
                    giftList.map(gift => {
                        return  <Image
                            onClick={() => {
                                handleSelectGift(gift)
                            }}
                            key={gift.id}
                            className="w-full"
                            src={GiftIcon}
                            alt="No Image"
                        />
                    })
                }
            </div>
            {
                typeof window !== 'undefined' && localStorage && localStorage.getItem("user_gift") && 
                <div className="text-center pt-5">
                    <div className="font-bold">
                        Người mà bạn tặng quà
                    </div>
                    <div className="font-bold font-[30px]">
                        { localStorage.getItem("user_gift") }
                    </div>
                </div>
            }
        </div>
    )
}
