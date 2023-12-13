import './globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import { ConfigProvider } from 'antd'
import ReduxProvider from '@/redux/provider'

export default function RootLayout({ children }) {
  return (
    <html>
        <head>
          <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css" rel="stylesheet" type="text/css" />
        </head>
        <body className='dark:bg-primary-bg'>
          <div>
            <ConfigProvider>
              <ReduxProvider>
                {children}
              </ReduxProvider>
            </ConfigProvider>
          </div>
        </body>
    </html>
  )
}
