import FooterMain from '@/components/Footer/Footer.main'
import NavBarMain from '@/components/NavBar/NavBar.main'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <body className='dark:bg-primary-bg'>
        <NavBarMain />
        <main className='h-[100vh] mt-[80px]'>{children}</main>
        <FooterMain />
    </body>
  )
}
