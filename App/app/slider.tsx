import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, Animated, Dimensions, Platform } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Link } from 'expo-router';
import * as NavigationBar from 'expo-navigation-bar';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface SlideItem {
  key: string;
  title: string;
  text: string;
  image: any;
}

const slides: SlideItem[] = [
  {
    key: '1',
    title: 'welcome to the fun magic media',
    text: 'welcome to shi-chat one otf the best  chat apps in the world, wonnecting you to both old and new friends and family. Providing you with the best user experience.',
    image: require('../assets/images/slider/img1.png'),
  },
  {
    key: '2',
    title: 'creating beautiful memories',
    text: 'welcome to shi-chat one otf the best  chat apps in the world, wonnecting you to both old and new friends and family. Providing you with the best user experience.',
    image: require('../assets/images/slider/img2.png'),
  },
  {
    key: '3',
    title: 'best social app to make new friends',
    text: 'Discover new connections in a safe and friendly environment',
    image: require('../assets/images/slider/img3.png'),
  },
];

const Slider = () => {
  const dotAnimations = slides.map(() => new Animated.Value(0));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    StatusBar.setHidden(true);
    
    // Set navigation bar to be visible with 20% opacity
    if (Platform.OS === 'android') {
      NavigationBar.setVisibilityAsync("visible");
      NavigationBar.setBackgroundColorAsync("#FFFFFF33"); // 20% opacity white (33 is hex for 20%)
      NavigationBar.setButtonStyleAsync("dark");
    }
    
    return () => {
      StatusBar.setHidden(false);
      if (Platform.OS === 'android') {
        NavigationBar.setVisibilityAsync("visible");
        NavigationBar.setBackgroundColorAsync("white"); // Reset to default
        NavigationBar.setButtonStyleAsync("light");
      }
    };
  }, []);

  const animateDots = (currentIndex: number) => {
    dotAnimations.forEach((anim, index) => {
      Animated.spring(anim, {
        toValue: index === currentIndex ? 1 : 0,
        useNativeDriver: false,
        bounciness: 6,
        speed: 12,
      }).start();
    });
  };

  const onSlideChange = (index: number) => {
    setCurrentIndex(index);
    animateDots(index);
  };

  const renderItem = ({ item }: { item: SlideItem }) => (
    <View className="flex-1 items-center justify-center bg-transparent">
      <Image 
        source={item.image} 
        className="w-full h-1/2"
        resizeMode="contain"
      />
      <View className="mt-8 px-4">
        <Text className="text-4xl capitalize px-5 font-bold text-black text-center mb-4">{item.title}</Text>
        <Text className="capitalize text-base text-gray-600 text-start mt-3">{item.text}</Text>
      </View>
    </View>
  );

  const renderNextButton = () => (
    <TouchableOpacity className="px-6 py-3">
      <Text className="text-primary font-bold text-base">Next</Text>
    </TouchableOpacity>
  );

  const renderSkipButton = () => (
    <View /> // Empty view to hide the skip button
  );

  const renderPagination = (activeIndex: number) => {
    animateDots(activeIndex);
    
    return (
      <View className="flex-row justify-center items-center mb-12">
        {slides.map((_, index) => {
          const scale = dotAnimations[index].interpolate({
            inputRange: [0, 1],
            outputRange: [1, 1.5],
          });
          
          const backgroundColor = dotAnimations[index].interpolate({
            inputRange: [0, 1],
            outputRange: ['rgba(0, 0, 0, 0.2)', '#01FFE1'],
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              className="rounded-full mx-1 mb-6"
              style={{
                width: 8,
                height: 8,
                backgroundColor,
                transform: [{ scale }],
              }}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white">
      {/* Arrow button that only shows on last slide */}
      {currentIndex === slides.length - 1 && (
        <Link href="/register" asChild>
          <TouchableOpacity className="absolute top-10 right-5 z-50 p-2">
            <Ionicons name="arrow-forward" size={24} color="black" />
          </TouchableOpacity>
        </Link>
      )}
      
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        renderNextButton={renderNextButton}
        renderSkipButton={renderSkipButton}
        renderDoneButton={() => null} // Remove done button
        renderPagination={renderPagination}
        showSkipButton={false} // Hide skip button
        activeDotStyle={{ display: 'none' }}
        dotStyle={{ display: 'none' }}
        onSlideChange={onSlideChange}
      />
    </View>
  );
};

export default Slider;