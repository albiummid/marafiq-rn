import tw from '@/libs/tw';
import {format} from 'date-fns';
import React, {useReducer} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Accordion} from '../accordion';
import CheckBox from '../checkbox';
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

export default function TasksTab() {
  const [checked, toggle] = useReducer(v => !v, false);
  const handleChange = () => {
    toggle();
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {ticketTasks?.map(x => (
        <Accordion
          key={x.category}
          headerComponent={<Text>{x.category}</Text>}
          collapsedComponent={
            <View style={tw`ml-2 mt-5`}>
              {x.tasks.map(y => (
                <View>
                  <View
                    style={tw`flex-row mr-auto items-center gap-2`}
                    key={y.title}>
                    <CheckBox
                      title={y.title}
                      value={y.done}
                      onChange={handleChange}
                    />
                  </View>
                  <Text style={tw`ml-auto my-1 text-xs`}>
                    {y.done && format(Date.now(), 'dd MMM,yyyy hh:mm a')}
                  </Text>
                </View>
              ))}
            </View>
          }
        />
      ))}
    </ScrollView>
  );
}
