import React from 'react'

function SideBarButton({ icon, sidebarName, ...child}) {
  return (
    <div 
        className='p-2 w-full border-b-[2px] 
        cursor-pointer hover:border-primary transition-all border-primary-bg
        flex justify-between items-center'
        {...child}
    >
        {icon}
        <div>{sidebarName}</div>
    </div>
  )
}

export default SideBarButton