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
    <ImageBackground
          source={require("../../assets/images/icon.png")}
          className="w-screen h-screen flex p-20 items-center "
          resizeMode="cover"
          imageStyle={{ opacity: 0.6 }}
        >
      <View >
        <Text className="text-[#00FFFF] text-2xl font-bold  text-center">Welcome to the Settings</Text>
      </View>




      <TouchableOpacity 
        className="mt-2 bg-[#003647] px-6 py-3 rounded-xl shadow-md">
          <Text className="text-[#5CD6FF] font-bold text-sm text-center">
            Edit profile
          </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => {router.push('/HomeScreen');}} 
        className="mt-2 bg-[#003647] px-6 py-3 rounded-xl shadow-md">
          <Text className="text-[#5CD6FF] font-bold text-sm text-center">
            Home
          </Text>  
      </TouchableOpacity>

      <TouchableOpacity 
        className="mt-2 bg-[#450000] p-4 rounded-lg "
        onPress={() => {router.push('/');}}>
          <Text className="text-[#EF1010] font-semibold text-center">
            Log Out
          </Text>
      </TouchableOpacity>
    </ImageBackground>
    </View>
  )
}

export default SettingsScreen