"use client"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReduxProvider from '@/redux/provider'
import '@/assets/styles/_main.scss'

export default function RootLayout({ children }) {
  return (
    <html>
        <head>
          <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css" rel="stylesheet" type="text/css" />
        </head>
        <body>
            <ToastContainer 
              theme="colored"
            />
            <ReduxProvider>
                {children}
            </ReduxProvider>
        </body>
    </html>
  )
}
