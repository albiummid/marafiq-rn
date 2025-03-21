import { images } from '@/assets'
import tw from '@/libs/tw'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function ErrorScreen() {
  return (
    <View style={tw`items-center justify-center flex-1 h-full w-full px-5 mt-5`}>
    <Image source={images.error} style={tw`w-30 h-20`} resizeMode="contain" />
    <Text style={tw`text-lg text-center mt-10`}>
        Opps!
    </Text>
    <Text style={tw`text-lg text-center mt-5`}>
        Something went wrong.
    </Text>

    <TouchableOpacity>
    <Text style={tw`text-lg text-center mt-5 text-secondary`}>
        Back to home page
    </Text>
    </TouchableOpacity>

  </View>
  )
}