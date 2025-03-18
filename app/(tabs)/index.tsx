import { View, Text } from 'react-native'
import React from 'react'
import tw from '@/assets/lib/tailwind'

const index = () => {
  return (
    <View style={tw`bg-black h-full`}>
      <Text style={tw`text-red-600`}>index</Text>
    </View>
  )
}

export default index