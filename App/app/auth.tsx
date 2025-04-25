import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50 p-6">
      {/* Header */}
      <View className="mb-10">
        <Text className="text-3xl font-bold text-gray-800">Welcome</Text>
        <Text className="text-gray-500">Sign in to continue</Text>
      </View>

      {/* Input Fields */}
      <View className="space-y-4">
        {/* First Name */}
        <View className="flex-row items-center bg-white rounded-lg p-3 border border-gray-200">
          <Icon name="user" size={16} color="#9CA3AF" className="mr-2" />
          <TextInput
            placeholder="First Name"
            className="flex-1 text-gray-700"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Surname */}
        <View className="flex-row items-center bg-white rounded-lg p-3 border border-gray-200">
          <Icon name="user" size={16} color="#9CA3AF" className="mr-2" />
          <TextInput
            placeholder="Surname"
            className="flex-1 text-gray-700"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Email */}
        <View className="flex-row items-center bg-white rounded-lg p-3 border border-gray-200">
          <Icon name="envelope" size={16} color="#9CA3AF" className="mr-2" />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            className="flex-1 text-gray-700"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Password */}
        <View className="flex-row items-center bg-white rounded-lg p-3 border border-gray-200">
          <Icon name="lock" size={16} color="#9CA3AF" className="mr-2" />
          <TextInput
            placeholder="Password"
            secureTextEntry
            className="flex-1 text-gray-700"
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity className="mt-8 bg-blue-500 py-3 rounded-lg shadow">
        <Text className="text-white text-center font-semibold">Continue</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View className="mt-6 flex-row justify-center">
        <Text className="text-gray-500">Already have an account? </Text>
        <Text className="text-blue-500 font-medium">Sign In</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;