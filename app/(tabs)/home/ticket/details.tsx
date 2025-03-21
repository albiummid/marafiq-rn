import ScreenWrapper from '@/components/layout/screen-wrapper';
import Tab from '@/components/tab';
import ActionDropdown from '@/components/ticket/ActionDropdown';
import CommentTab from '@/components/ticket/comment-tab';
import DetailsTab from '@/components/ticket/detail-tab';
import HistoryTab from '@/components/ticket/history-tab';
import TasksTab from '@/components/ticket/task-tab';
import tw from '@/libs/tw';
import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
const ticketDetails = {
  title: 'HVAC Monthly Preventive Maintenance - AC',
  description:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of odistribution odistribution of letters, ',
  image: 'https://picsum.photos/id/870/200/300?grayscale',
};
const ticketTasks = [
  {
    category: 'General',
    tasks: [
      {
        title: 'omuk',
        done: false,
      },
      {
        title: 'grocery shopping',
        done: true,
      },
      {
        title: 'finish homework',
        done: false,
      },
      {
        title: 'call mom',
        done: false,
      },
      {
        title: 'exercise',
        done: true,
      },
      {
        title: 'read a book',
        done: false,
      },
      {
        title: 'clean the house',
        done: false,
      },
      {
        title: 'pay bills',
        done: false,
      },
      {
        title: 'schedule doctor appointment',
        done: false,
      },
      {
        title: 'plan weekend trip',
        done: false,
      },
    ],
  },
  {
    category: 'Redesign Tasks',
    tasks: [
      {
        title: 'try a new workout',
        done: false,
      },
      {
        title: 'explore a new podcast',
        done: false,
      },
      {
        title: 'make a vision board',
        done: false,
      },
      {
        title: 'visit a museum',
        done: false,
      },
      {
        title: 'write a letter to a friend',
        done: false,
      },
      {
        title: 'plan a family game night',
        done: false,
      },
      {
        title: 'learn a new language',
        done: false,
      },
      {
        title: 'bake something sweet',
        done: false,
      },
      {
        title: 'go to a local event',
        done: false,
      },
      {
        title: 'set monthly goals',
        done: false,
      },
      {
        title: 'try a new restaurant',
        done: false,
      },
    ],
  },
];

interface HistoryItem {
  creator: string;

  timestamp: string;
}

const historyData: HistoryItem[] = [
  {creator: 'John Smith', timestamp: '8 April, 2023 2:15 PM'},

  {creator: 'Emily Johnson', timestamp: '8 April, 2023 2:45 PM'},

  {creator: 'Michael Brown', timestamp: '8 April, 2023 3:05 PM'},

  {creator: 'Sarah Davis', timestamp: '8 April, 2023 3:25 PM'},

  {creator: 'David Wilson', timestamp: '8 April, 2023 3:35 PM'},

  {creator: 'Lisa Taylor', timestamp: '8 April, 2023 3:50 PM'},

  {
    creator: 'James Anderson',
    timestamp: '8 April, 2023 4:00 PM',
  },
];

interface Comment {
  id: number;

  name: string;

  timestamp: string;

  text: string;
}

const commentsData: Comment[] = [
  {
    id: 1,

    name: 'Mahmoud Ahmed',

    timestamp: '8 April, 2023 3:50 PM',

    text: 'It is a long established fact that a reader will be normal distribution.',
  },

  {
    id: 2,

    name: 'Mahmoud Ahmed',

    timestamp: '8 April, 2023 3:50 PM',

    text: 'It is a long established fact that a reader will be normal distribution.',
  },

  {
    id: 3,

    name: 'Mahmoud Ahmed',

    timestamp: '8 April, 2023 3:50 PM',

    text: 'It is a long established fact that a reader will be normal distribution.',
  },
];
const actionData = [
  {
    label: 'Working',
    value: 'working',
  },
  {
    label: 'Pass',
    value: 'pass',
  },
  {
    label: 'Failed',
    value: 'failed',
  },
];

const tabData = [
  {
    label: 'Details',
    value: 'details',
    component: <DetailsTab />,
  },
  {
    label: 'Tasks',
    value: 'tasks',
    component: <TasksTab />,
  },
  {
    label: 'History',
    value: 'history',
    component: <HistoryTab />,
  },
  {
    label: 'Comments',
    value: 'comments',
    component: <CommentTab />,
  },
];

export default function TicketDetailScreen() {
  const [currentStatus, setCurrentStatus] = useState(actionData[0].value);
  const [activeTab, setActiveTab] = useState(tabData[0].value);

  return (
    <ScreenWrapper style={tw`bg-white`} title="Details">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={tw`gap-2`}>
          <Image
            source={{uri: ticketDetails.image}}
            style={tw`h-40 rounded-lg mb-1`}
          />
          <Text>{ticketDetails.title}</Text>
          <Text style={tw`text-xs`}>{ticketDetails.description}</Text>
        </View>

        {/* Action dropdown */}
        <ActionDropdown
          containerStyle={tw`my-2`}
          data={actionData}
          onChange={setCurrentStatus}
          value={currentStatus}
        />
        <Tab
          style={tw`pb-2`}
          data={tabData}
          onChange={setActiveTab}
          value={activeTab}
        />
      </ScrollView>
    </ScreenWrapper>
  );
}
