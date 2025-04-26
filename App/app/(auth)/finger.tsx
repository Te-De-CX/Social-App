
import {  Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FingerPrint = () => {
    
  return (
    <SafeAreaView className="flex-1 bg-gray-50 pt-4 px-6">

      <TouchableOpacity className="mt-8 bg-[#01FFE1] py-3 rounded-2xl">
        <Text className="text-[#001210] capitalize py-3 text-2xl text-center font-semibold">sign up with fingerprint</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
};

export default FingerPrint;