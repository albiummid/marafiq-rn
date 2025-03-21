import { images } from '@/assets'
import tw from '@/libs/tw'
import React from 'react'
import { Image, View } from 'react-native'

export default function LoadingScreen() {
  return (
    <View style={tw`items-center justify-center flex-1 h-full w-full px-5 mt-5`}>
    <Image source={images.logo} style={tw`w-30 h-20`} resizeMode="contain" />
  </View>
  )
}