import tw from '@/libs/tw';
import {getRandomTailwindColor} from '@/libs/utils';
import {format} from 'date-fns';
import React from 'react';
import {Text, View} from 'react-native';

const infoList = [
  [
    {
      label: 'Team Work',
      value: 'Your team work',
    },
    {
      label: 'Category Problems',
      value: 'Mahmud Ahmed',
    },
  ],
  [
    {
      label: 'PM Trigger',
      value: 'HVAC Preventive\nMaintenance',
    },
    {
      label: 'Category',
      value: 'Preventative',
    },
  ],
  [
    {
      label: 'Location',
      value: 'Suite B - 10880 Wilshire Blvd',
    },
    {
      label: 'Created',
      value: 'June 20, 2023',
    },
  ],
  [
    {
      label: 'Team Work',
      value: 'Team one',
    },
    {
      label: 'Sub Category Problems',
      value: 'June 20, 2023',
    },
  ],
  [
    {
      label: 'Asset',
      value: 'TRANE HVAC Suite B',
    },
  ],
];

const timeList = [
  {
    label: 'Start At',
    value: format(Date.now(), 'hh:mm a'),
  },
  {
    label: 'Assignee At',
    value: format(Date.now(), 'hh:mm a'),
  },
  {
    label: 'Working At',
    value: format(Date.now(), 'hh:mm a'),
  },
  {
    label: 'Closed At',
    value: format(Date.now(), 'hh:mm a'),
  },
  {
    label: 'Completed At',
    value: format(Date.now(), 'hh:mm a'),
  },
  {
    label: 'Estimate At',
    value: format(Date.now(), 'hh:mm a'),
  },
];

const assignedUsers = [
  'Albi Ummid Tanvir',
  'Mezbaul Alam Fahim',
  'Adham Abhi',
  'Mehedi Hasan',
];

export default function DetailsTab() {
  return (
    <View style={tw``}>
      {/* Info Section */}
      <View style={tw`border-b border-gray-300 mb-2`}>
        {infoList.map((x, i) => (
          <InfoCard key={i} data={x} />
        ))}
      </View>

      {/* Time section */}
      <View
        style={tw`border-b border-gray-300 mb-2 flex-row flex-wrap gap-5 justify-center py-2`}>
        {timeList.map((x, i) => (
          <TimeCard key={i} {...x} />
        ))}
      </View>

      {/* Assign section */}
      <View style={tw`pb-2`}>
        <Text style={tw`text-xs font-semibold text-gray-400 mb-2`}>
          Assigned To
        </Text>
        <View style={tw`flex-row items-center flex-wrap gap-2`}>
          {assignedUsers?.map(x => (
            <Text
              style={{
                ...tw`text-xs py-1 rounded-sm px-2`,
                ...tw.style(`bg-${getRandomTailwindColor({shade: '100'})}`),
              }}
              key={x}>
              {x}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}

type InfoCardProps = {
  data: {
    label: string;
    value: string;
  }[];
};
const InfoCard = (props: InfoCardProps) => {
  const leftData = props.data[0];
  const rightData = props.data[1];
  return (
    <View style={tw`flex-row mb-2  items-center`}>
      <View style={tw`flex-1`}>
        <Text style={tw`text-xs mb-2 text-emerald-400`}>{leftData.label}</Text>
        <Text style={tw`text-xs pr-2`}>{leftData.value}</Text>
      </View>
      {rightData && (
        <View style={tw`border-l flex-1 border-gray-200 pl-5`}>
          <Text style={tw`text-xs mb-2 text-emerald-400`}>
            {rightData?.label}
          </Text>
          <Text style={tw`text-xs pr-2`}>{rightData?.value}</Text>
        </View>
      )}
    </View>
  );
};

const TimeCard = (props: {label: string; value: string}) => {
  return (
    <View style={tw`items-center`}>
      <Text style={tw`text-xs mb-2`}>{props.label}</Text>
      <Text
        style={tw`bg-emerald-100 text-emerald-500 px-2 rounded-lg text-xs  py-1`}>
        {props.value}
      </Text>
    </View>
  );
};
