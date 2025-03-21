import tw from '@/libs/tw';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import {router} from 'expo-router';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

export default function Header({
  showAuthHeader = false,
  title,
  rightSection: RightSection = () => null,
}: {
  showAuthHeader?: boolean;
  title?: string;
  rightSection?: () => React.ReactNode;
}) {
  if (showAuthHeader) {
    return (
      <View style={tw`flex-row items-center justify-between`}>
        <View style={tw`flex-row items-center gap-2 `}>
          <Image
            style={tw`w-10 h-10 rounded-lg`}
            source={{
              uri: 'https://thumbs.dreamstime.com/z/generative-ai-young-smiling-man-avatar-man-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-d-vector-people-279560903.jpg',
            }}
          />
          <View>
            <Text>Albi Ummid</Text>
            <Text style={tw`text-xs`}>Admin</Text>
          </View>
        </View>
        <Feather
          onPress={() => {
            router.push('/notifications');
          }}
          name="bell"
          size={20}
        />
      </View>
    );
  }

  return (
    <View style={tw`flex-row items-center justify-between py-3 `}>
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}>
        <MaterialCommunityIcons
          size={16}
          style={tw`border p-1 rounded-lg text-gray-400 pr-2 border-gray-400`}
          name="less-than"
        />
      </TouchableOpacity>
      <Text style={tw` font-bold text-lg`}>{title}</Text>
      <Text>{RightSection()}</Text>
    </View>
  );
}
