import React from 'react'
import { store } from './app/store';
import { Provider } from 'react-redux';
import { ModalProvider } from './uikit'

const Providers: React.FC = ({ children }) => {
  return (
      <Provider store={store}>
          <ModalProvider>{children}</ModalProvider>
      </Provider>
  )
}

export default Providers
