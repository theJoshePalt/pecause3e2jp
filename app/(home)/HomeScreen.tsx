import React from "react";
import { View, Text ,TouchableOpacity} from "react-native";
import { Link } from "expo-router";
import { router } from "expo-router";

export default function Home() {
  return (
    <View 
        style={{ flex: 1, backgroundColor: 'black' }} 
        className="flex-1 justify-center items-center"
        >
    
        <Text className="text-[#00FFFF] text-2xl font-bold mb-4">Welcome to Home</Text>
        <TouchableOpacity 
          onPress={() => {router.push('/SettingsScreen');}} 
          className="mt-2 bg-[#B8EEFF] px-6 py-3 rounded-xl shadow-md">
            <Text className="text-[#007AA3] font-bold text-lg underline text-center">
                Settings ⚙️
            </Text>
        </TouchableOpacity>
    </View>
  );
}