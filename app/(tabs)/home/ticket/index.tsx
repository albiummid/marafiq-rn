import ScreenWrapper from '@/components/layout/screen-wrapper';
import {colors} from '@/constants/colors';
import tw from '@/libs/tw';
import {capitalize} from '@/libs/utils';
import {
  AntDesign,
  Entypo,
  Feather,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import {addDays, format} from 'date-fns';
import {router, useLocalSearchParams} from 'expo-router';
import React, {useReducer, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Ticket {
  ticket_id: string;
  ticket_type: string;
  image: string;
  locationTag: string;
  asset_name: string;
  asset_tag: string;
  asset_category: string;
  priority: 'high' | 'moderate' | 'low';
  start_date: Date;
  due_date: Date;
  team_work: string;
  workers: string;
  estimate_time: number;
  kpi_status: 'completed' | 'pending' | 'in-progress';
  checked_status: 'pending' | 'approved' | 'rejected';
  report_at: Date;
  reporter: string;
}
export default function Ticket() {
  const {ticket} = useLocalSearchParams();
  const tickets = ['PPM', 'RM', 'RC', 'PPC'];
  const [queryStr, setQueryStr] = useState('');
  const [focused, setFocused] = useState(false);
  const [activeTicket, setActiveTicket] = useState(ticket ?? '');
  const [listViewType, setListViewType] = useState('accordion'); // accordion | box
  const [list, setList] = useState<Ticket[] | []>(
    Array.from({length: 20}, (_, y) => ({
      ticket_id: `ppM01759389${y}-00${y}`,
      ticket_type: activeTicket as string,
      image: `https://picsum.photos/id/${y + 700}/200/300`,
      locationTag: 'NY city, Road 32A/C',
      asset_name: 'ABC',
      asset_tag: 'K kjdkl',
      asset_category: 'fklsdjflklsd',
      priority: y % 2 == 0 ? 'high' : y % 3 == 0 ? 'low' : 'moderate',
      start_date: addDays(Date.now(), y - 1),
      due_date: addDays(Date.now(), y),
      team_work: 'fsdl',
      workers: 'fdslfds',
      estimate_time: y,
      kpi_status: 'completed',
      checked_status: 'pending',
      report_at: addDays(Date.now(), y + 1),
      reporter: 'albi',
    })),
  );

  const onSearch = () => {};
  const onPressSort = () => {};

  return (
    <ScreenWrapper withAuthHeader>
      {/* Filter list */}
      <View>
        <ScrollView style={tw`mt-5`} horizontal>
          {tickets.map(x => {
            const isActive = activeTicket === x;
            return (
              <TouchableOpacity
                onPress={() => {
                  setActiveTicket(x);
                }}
                style={tw.style(
                  `flex-row w-16 py-1 rounded-lg mx-1 items-center justify-center border`,
                  isActive ? 'border-green-400' : 'border-gray-300',
                )}
                key={x}>
                {activeTicket == x && (
                  <Entypo name="dot-single" color={colors.green600} size={15} />
                )}
                <Text>{x}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Search */}
      <View style={tw`flex-row items-center justify-between gap-2`}>
        <View
          style={tw.style(
            `border rounded-lg flex-row p-2 flex-1  py-1 items-center`,
            focused ? 'border-emerald-400' : 'border-gray-300',
          )}>
          <TextInput
            value={queryStr}
            onFocus={e => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
            onChangeText={setQueryStr}
            style={tw` flex-1`}
            placeholder="Search"
          />
          <TouchableOpacity
            onPress={onSearch}
            style={tw`ml-auto bg-emerald-100 rounded-lg px-3 py-2`}>
            <Feather size={15} style={tw`text-emerald-500`} name="search" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={onPressSort}
          style={tw` bg-emerald-100 rounded-lg px-3 py-2 border border-emerald-600`}>
          <MaterialCommunityIcons
            size={20}
            style={tw`text-emerald-500`}
            name="sort"
          />
        </TouchableOpacity>
      </View>

      {/* List Header */}
      <View style={tw`flex-row gap-2 items-center justify-between`}>
        <View style={tw`flex-row gap-2 items-center`}>
          <TouchableOpacity onPress={() => setListViewType('box')}>
            <Feather
              style={tw.style(
                listViewType === 'box'
                  ? 'bg-emerald-100 text-emerald-400 border border-emerald-400 p-1 rounded-lg'
                  : 'bg-gray-100 text-gray-400 border border-gray-500 p-1 rounded-lg',
              )}
              name="layout"
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setListViewType('accordion')}>
            <Feather
              style={tw.style(
                listViewType === 'accordion'
                  ? 'bg-emerald-100 text-emerald-400 border border-emerald-400 p-1 rounded-lg'
                  : 'bg-gray-100 text-gray-400 border border-gray-500 p-1 rounded-lg',
              )}
              name="list"
              size={20}
            />
          </TouchableOpacity>
        </View>
        <Text>{list?.length} results</Text>
      </View>
      {/* List */}
      <View style={tw``}>
        {listViewType === 'accordion' ? (
          <View style={tw`border border-emerald-300 rounded-lg p-1 mb-66 `}>
            {/* Header */}
            <View
              style={tw`flex-row items-center justify-between bg-gray-200 p-2`}>
              <View style={tw`flex-row text-xs items-center `}>
                <Text style={tw`w-12 text-xs`}>No.</Text>
                <Text style={tw`text-xs`}>{activeTicket} ID</Text>
              </View>
              <View style={tw`flex-row items-center gap-2 `}>
                <Text style={tw`text-xs`}>Status</Text>
                <Text style={tw`w-10`}>{''}</Text>
              </View>
            </View>
            <FlatList
              data={list}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => (
                <AccordionCard
                  {...item}
                  isLastItem={list.length === index + 1}
                  index={index}
                />
              )}
            />
          </View>
        ) : (
          <FlatList
            data={list}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{height: 200}}
            renderItem={({item}) => <BoxCard {...item} />}
          />
        )}
      </View>
    </ScreenWrapper>
  );
}

const AccordionCard = (
  props: Ticket & {index: number; isLastItem: boolean},
) => {
  const [isOpen, toggleIsOpen] = useReducer(v => !v, false);

  // Shared value for height animation
  const height = useSharedValue(0);
  const opacity = useSharedValue(0);

  // Handle toggle with animation
  const handleToggle = () => {
    toggleIsOpen();
    height.value = isOpen
      ? withTiming(0, {duration: 250})
      : withTiming(480, {duration: 250}); // Adjust height as needed
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

  const details = [
    {label: 'Location Tag', value: props.locationTag},
    {label: 'Asset Name', value: props.asset_name},
    {label: 'Asset Tag', value: props.asset_tag},
    {label: 'Asset Category', value: props.asset_category},
    {label: 'Priority', value: props.priority},
    // {label: 'Start Date', value: props.start_date.toLocaleDateString()}, // Format the date if needed
    {label: 'Due Date', value: props.due_date.toLocaleDateString()},
    {label: 'Team Work', value: props.team_work},
    {label: 'Workers', value: props.workers},
    {label: 'Estimate Time', value: props.estimate_time},
    {label: 'KPI Status', value: props.kpi_status},
    {label: 'Checked Status', value: props.checked_status},
    {label: 'Report At', value: props.report_at.toLocaleDateString()},
    {label: 'Reporter', value: props.reporter},
    // {label: 'Image', value: props.image}, // If image is to be displayed
  ];
  const handleNavigateToDetails = () =>
    router.push({
      pathname: '/home/ticket/details',
      params: {ticketId: props.ticket_id},
    });

  return (
    <View style={tw`${props.isLastItem ? '' : 'border-b'} border-gray-300`}>
      {/* Header */}
      <View style={tw`flex-row items-center justify-between p-2`}>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`w-12 text-xs`}>{props.index + 1}</Text>
          <TouchableOpacity onPress={handleNavigateToDetails}>
            <Text style={tw`text-xs`}>{props.ticket_id}</Text>
          </TouchableOpacity>
        </View>

        <View style={tw`flex-row items-center`}>
          <Text
            style={tw`bg-emerald-50 text-emerald-500 text-xs rounded-md px-2`}>
            {capitalize(props.kpi_status)}
          </Text>
          <View style={tw`w-8 flex-row justify-center items-center`}>
            <TouchableOpacity onPress={handleToggle}>
              <AntDesign
                style={tw.style(isOpen && 'text-emerald-400')}
                name={!isOpen ? 'down' : 'up'}
                size={18}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Animated Collapsible Content */}
      <Animated.View style={[tw.style(`px-4 `), animatedStyle]}>
        <View style={tw`mt-2`} />
        {details.map((item, index) => (
          <View
            key={item.label}
            style={[
              tw`flex-row justify-between p-2`,
              index % 2 !== 0 ? tw`bg-emerald-50` : tw`bg-white`,
            ]}>
            <Text>{item.label}</Text>
            <Text>{item.value}</Text>
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

const BoxCard = (props: Ticket) => {
  const handleNavigateToDetails = () =>
    router.push({
      pathname: '/home/ticket/details',
      params: {ticketId: props.ticket_id},
    });
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={handleNavigateToDetails}
      style={tw`p-2 rounded-xl mb-2 min-h-20 gap-2 bg-white`}>
      {/* Image */}
      <Image source={{uri: props.image}} style={tw`w-full h-30 rounded-lg`} />

      {/* Ticket Id and status */}
      <View style={tw`flex-row justify-between`}>
        <Text>{props.ticket_id}</Text>
        <Text style={tw`bg-emerald-100 text-emerald-600 py-1 px-2 rounded-lg `}>
          {capitalize(props.kpi_status)}
        </Text>
      </View>

      {/* Assets sections */}
      <View style={tw`flex-row items-center justify-between`}>
        <View>
          <Text style={tw`text-textSecondary text-xs`}>Asset Name</Text>
          <Text style={tw`text-textPrimary `}>{props.asset_name}</Text>
        </View>
        <View>
          <Text style={tw`text-textSecondary text-xs`}>Asset Category</Text>
          <Text style={tw`text-textPrimary capitalize `}>
            {props.asset_tag}
          </Text>
        </View>
      </View>

      {/* Location */}
      <View
        style={tw`flex-row items-center gap-2 border-b border-gray-200 pb-2 `}>
        <Feather size={15} name="map-pin" />
        <Text className="pb-5 border-b">{props.locationTag}</Text>
      </View>

      {/* Footer */}
      <View style={tw`flex-row items-center justify-between`}>
        <View>
          <Text style={tw`text-emerald-400 text-xs mb-2`}>Start Date</Text>
          <Text style={tw`text-xs`}>
            {format(props.start_date, 'dd MMM yyyy')}
          </Text>
        </View>
        <View>
          <Text style={tw`text-emerald-400 text-xs mb-2`}>End Date</Text>
          <Text style={tw`text-xs`}>
            {format(props.due_date, 'dd MMM yyyy')}
          </Text>
        </View>
        <View>
          <Text style={tw`text-emerald-400 text-xs mb-2`}>Estimate Date</Text>
          <Text style={tw`text-xs`}>
            {format(props.estimate_time, 'dd MMM yyyy')}
          </Text>
        </View>
        <View>
          <Text style={tw`text-emerald-400 text-xs mb-2`}>Priority</Text>
          <Text style={tw`text-xs px-2  rounded-md bg-red-100 text-red-400`}>
            {capitalize(props.priority)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
