"use client"
import FooterMain from '@/components/Footer/Footer.main'
import NavBarMain from '@/components/NavBar/NavBar.main'
import RecoilProvider from '@/components/RecoilProvider/RecoilProvider'
import './globals.scss'
import 'dayjs/locale/vi'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function RootLayout({ children }) {
  return (
    <html>
        <head>
          <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css" rel="stylesheet" type="text/css" />
        </head>
        <body className='dark:bg-primary-bg'>
            <ToastContainer 
                theme="colored"
            />
            <RecoilProvider>
                <NavBarMain />
                <main className='mt-[80px]'>{children}</main>
                <FooterMain />
            </RecoilProvider>
        </body>
    </html>
  )
}
