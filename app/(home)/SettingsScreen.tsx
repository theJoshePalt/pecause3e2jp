import { View, Text, ImageBackground } from "react-native";
import React from 'react'
import { Link } from "expo-router";

const SettingsScreen = () => {
  return (
    <View 
      style={{ flex: 1, backgroundColor: 'black' }}
      className="flex-1 justify-center items-center"
      >
      <View>
        <Text className="text-[#00FFFF] text-2xl font-bold  text-center">Welcome to the Settings</Text>
      </View>

      <Link href="/HomeScreen">
        <Text className="text-[#007AA3] font-bold underline text-center text-sm">Return to Home</Text>
      </Link>
    
    </View>
  )
}

export default SettingsScreen