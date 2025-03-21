import tw from '@/libs/tw';
import {AntDesign} from '@expo/vector-icons';
import {useReducer} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const Accordion = ({
  staticHeight = 0,
  ...props
}: {
  headerComponent: React.ReactNode;
  collapsedComponent: React.ReactNode;
  staticHeight?: number;
}) => {
  const [isOpen, toggleIsOpen] = useReducer(v => !v, false);

  // Shared value for height animation
  const height = useSharedValue(0);
  const opacity = useSharedValue(0);

  // Handle toggle with animation
  const handleToggle = () => {
    toggleIsOpen();
    height.value = isOpen
      ? withTiming(0, {duration: 250})
      : withTiming(staticHeight, {
          duration: 250,
        }); // Adjust height as needed
    opacity.value = isOpen
      ? withTiming(0, {duration: 250})
      : withTiming(1, {duration: 250});
    // displayValue.value = isOpen ? withTiming('none') : withTiming('flex');
  };

  // Animated styles
  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
    opacity: opacity.value,
  }));

  return (
    <View style={tw` `}>
      {/* Header */}
      <View style={tw`flex-row items-center justify-between py-2`}>
        <>{props.headerComponent}</>
        <View style={tw`w-8 flex-row justify-center items-center`}>
          <TouchableOpacity onPress={handleToggle}>
            <AntDesign
              style={tw.style(isOpen && 'text-emerald-400')}
              name={!isOpen ? 'down' : 'up'}
              size={15}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Animated Collapsible Content */}
      {staticHeight > 0 ? (
        <Animated.View style={[tw.style(` `), animatedStyle]}>
          {props.collapsedComponent}
        </Animated.View>
      ) : (
        isOpen && <View>{props.collapsedComponent}</View>
      )}
    </View>
  );
};
