import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Link } from 'expo-router';
import * as NavigationBar from 'expo-navigation-bar';

interface SlideItem {
  key: string;
  title: string;
  text: string;
  image: any;
  backgroundColor: string;
}

const slides: SlideItem[] = [
  {
    key: '1',
    title: 'Welcome to My App',
    text: 'Discover amazing features in this app.',
    image: require('../assets/images/icon.png'),
    backgroundColor: '#F9A11B',
  },
  {
    key: '2',
    title: 'Easy to Use',
    text: 'Simple and intuitive interface.',
    image: require('../assets/images/icon.png'),
    backgroundColor: '#4CAF50',
  },
  {
    key: '3',
    title: 'Get Started',
    text: 'Ready to explore? Lets go!',
    image: require('../assets/images/icon.png'),
    backgroundColor: '#2196F3',
  },
];

const Slider = () => {
  // Hide system UI (Android + iOS)
  useEffect(() => {
    StatusBar.setHidden(true);
    NavigationBar.setVisibilityAsync("hidden");
    
    return () => {
      StatusBar.setHidden(false);
      NavigationBar.setVisibilityAsync("visible");
    };
  }, []);

  const renderItem = ({ item }: { item: SlideItem }) => (
    <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
      <Text style={styles.title}>{item.title}</Text>
      <Image 
        source={item.image} 
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  const renderNextButton = () => (
    <View style={styles.button}>
      <Text style={styles.buttonText}>Next</Text>
    </View>
  );

  const renderDoneButton = () => (
    <View style={styles.button}>
      <Link href="/auth" asChild>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );

  const renderSkipButton = () => (
    <View style={styles.skipButton}>
      <Link href="/auth" asChild>
        <TouchableOpacity>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      renderSkipButton={renderSkipButton}
      showSkipButton={true}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  image: {
    width: '80%',
    height: 200,
    marginVertical: 30,
    maxWidth: 300,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
    paddingHorizontal: 25,
  },
  buttonText: {
    color: '#F9A11B',
    fontWeight: 'bold',
    fontSize: 16,
  },
  skipButton: {
    padding: 10,
  },
  skipButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  dotStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 8,
    height: 8,
  },
  activeDotStyle: {
    backgroundColor: 'white',
    width: 10,
    height: 10,
  },
});

export default Slider;