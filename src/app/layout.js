import './globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import '@/assets/styles/atnd.overwrite.scss'
import '@/assets/styles/form.animation.scss'
import { ConfigProvider } from 'antd'
import ReduxProvider from '@/redux/provider'
import ProviderLayout from '@/components/Auth/ProviderLayout'

export default function RootLayout({ children }) {
  return (
    <html>
        <head>
          <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css" rel="stylesheet" type="text/css" />
        </head>
        <body>
          <ConfigProvider>
            <ReduxProvider>
              <ProviderLayout>
                {children}
              </ProviderLayout>
            </ReduxProvider>
          </ConfigProvider>
        </body>
    </html>
  )
}
