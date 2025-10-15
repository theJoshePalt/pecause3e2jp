import React from "react";
import { View, Text ,TouchableOpacity , ImageBackground} from "react-native";
import { router } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Home() {
  return (
    <View 
      style={{ flex: 1, backgroundColor: 'black' }} 
      className="flex-1 justify-center items-center"
    >
    <ImageBackground
      source={require("../../assets/images/icon.png")}
      className="w-screen h-screen flex p-20 items-center "
      resizeMode="cover"       
    >
      
      <TouchableOpacity 
        onPress={() => {router.push('/SettingsScreen');}} 
        className="absolute top-10 right-5 bg-[#007DA3] px-3 py-2 shadow-md"
      >
        <Text className="text-[#B8EEFF] font-bold text-lg text-center ">
          ⚙️
        </Text>
      </TouchableOpacity>

      <View 
        className="top-32 justify-center items-center bg-black/50 p-10 w-80 shadow-xl">

        <Text className="text-[#00141A] text-xl font-bold mb-2 justify-center items-center">WELCOME TO </Text>
        <Text className="text-5xl font-bold text-[#00FFFF] mb-7">SOUNDTY</Text>

        <AntDesign name="spotify" size={100} color="#2EFFFF" className="mb-6" />

        <Text className="text-[#5CD9FF] text-center px-10 text-lg mb-6">
          Listen your favorite music.
        </Text>

        <TouchableOpacity
          className="bg-[#2EFFFF] px-8 py-3 rounded-2xl shadow-md"
          onPress={() => alert("Playing your playlist ")}
        >
          <Text className="text-[#003747] font-bold text-lg">PLAY</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    </View>
  );
}