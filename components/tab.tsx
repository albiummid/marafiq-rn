import tw from '@/libs/tw';
import React from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
type TabProps = {
  data: {
    label: string;
    value: any;
    component: React.ReactNode;
  }[];
  value: any;
  onChange: (value: any) => any;
  style?: ViewStyle;
};

export default function Tab(props: TabProps) {
  const selected = props.data.find(x => x.value === props.value);
  const selectedLabel = selected?.label;
  const Component = selected?.component;

  return (
    <View style={props.style}>
      <View
        style={tw`bg-gray-100 flex-row items-center justify-between p-2 rounded-md`}>
        {props.data.map(x => (
          <TouchableOpacity
            onPress={() => {
              props.onChange(x.value);
            }}
            key={x.label}>
            <Text
              style={tw.style(
                `px-3 py-1 text-xs`,
                selectedLabel === x.label &&
                  'bg-emerald-600 text-white rounded-lg',
              )}>
              {x.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={tw`p-2 border border-green-200 mt-2 rounded-lg`}>
        {Component}
      </View>
    </View>
  );
}
