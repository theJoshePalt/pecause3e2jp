import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Linking } from "react-native";
import { router } from "expo-router";

export default function Playlist() {

  
  const abrirLink = (link: string): void => {
    Linking.openURL(link); 
  };

  // Lista de canciones
  const songs: { id: number; title: string; link: string }[] = [
    { id: 1, title: "¡EXT4CÍS?", link: "https://open.spotify.com/playlist/5SJGicsspRIbAAKOWbshnf" },
    { id: 2, title: "CONCER7", link: "https://open.spotify.com/playlist/5FDO6zFACyKwve7O8Bg7k3" },
    { id: 3, title: "JACKS8N", link: "https://open.spotify.com/playlist/56PU7eEd1AaGaCmm125z2g" },
    { id: 4, title: "N16GA", link: "https://open.spotify.com/playlist/2nFinfkLsEqsNxubDKR6nG" },
    { id: 5, title: "D15CIPLINE", link: "https://open.spotify.com/playlist/5LMfZe0KV4J8mwzlmdKWPf" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#00141A' }}>
      
      <ScrollView className="px-6 mt-6">
        {songs.map((song) => (
          <TouchableOpacity
            key={song.id}
            onPress={() => abrirLink(song.link)}
            className="bg-blue-900/60 p-4 mb-3 border border-[#8AFFFF] rounded-lg"
          >
            <Text className="text-white text-lg font-semibold">{song.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>


    <TouchableOpacity 
        onPress={() => {router.push('/HomeScreen');}} 
        className="mt-2 bg-[#003647] px-6 py-3 rounded-xl shadow-md">
          <Text className="text-[#5CD6FF] font-bold text-sm text-center">
            ↩ Home
          </Text>  
      </TouchableOpacity>
    </View>
  );
}