import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { router } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Home() {
  /*
    MODIFICADO: He cambiado la propiedad 'color' por 'bgColor' y ahora contiene 
    códigos de color hexadecimales como strings. 
    ¡Ahora puedes poner aquí el color que tú quieras! He puesto un amarillo como querías.
  */
  const playlists = [
    { id: 1, name: ' ¡EXT4CÍS?', songs: 546, bgColor: '#FF0000' }, // Este es un color amarillo
    { id: 2, name: ' CONCER7', songs: 8, bgColor: '#822EFF' },
    { id: 3, name: ' JACKS8N', songs: 8, bgColor: '#3F009C' },
    { id: 4, name: ' N16GA', songs: 147, bgColor: '#450000' },
    { id: 5, name: ' D15CIPLINE', songs: 31, bgColor: '#1500FF' },

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
                className="bg-[#2EFFFF] px-8 py-3 rounded-2xl shadow-md"
                onPress={() => alert("Playing your playlist")}
              >
                <Text className="text-[#003747] font-bold text-lg">PLAY</Text>
              </TouchableOpacity>
            </View>

            <View>
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-white text-xl font-bold">Your Playlists</Text>
                <TouchableOpacity>
                  <Text 
                    onPress={() => router.push("/Playlist")}
                    className="text-[#B8EEFF] font-semibold">LINKS </Text>
                </TouchableOpacity>
              </View>

              <View>
                {playlists.map((playlist) => (
                  <TouchableOpacity
                    key={playlist.id}
                    className="mb-4"
                    onPress={() => {
                      if (playlist.name === "Traumas (Basta)") {
                        router.push("/Playlist");
                      } else {
                        alert(`Playing ${playlist.name} `);
                      }
                    }}
                  >
                    
                    <View style={{ backgroundColor: playlist.bgColor }} className="rounded-lg p-4 flex-row items-center">
                      <View className="bg-white/20 rounded-md p-3 self-start">
                        <Text className="text-white font-bold text-xl">▶️</Text>
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
              </View>
            </View>

          </ScrollView>
        </View>

        <TouchableOpacity
          onPress={() => { router.push('/(home)/ProfileDetails'); }}
          className="absolute top-16 right-5 bg-[#003647] p-3 "
        >
          <Text className="text-[#B8EEFF] text-2xl">
            👤
          </Text>
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
}
