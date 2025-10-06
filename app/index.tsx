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
    </ImageBackground>
  );
}
