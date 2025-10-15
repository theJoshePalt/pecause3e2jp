import "../Global.css";
import { View, Text, TextInput, Pressable, ImageBackground, Alert , TouchableOpacity} from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import { router } from "expo-router";

export default function Index() {
  const [unaVez, setUnaVez] = useState(true); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {if (unaVez) {
    Alert.alert("Cuenta creada");
    setUnaVez(false); 
  }
  console.log("Ingresado con:", email, password);
};

  const handleLogin = () => {

  };

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
        <Text className="text-3xl font-bold text-[#B8EDFF] mb-6">Log In</Text>
      
        <TextInput
          className="w-full p-3 rounded-xl bg-[#8AE2FF] border border-[#007AA3] mb-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="w-full p-3 rounded-xl bg-[#8AE2FF] border border-[#007AA3] mb-6"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable
          onPress={handleSignUp}
          className="w-full bg-[#009DD1] p-3 items-center mb-4"
        >
          <Text className="text-[#002430] font-bold text-lg">Create Account</Text>
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
        className="mt-2 bg-[#B8EEFF] px-6 py-3 rounded-xl shadow-md">
        <Text className="text-[#007AA3] font-bold text-sm underline text-center">
          Home
        </Text>      
      </TouchableOpacity>
    </ImageBackground>
    </View>
  );
}
