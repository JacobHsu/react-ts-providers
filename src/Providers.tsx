import React from 'react'
import { store } from './app/store';
import { Provider } from 'react-redux';

const Providers: React.FC = ({ children }) => {
  return (
      <Provider store={store}>
          {children}
      </Provider>
  )
}

export default Providers
