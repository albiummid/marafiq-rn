import Header from '@/components/layout/header';
import tw from '@/libs/tw';
import {AntDesign, Feather} from '@expo/vector-icons';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

export default function Notifications() {
  const notifications = [
    {
      type: 'general',
      title: 'Title',
      description: "Here's Notification description",
    },
    {
      type: 'warn',
      title: 'Title',
      description: "Here's Notification description",
    },
    {
      type: 'alert',
      title: 'Title',
      description: "Here's Notification description",
    },
    {
      type: 'default',
      title: 'Title',
      description: "Here's Notification description",
    },
    {
      type: 'general',
      title: 'Title',
      description: "Here's Notification description",
    },
  ];

  const handleClearNotification = async () => {};
  const handleClearAllNotification = async () => {};

  return (
    <View style={tw`p-2`}>
      <Header
        title="Notification"
        rightSection={() => (
          <TouchableOpacity onPress={handleClearAllNotification}>
            <Text>Clear All</Text>
          </TouchableOpacity>
        )}
      />
      <FlatList
        data={notifications}
        renderItem={({item}) => {
          return (
            <NotificationCard
              onClosePress={handleClearNotification}
              {...item}
            />
          );
        }}
      />
    </View>
  );
}

const NotificationCard = ({
  title,
  type,
  description,
  onClosePress = () => {},
}: {
  title: string;
  type: string;
  description: string;
  onClosePress?: () => void;
}) => {
  const nColors = {
    general: {
      iconBG: 'bg-green-600',
      bg: 'bg-green-200',
      icon: 'text-green-600',
      border: 'border border-green-600 rounded-lg',
    },
    warn: {
      iconBG: 'bg-yellow-400',
      bg: 'bg-yellow-100',
      icon: 'text-yellow-600',
      border: 'border border-yellow-600 rounded-lg',
    },
    alert: {
      iconBG: 'bg-red-600',
      bg: 'bg-red-100',
      icon: 'text-red-600',
      border: 'border border-red-600 rounded-lg',
    },
    default: {
      iconBG: 'bg-blue-600',
      bg: 'bg-blue-100',
      icon: 'text-blue-600',
      border: 'border border-blue-600 rounded-lg',
    },
  };
  const c = nColors[type as keyof typeof nColors];

  return (
    <View style={tw.style(c?.bg, c?.border, 'p-2 flex-row items-center mb-2')}>
      <View style={tw.style('mr-2 p-3 rounded-lg', c?.iconBG)}>
        {type === 'general' ? (
          <Feather
            size={20}
            style={tw.style('bg-white rounded-full p-1', c?.icon)}
            name={'check'}
          />
        ) : type === 'warn' ? (
          <Feather
            size={20}
            style={tw.style('bg-white rounded-full p-1', c?.icon)}
            name={'alert-triangle'}
          />
        ) : type === 'alert' ? (
          <Feather
            size={20}
            style={tw.style('bg-white rounded-full p-1', c?.icon)}
            name={'alert-octagon'}
          />
        ) : (
          <AntDesign
            size={20}
            style={tw.style('bg-white rounded-full p-1', c?.icon)}
            name={'exclamationcircleo'}
          />
        )}
      </View>
      <View>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
      <TouchableOpacity
        onPress={onClosePress}
        style={tw`ml-auto bg-white p-1 rounded-lg shadow-sm`}>
        <AntDesign name="close" size={20} />
      </TouchableOpacity>
    </View>
  );
};
