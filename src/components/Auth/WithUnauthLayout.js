import React from "react";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import NavBarMain from "@/components/NavBar/NavBar.main";


const WithUnauthLayout = ({ children }) => {

    // Perform checks for unauthenticated pages here
    return (
        <>
            <Layout>
                <Header 
                    className={`
                        leading-none
                        flex justify-around 
                        max-md:justify-between 
                        items-center py-[10px] px-[20px]
                        shadow-lg dark:shadow-2xl w-full h-[80px] 
                        top-0 left-0 bg-white dark:bg-[#121825]
                        z-[999]
                    `}
                >
                    <NavBarMain />
                </Header>
                <Content>
                    {children}
                </Content>
                <Footer>
                </Footer>
            </Layout>
           
        </>
    );
};

export default WithUnauthLayout;
  