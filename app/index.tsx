import "../Global.css";
import { View, Text, TextInput, Pressable, ImageBackground, Alert , TouchableOpacity} from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import { router } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign'; 

export default function Index() {
  const [unaVez, setUnaVez] = useState(true); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (email.trim() === "" || password.trim() === "") {
    Alert.alert("Error", "Debes llenar todos los campos");
    return;
  }
  if (unaVez) {
    Alert.alert("Cuenta creada");
    setUnaVez(false);
  }

  console.log("You log with:", email, password);
  router.push("/HomeScreen");
};

  const handleLogin = () => {};

  return (
    <View 
          style={{ flex: 1, backgroundColor: 'black' }} 
          className="flex-1 justify-center items-center"
        >
    <ImageBackground 
      source={require("../assets/images/icon.png")}
      className="w-screen h-screen flex p-20 items-center"
      resizeMode="cover"
      imageStyle={{ opacity: 0.6 }}
    >

      <View className="bg-black/50 p-10 w-80 items-center shadow-xl">
        
        <AntDesign name="spotify" size={40} color="#2EFFFF" className="mb-3" />
        <Text className="text-3xl font-bold text-[#00FFFF] mb-7">SOUNDTY</Text>
      
        <TextInput
          className="w-full p-3 rounded-xl bg-[#007575] border border-[#8AFFFF] mb-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="w-full p-3 rounded-xl bg-[#007575] border border-[#8AFFFF] mb-6"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable
          onPress={handleSignUp}
          className="w-full bg-[#00D1D1] p-3 items-center mb-4"
        >
          <Text className="text-[#002430] font-bold text-lg">Log In</Text>
        </Pressable>

        <View className="w-full items-center mt-2">
        <View className="flex-row justify-between w-full p-3 items-center ">
          <Text className="text-sm text-gray-300">No Account?</Text> 
          <Pressable  onPress={handleLogin}>
            <Text className="text-sm text-[#00FFFF] font-bold">Sign up</Text>
          </Pressable>
        </View>
        </View>
      </View>
      <TouchableOpacity 
        onPress={() => {router.push('/HomeScreen');}} 
        className="mt-2 bg-[#003647] px-6 py-3 rounded-xl shadow-md">
        <Text className="text-[#5CD6FF] font-bold text-sm text-center">
          Home
        </Text>      
      </TouchableOpacity>
    </ImageBackground>
    </View>
  );
}
