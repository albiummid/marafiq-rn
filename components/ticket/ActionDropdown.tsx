import tw from '@/libs/tw';
import {AntDesign} from '@expo/vector-icons';
import React, {useReducer} from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';

type DropdownButtonProps = {
  data: {
    label: string;
    value: any;
  }[];
  value: any;
  onChange: (value: any) => any;
  containerStyle?: ViewStyle;
};

export default function ActionDropdown(props: DropdownButtonProps) {
  const selectedLabel = props.data.find(x => x.value === props.value)?.label;
  const [isOpen, toggle] = useReducer(v => !v, false);

  return (
    <View style={props.containerStyle}>
      <TouchableOpacity
        onPress={toggle}
        style={tw`px-3 py-2 bg-gray-100 w-24 rounded-lg flex-row items-center gap-2 justify-between`}>
        <Text style={tw` text-xs`}>{selectedLabel ?? ''}</Text>
        <AntDesign size={12} name={isOpen ? 'up' : 'down'} />
      </TouchableOpacity>
      <View>
        {isOpen && (
          <View
            style={tw`mt-1 absolute rounded-lg bg-white border border-emerald-200 w-24 z-10`}>
            {props.data.map((x, i, a) => (
              <TouchableOpacity
                onPress={() => {
                  props.onChange(x.value);
                  toggle();
                }}
                key={x.label}>
                <Text
                  style={tw.style(
                    `px-2 py-1  text-xs `,
                    selectedLabel == x.label && 'bg-emerald-400 text-white',
                    a.length === i + 1 && 'rounded-b-lg',
                    i === 0 && 'rounded-t-lg',
                  )}>
                  {x.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}
