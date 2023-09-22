import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
// components from next ui 
import { NextUIProvider } from '@nextui-org/react'
// redux
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
// styles
import './index.css'
import 'react-modern-drawer/dist/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Provider store={store} >
        <App />
      </Provider>
    </NextUIProvider>
  </React.StrictMode>,
)
