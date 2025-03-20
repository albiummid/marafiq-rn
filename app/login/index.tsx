import { images } from "@/assets";
import { useAuthState } from "@/libs/global-state/store";
import tw from "@/libs/tw";
import { Feather } from "@expo/vector-icons"; // Import Feather icons
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const LoginScreen = () => {
  const {login,isAuthenticated,isLoading} = useAuthState()
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={tw`flex-1 bg-gray-100 justify-center px-6`}>
      {/* Logo */}
      <View style={tw`items-center mb-6`}>
        <Image source={images.logo} style={tw`w-32 h-16`} resizeMode="contain" />
      </View>

      {/* Welcome Text */}
      <Text style={tw`text-xl font-bold text-center text-gray-800`}>
        WELCOME TO MARAFIQ 👋
      </Text>
      <Text style={tw`text-gray-600 text-center mt-1`}>
        Log In With Ease And Enjoy Limitless Possibilities
      </Text>

      {/* Input Fields */}
      <View style={tw`mt-6`}>
        {/* Email */}
        <Text style={tw`text-gray-700 font-medium mb-1`}>E-Mail</Text>
        <View style={tw`flex-row border border-gray-300 rounded-lg px-4 py-3 items-center bg-white`}>
          <Feather name="mail" size={20} color="gray" />
          <TextInput
            placeholder="Enter Your Email"
            placeholderTextColor="gray"
            style={tw`flex-1 ml-2 text-gray-800`}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password */}
        <Text style={tw`text-gray-700 font-medium mt-4 mb-1`}>Password</Text>
        <View style={tw`flex-row border border-gray-300 rounded-lg px-4 py-3 items-center bg-white`}>
          <Feather name="lock" size={20} color="gray" />
          <TextInput
            placeholder="Enter Your Password"
            placeholderTextColor="gray"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
            style={tw`flex-1 ml-2 text-gray-800`}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Feather name={passwordVisible ? "eye-off" : "eye"} size={20} color="gray" />
          </TouchableOpacity>
        </View>

        
      </View>

      {/* Login Button */}
      <TouchableOpacity
        style={tw`mt-6 mx-auto px-15 bg-black py-2 rounded-lg`}
        onPress={async() => {
          const success = await login(email, password);
          console.log(success)
        }}
      >
        <Text style={tw`text-white  text-lg font-semibold text-center`}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
