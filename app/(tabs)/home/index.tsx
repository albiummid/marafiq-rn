import ScreenWrapper from '@/components/layout/screen-wrapper';
import tw from '@/libs/tw';
import {router} from 'expo-router';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function HomeScreen() {
  const tickets = [
    {
      name: 'PPM',
      newCount: 10,
      assignedCount: 5,
    },
    {
      name: 'RM',
      newCount: 10,
      assignedCount: 5,
    },
    {
      name: 'RC',
      newCount: 10,
      assignedCount: 5,
    },
    {
      name: 'PPC',
      newCount: 10,
      assignedCount: 5,
    },
  ];
  return (
    <ScreenWrapper withAuthHeader>
      <Text style={tw`text-center text-lg font-semibold my-5`}>
        Ticket Overview
      </Text>
      <View style={tw`flex-row flex-wrap gap-5 justify-center items-center`}>
        {tickets?.map(x => {
          return (
            <TouchableOpacity
              key={x.name}
              onPress={() =>
                router.push({
                  pathname: '/home/ticket',
                  params: {ticket: x.name},
                })
              }
              style={tw`w-2/5 bg-gray-300 rounded-lg p-3 justify-center items-center`}>
              <Text style={tw`text-center text-lg mb-2`}>{x.name}s</Text>
              <Text>New: {x.newCount}</Text>
              <Text>Assigned: {x.assignedCount}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScreenWrapper>
  );
}
