import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'

import { router } from "expo-router";

const ProfileDetailes = () => {
  return (
  <View 
    style={{ flex: 1, backgroundColor: 'black' }} 
    className="flex-1 justify-center items-center"
  >
  <ImageBackground
    source={require("../../assets/images/chamberBackG.png")}
    className="w-screen h-screen flex p-20 items-center "
    resizeMode="cover"  
    imageStyle={{ opacity: 1.0 }}     
  >
    <View className="flex-1 justify-center items-center w-full px-6  bg-black/50 shadow-md ">
      
      <Text className="text-[#EFB810] text-4xl font-bold mb-4">CHAMBER</Text>
      <Image 
        source={require('../../assets/images/chamberIcon.png')}
        className="w-30 h-30 rounded-full border-4 border-[#EFB810] mb-4"
      />
      <Text className="text-[#ffffff] mb-6 font-bold ">vincentFabron@val.com</Text>
    

      {/* Contenido */}
      <View className="px-6 py-6">
      
        {/* Botón Editar */}
        <TouchableOpacity 
          className="mt-2 bg-[#003647] px-6 py-3 rounded-xl shadow-md">
          <Text className="text-[#5CD6FF] font-bold text-sm text-center">
            Edit profile
          </Text>
        </TouchableOpacity>

      {/* Opciones */}
      <TouchableOpacity className="mt-2 bg-[#433305] px-6 py-3 rounded-xl shadow-md">
      <Text className="text-[#EFB810] font-bold text-sm text-center">Mis Playlists</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => {router.push("/SettingsScreen");}}
        className="mt-2 bg-[#003647] px-6 py-3 rounded-xl shadow-md">
          <Text className="text-[#5CD6FF] font-bold text-sm text-center">
            Settings
          </Text>  
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => {router.push('/HomeScreen');}} 
        className="mt-2 bg-[#003647] px-6 py-3 rounded-xl shadow-md">
          <Text className="text-[#5CD6FF] font-bold text-sm text-center">
            Home
          </Text>  
      </TouchableOpacity>

      {/* Cerrar sesión */}
      <TouchableOpacity 
        className="bg-[#450000] p-4 rounded-lg"
        onPress={() => {router.push('/');}}
      >
        <Text className="text-[#EF1010] font-semibold text-center">
          Log Out
        </Text>
      </TouchableOpacity>
      </View>
     

    </View>
    
  </ImageBackground>
  </View>
);
}

export default ProfileDetailes