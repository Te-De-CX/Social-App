
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50 pt-4 px-6 justify-center">
      <View className="mb-10  flex-col gap-2 text-gray-800 capitalize w-2/2">
        <Text className="text-5xl  font-bold">Create your</Text>
        <Text className="text-5xl  font-bold">account</Text>
      </View>

      <View className="space-y-4 flex-col gap-5 mt-5">
        <View className="flex-row items-center bg-white rounded-lg p-4 border border-gray-200">
          <Ionicons name="person-outline" size={20} color="black" style={{ marginRight: 10 }} />
          <TextInput
            placeholder="User Name"
            className="flex-1 placeholder:text-black text-lg"
            placeholderTextColor="black"
          />
        </View>

        <View className="flex-row items-center bg-white rounded-lg p-4 border border-gray-200">
          <Ionicons name="mail-outline" size={20} color="black" style={{ marginRight: 10 }} />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            className="flex-1 placeholder:text-black text-lg"
            placeholderTextColor="black"
          />
        </View>

        <View className="flex-row items-center bg-white rounded-lg p-4 border border-gray-200">
          <Ionicons name="lock-closed-outline" size={20} color="black" style={{ marginRight: 10 }} />
          <TextInput
            placeholder="Password"
            secureTextEntry
            className="flex-1 placeholder:text-black text-lg"
            placeholderTextColor="black"
          />
        </View>
      </View>

      <TouchableOpacity className="mt-8 bg-[#01FFE1] py-3 rounded-2xl">
        <Link href="/login"  className="text-[#001210] capitalize py-3 text-2xl text-center font-semibold">
          <Text>Register</Text>
        </Link>
      </TouchableOpacity>

      <View className="mt-6 mb-5 flex-row justify-center items-center">
        <Text className="text-black text-xl capitalize font-semibold">Already have an account? </Text>
        <Text className="text-[#00463E] font-bold text-lg">Sign In</Text>
      </View>
      
      <View className='w-screen h-px bg-black' style={{marginLeft: -24}} /> 
      
      <View className="mt-3 flex-row justify-center">
        <Text className="text-black text-xl mb-4 capitalize font-semibold">Continue with accounts</Text>
      </View>
      
      <View className='flex-row w-full items-center justify-between '>
        <TouchableOpacity className='bg-[#7FFFF0] rounded-2xl p-6 flex-1 mr-2 items-center justify-center'>
          <Ionicons name="logo-google" size={30} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity className='bg-[#7FFFF0] rounded-2xl p-6 flex-1 ml-2 items-center justify-center'>
          <Ionicons name="logo-apple" size={30} color="black" />        
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;