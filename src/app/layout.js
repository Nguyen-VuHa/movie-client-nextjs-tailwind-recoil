import './globals.scss'
import 'react-toastify/dist/ReactToastify.css'
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
          <ConfigProvider
            theme={{
              components: {
                DatePicker: {
                  colorPrimary: '#f9ab00',
                  colorText: '#f9ab00',
                  colorTextLabel: '#f9ab00',
                },
              },
            }}
          >
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
