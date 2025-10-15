import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Linking } from "react-native";
import { router } from "expo-router";

export default function Playlist() {

  
  const abrirLink = (link: string): void => {
    Linking.openURL(link); 
  };

  // Lista de canciones
  const playlists = [
    { id: 1, name: '¡EXT4CÍS?', songs: 546, bgColor: '#2ECEFF', link: "https://open.spotify.com/playlist/5SJGicsspRIbAAKOWbshnf" },
    { id: 2, name: 'CONCER7', songs: 8, bgColor: '#00C3FF', link: "https://open.spotify.com/playlist/5FDO6zFACyKwve7O8Bg7k3" },
    { id: 3, name: 'JACKS8N', songs: 8, bgColor: '#00A0D1', link: "https://open.spotify.com/playlist/56PU7eEd1AaGaCmm125z2g" },
    { id: 4, name: 'N16GA', songs: 147, bgColor: '#007DA3', link: "https://open.spotify.com/playlist/2nFinfkLsEqsNxubDKR6nG" },
    { id: 5, name: 'D15CIPLINE', songs: 31, bgColor: '#005A75', link: "https://open.spotify.com/playlist/5LMfZe0KV4J8mwzlmdKWPf" }
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#00141A' }}>
      
      <ScrollView className="px-6 mt-6">
  {playlists.map((playlist) => (
    <TouchableOpacity
      key={playlist.id}
      onPress={() => abrirLink(playlist.link)}
      className="mb-4"
    >
      <View
        style={{ backgroundColor: playlist.bgColor }}
        className="rounded-lg p-4 flex-row items-center"
      >
        <View className="bg-white/20 rounded-md p-3 self-start">
          <Text className="text-black font-bold text-2xl">▶</Text>
        </View>
        <View className="ml-4">
          <Text className="text-white font-semibold text-lg" numberOfLines={1}>
            {playlist.name}
          </Text>
          <Text className="text-gray-300 text-sm">
            {playlist.songs} songs
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  ))}



    <TouchableOpacity 
        onPress={() => {router.push('/HomeScreen');}} 
        className="mt-2 bg-[#003647] px-6 py-3 rounded-xl shadow-md">
          <Text className="text-[#5CD6FF] font-bold text-sm text-center">
            ↩ Home
          </Text>  
      </TouchableOpacity>

      </ScrollView>
    </View>
  );
}