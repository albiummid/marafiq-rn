import { colors } from '@/constants/colors';
import tw from '@/libs/tw';
import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';

export default function TabLayout() {
 
  return (
    <Tabs
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: colors.green600,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: tw`py-2 h-14 px-5`,
        // tabBarLabelPosition:'beside-icon',    
        tabBarShowLabel:false
      }}>
      <Tabs.Screen
        name="home"
        options={{
          animation:"none",
          tabBarIcon: ({color,focused,size})=>(<View style={tw.style(`h-8 w-24 rounded-lg gap-2 items-center flex-row justify-center`,focused?`bg-green100`:'')}>
          <Feather style={tw.style(focused)} color={focused?color:'gray'} size={20} name='home'/>
          {focused && <Text style={[{color:color},tw`font-bold`]}>Home</Text>}
          </View>),
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          tabBarIcon: ({color,focused,size})=>(<View style={tw.style(`h-8 w-24 rounded-lg gap-2 items-center flex-row justify-center`,focused?`bg-green100`:'')}>
          <Feather style={tw.style(focused)} color={focused?color:'gray'} size={20} name='bar-chart-2'/>
          {focused && <Text style={[{color:color},tw`font-bold`]}>Statistics</Text>}
          </View>),
        }}
   
      />
      <Tabs.Screen
        name="request"
        options={{
          tabBarIcon: ({color,focused,size})=>(<View style={tw.style(`h-8 w-24 rounded-lg gap-2 items-center flex-row justify-center`,focused?`bg-green100`:'')}>
          <Feather style={tw.style(focused)} color={focused?color:'gray'} size={20} name='plus-circle'/>
          {focused && <Text style={[{color:color},tw`font-bold`]}>Requests</Text>}
          </View>),
        }}
      
      />
      <Tabs.Screen
        name="meters"
        options={{
          tabBarIcon: ({color,focused,size})=>(<View style={tw.style(`h-8 w-24 rounded-lg gap-2 items-center flex-row justify-center`,focused?`bg-green100`:'')}>
          <Feather style={tw.style(focused)} color={focused?color:'gray'} size={20} name='activity'/>
          {focused && <Text style={[{color:color},tw`font-bold`]}>Meters</Text>}
          </View>),
        }}
      />
    </Tabs>
  );
}
