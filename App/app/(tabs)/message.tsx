
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { ImageSourcePropType } from 'react-native';

type Message = {
  id: string;
  text: string;
  time: string;
  isRead: boolean;
};

type Friend = {
  id: string;
  name: string;
  avatar: ImageSourcePropType;
  lastMessage: Message;
  unreadCount: number;
};

const MessagesScreen = () => {
  // Sample data
  const messages: Friend[] = [
    {
      id: '1',
      name: 'Alex Johnson',
      avatar: require("../../assets/images/users/profile6.jpg"),
      lastMessage: {
        id: '101',
        text: 'Hey, how are you doing?',
        time: '10:30 AM',
        isRead: false,
      },
      unreadCount: 2,
    },
    {
      id: '2',
      name: 'Sarah Williams',
      avatar: require("../../assets/images/users/profile9.jpg"),
      lastMessage: {
        id: '102',
        text: 'Meeting at 3pm tomorrow',
        time: 'Yesterday',
        isRead: true,
      },
      unreadCount: 0,
    },
    {
      id: '3',
      name: 'Michael Chen',
      avatar: require("../../assets/images/users/profile4.jpg"),
      lastMessage: {
        id: '103',
        text: 'Please review the documents I sent',
        time: 'Yesterday',
        isRead: false,
      },
      unreadCount: 1,
    },
    {
      id: '4',
      name: 'Emily Davis',
      avatar: require("../../assets/images/users/profile3.jpg"),
      lastMessage: {
        id: '104',
        text: 'Thanks for your help!',
        time: 'Monday',
        isRead: true,
      },
      unreadCount: 0,
    },
  ];

  const renderItem = ({ item }: { item: Friend }) => (
    <TouchableOpacity style={styles.messageItem}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={[styles.time, !item.lastMessage.isRead && styles.unreadTime]}>
            {item.lastMessage.time}
          </Text>
        </View>
        <View style={styles.messagePreview}>
          <Text 
            style={[
              styles.messageText,
              !item.lastMessage.isRead && styles.unreadMessage
            ]}
            numberOfLines={1}
          >
            {item.lastMessage.text}
          </Text>
          {item.unreadCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.unreadCount}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingBottom: 16,
    color: '#333',
  },
  listContent: {
    paddingHorizontal: 16,
  },
  messageItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  time: {
    fontSize: 12,
    color: '#6c757d',
  },
  unreadTime: {
    color: '#007bff',
    fontWeight: '600',
  },
  messagePreview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageText: {
    fontSize: 14,
    color: '#6c757d',
    flex: 1,
    marginRight: 8,
  },
  unreadMessage: {
    color: '#333',
    fontWeight: '600',
  },
  badge: {
    backgroundColor: '#007bff',
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default MessagesScreen;