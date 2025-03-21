import tw from '@/libs/tw';
import React, {PropsWithChildren} from 'react';
import {View, ViewStyle} from 'react-native';
import Header from './header';

export default function ScreenWrapper({
  children,
  withAuthHeader,
  title,
  ...props
}: PropsWithChildren<{
  withAuthHeader?: boolean;
  title?: string;
  style?: ViewStyle;
}>) {
  return (
    <View style={[tw`flex-1 px-2 pt-2 gap-2`, props?.style]}>
      <Header showAuthHeader={withAuthHeader} title={title} />
      {children}
    </View>
  );
}
