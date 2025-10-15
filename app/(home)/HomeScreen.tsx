import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { router } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Home() {
  const playlists = [
    { id: 1, name: ' ¡EXT4CÍS?', songs: 546, bgColor: '#2ECEFF' }, // Este es un color amarillo
    { id: 2, name: ' CONCER7', songs: 8, bgColor: '#00C3FF' },
    { id: 3, name: ' JACKS8N', songs: 8, bgColor: '#00A0D1' },
    { id: 4, name: ' N16GA', songs: 147, bgColor: '#007DA3' },
    { id: 5, name: ' D15CIPLINE', songs: 31, bgColor: '#005A75' },

  ];

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <ImageBackground
        source={require("../../assets/images/icon.png")}
        className="w-screen h-screen flex"
        resizeMode="cover"
      >
        <View className="flex-1 bg-black/50 mx-4"> 
          <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>

            <View className="items-center pt-24 pb-10">
              <Text className="text-white text-xl mb-2">WELCOME TO</Text>
              <View className="flex-row items-center mb-7">
                <AntDesign name="spotify" size={40} color="#2EFFFF" style={{ marginRight: 10 }} />
                <Text className="text-5xl font-bold text-[#00FFFF]">SOUNDTY</Text>
              </View>

              <Text className="text-[#5CD9FF] text-center px-8 text-lg mb-6">
                Listen to your favorite music.
              </Text>

              <TouchableOpacity
                className="bg-[#2EFFFF] px-8 py-3 rounded-2xl shadow-md mb-6"
                onPress={() => alert("Playing your playlist")}
              >
                <Text className="text-[#003747] font-bold text-lg">PLAY</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="bg-[#2EFFFF] px-8 py-3 rounded-2xl shadow-md mb-6"
                onPress={() => { router.push('/(home)/Playlist'); }}
              >
                <Text className="text-[#003747] font-bold text-lg">PLAYLIST</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <TouchableOpacity
          onPress={() => { router.push('/(home)/(tabs)/ProfileDetails'); }}
          className="absolute top-10 right-5 bg-[#003647] p-3 rounded-xl "
        >
          <Text className="text-[#B8EEFF] text-2xl">
            👤
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          className="absolute top-10 left-5 mt-2 bg-[#433305] px-6 py-3 rounded-xl shadow-md border border-[#EFB810]">
          <Text className="text-[#EFB810] font-bold text-sm text-center">
            PREMIUM
          </Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
