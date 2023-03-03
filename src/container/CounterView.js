import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DecrementData, IncrementData } from '../../redux/actions/Counter.action'
import { rootReducer } from '../../redux'
const CounterView = () => {
    const dispatch = useDispatch()
    const storeData = useSelector(state=>state.counterLive) 
  
    return (
    <View>
      <Button title='+' onPress={()=>{dispatch(IncrementData())}}/>
      <Text style={{textAlign:'center' , fontSize:50,}}>{storeData.count}</Text>
      <Button title='-' onPress={()=>{dispatch(DecrementData())}}/>
    </View>
  )
}

export default CounterView

const styles = StyleSheet.create({})