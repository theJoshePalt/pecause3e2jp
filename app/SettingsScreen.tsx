import { View, Text, ImageBackground } from "react-native";
import React from 'react'

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
    <ImageBackground
          source={require("../assets/images/icon.png")}
          className="w-screen h-screen flex p-20 items-center "
          resizeMode="cover"
          imageStyle={{ opacity: 0.6 }}
        >
    <View>
        <Text className="text-3xl font-bold text-[#00FFFF]">Welcome to the Settings</Text>
    </View>
    
    </ImageBackground>
    </View>
  )
}

export default SettingsScreen