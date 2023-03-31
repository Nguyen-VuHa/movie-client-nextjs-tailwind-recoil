import FooterMain from '@/components/Footer/Footer.main'
import NavBarMain from '@/components/NavBar/NavBar.main'
import RecoilProvider from '@/components/RecoilProvider/RecoilProvider'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
        <head></head>
        <body className='dark:bg-primary-bg'>
            <RecoilProvider>
                <NavBarMain />
                <main className='h-[100vh] mt-[80px]'>{children}</main>
                <FooterMain />
            </RecoilProvider>
        </body>
    </html>
  )
}
