import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from 'react'
import { Link } from "expo-router";
import { router } from "expo-router";

const SettingsScreen = () => {
  return (
    <View 
      style={{ flex: 1, backgroundColor: 'black' }}
      className="flex-1 justify-center items-center"
      >
      <View>
        <Text className="text-[#00FFFF] text-2xl font-bold  text-center">Welcome to the Settings</Text>
      </View>

      <TouchableOpacity 
        onPress={() => {router.push('/HomeScreen');}} 
        className="mt-2 bg-[#B8EEFF] px-6 py-3 rounded-xl shadow-md">
          <Text className="text-[#007AA3] font-bold underline text-center text-sm">Return to Home</Text>
      </TouchableOpacity>
    
    </View>
  )
}

export default SettingsScreen