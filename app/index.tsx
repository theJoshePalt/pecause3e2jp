import CustomText from "@/components/ui/CustomText";
import "../Global.css";
import { View, Text, TextInput, Pressable, Image, ImageBackground } from "react-native";
import React, { useState } from "react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = () => {
    console.log("Sign Up with:", email, password);
    // Aquí iría la lógica de Firebase
  };
  
  return (
    <ImageBackground 
      source={require("../assets/images/icon.png")}
      className="w-screen h-screen flex justify-center items-center"
      resizeMode="cover"
    >

      <View className="bg-black/50 p-10 w-80 items-center shadow-xl">
        <Text className="text-3xl font-bold text-[#B8EDFF] mb-6">Sign Up</Text>
      
      <TextInput
          className="w-full p-3 rounded-xl bg-[#8AE2FF] border-[#2ECBFF] mb-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="w-full p-3 rounded-xl bg-[#8AE2FF] border-[#2ECBFF] mb-6"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

      </View>
    </ImageBackground>
  );
}
