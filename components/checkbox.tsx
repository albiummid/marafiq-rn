import tw from '@/libs/tw';
import {Feather} from '@expo/vector-icons';
import React from 'react';
import {Text, TextStyle, TouchableOpacity, View} from 'react-native';

type CheckBoxProps = {
  value: boolean;
  onChange: (state: boolean) => void;
  title: string;
  textStyle?: TextStyle;
};
export default function CheckBox(props: CheckBoxProps) {
  return (
    <TouchableOpacity
      onPress={() => props.onChange(!props.value)}
      style={tw` flex-row items-center gap-2`}>
      <View
        style={tw`border ${props.value ? 'border-green-400' : 'border-gray-400'} mr-auto rounded-sm `}>
        <Feather
          size={10}
          name="check"
          style={tw.style(
            props.value ? ' bg-emerald-400 text-white' : 'opacity-0',
          )}
        />
      </View>
      <Text style={props.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
}
