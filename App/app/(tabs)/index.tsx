
import { View, Text, Image, ScrollView, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import TextPost from '@/components/layout/TextPost';
import ImgPost from '@/components/layout/ImgPost';

const Index = () => {

  const user = {
    id: 1,
    name: 'Maria Johnes',
    image: require("../../assets/images/users/profile1.jpg"),
    posts: 24,
    isActive: true
  };

  const posts = [
    { id: 1, type: 'text', content: 'Hello world!', date: '2 mins ago', user },
    { id: 2, type: 'image', content: require("../../assets/images/users/profile5.jpg"), text: 'Beautiful day!', date: '1 hour ago', user },
    { id: 3, type: 'text', content: 'Working on my new project', date: '3 hours ago', user },
  ];

  const friends = [
    {
      id: 1,
      name: 'Dave',
      image: require("../../assets/images/users/profile3.jpg"),
      posts: 24,
      isActive: true
    },
    {
      id: 2,
      name: 'Sarah',
      image: require("../../assets/images/users/profile9.jpg"),
      posts: 2,
      isActive: false
    },
    {
      id: 3,
      name: 'Mike',
      image: require("../../assets/images/users/profile4.jpg"),
      posts: 6,
      isActive: true
    },
    {
      id: 4,
      name: 'Emma',
      image: require("../../assets/images/users/profile2.jpg"),
      posts: 0,
      isActive: true
    },
    {
      id: 5,
      name: 'John',
      image: require("../../assets/images/users/profile7.jpg"),
      posts: 32,
      isActive: false
    },
    {
      id: 6,
      name: 'Lisa',
      image: require("../../assets/images/users/profile5.jpg"),
      posts: 19,
      isActive: false
    },
    {
      id: 7,
      name: 'Alex',
      image: require("../../assets/images/users/profile6.jpg"),
      posts: 42,
      isActive: true
    },
    {
      id: 8,
      name: 'Priya',
      image: require("../../assets/images/users/profile4.jpg"),
      posts: 27,
      isActive: true
    },
  ];

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='px-6 pt-4'>
        <Text className='text-3xl font-bold my-2'>Shi Chat</Text>
      </View>
      <View className='py-4'>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='px-4'>
      <View className=' items-center'>
        <View className='relative mb-2'>
          <Image 
            source={require("../../assets/images/users/profile1.jpg")}
            className="w-16 h-16 rounded-full object-cover"
            style={styles.activeBorder}
          />
          <Text className='text-black text-center mt-2 text-lg font-semibold'>You</Text>
        </View>
      </View>
          {friends.map((friend) => (
            <View key={friend.id} className='items-center mx-2'>
              <View className='relative'>
                <Image 
                  source={friend.image}
                  className="w-16 h-16 rounded-full object-cover"
                  style={friend.isActive ? styles.activeBorder : styles.inactiveBorder}
                />
                {friend.isActive && (
                  <View className='w-3 h-3 bg-green-500 rounded-full absolute right-0 bottom-0 border-2 border-white' />
                )}
              </View>
              <Text className='text-black mt-1 font-semibold'>{friend.name}</Text>
            </View>
          ))}
          <View className='mr-5' />
        </ScrollView>

      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          item.type === 'text' ? (
            <TextPost text={item.content} date={item.date} user={item.user} />
          ) : (
            <ImgPost imag={item.content} text={item.text} user={item.user} date={item.date} />
          )
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  activeBorder: {
    borderWidth: 2,
    borderColor: '#ff5e57', // Instagram-like pink/orange
    borderStyle: 'dashed',
  },
  inactiveBorder: {
    borderWidth: 2,
    borderColor: '#e2e8f0', // Light gray
  },
});

export default Index;