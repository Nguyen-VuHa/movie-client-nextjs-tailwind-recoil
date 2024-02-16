"use client"

import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import BaseLayout from '@/layouts/BaseLayout'


function ReduxProvider({children}) {
  return (
    <Provider store={store}>
      <BaseLayout>
        {children}
      </BaseLayout>
    </Provider>
  )
}

export default ReduxProvider