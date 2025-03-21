import { images } from "@/assets";
import tw from "@/libs/tw";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

// Onboarding data
const slides = [
  {
    id: "1",
    title: "Welcome 👋",
    description:
      "Facilities Easy Integration And Innovative Digital Platform For Facility Management",
    image: images.onboarding1,
  },
  {
    id: "2",
    title: "Automation",
    description:
      "Digital Transformation Of The Facilities Management Sector Through Automation And Facilitation Of Management",
    image: images.onboarding2,
  },
  {
    id: "3",
    title: "Business governance",
    description: "Moving Platforms Ensures Business Governance Standards",
    image: images.onboarding3,
  },
];

const OnboardingScreen = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToOffset({ offset: nextIndex * width, animated: true });
      setCurrentIndex(nextIndex);
    } else {
      router.replace("/login"); // Navigate to home after onboarding
    }
  };

  return (
    <View style={tw`flex-1 bg-gray-100 items-center justify-center`}>
      {/* Header with Logo & Skip */}
      <View style={tw`justify-between items-center flex-row w-full px-5 mt-5`}>
        <Image source={images.logo} style={tw`w-20 h-10`} resizeMode="contain" />
        <TouchableOpacity onPress={() => router.replace("/login")}>
          <Text style={tw`text-gray-500 text-sm`}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Onboarding Screens */}
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <View style={tw`w-[${width}px] items-center px-5`}>
            <Image
              source={item.image}
              style={tw`w-[${width * 0.8}px] h-[${height * 0.6}px]`}
              resizeMode="contain"
            />
            <Text style={tw`text-xl font-bold text-gray-800 mt-5 text-center`}>
              {item.title}
            </Text>
            <Text style={tw`text-base text-gray-600 text-center mt-2`}>
              {item.description}
            </Text>
          </View>
        )}
      />

      {/* Pagination Dots */}
      <View style={tw`flex-row absolute bottom-20`}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              tw`h-2 rounded-full mx-1`,
              currentIndex === index ? tw`w-4 bg-primaryBGDark` : tw`w-2 bg-gray-500`,
            ]}
          />
        ))}
      </View>

      {/* Next / Get Started Button */}
      <TouchableOpacity
        style={tw`absolute bottom-5 bg-baseBGDark px-10 py-3 rounded-lg`}
        onPress={handleNext}
      >
        <Text style={tw`text-white text-lg font-semibold`}>
          {currentIndex === slides.length - 1 ? "Get Started" : "Next"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;
