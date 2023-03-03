import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import CounterView from './src/container/CounterView'
import { configStore } from './redux/Store'
export default function App() {
  const store = configStore();
  return (
    <Provider store={store}>
      <CounterView />
    </Provider>
  )
}