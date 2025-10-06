import CustomText from "@/components/ui/CustomText";
import "../Global.css";
import { View, Text, TextInput, Pressable, Image, ImageBackground } from "react-native";
import React, { useState } from "react";

export default function Index() {
  
  return (
    <ImageBackground 
      source={require("../assets/images/icon.png")}
      className="w-screen h-screen flex justify-center items-center"
      resizeMode="cover"
    >

      <View className="bg-black/50 p-10 w-80 items-center shadow-xl">
        <Text className="text-3xl font-bold text-[#B8EDFF] mb-6">Sign Up</Text>
      </View>
    </ImageBackground>
  );
}
