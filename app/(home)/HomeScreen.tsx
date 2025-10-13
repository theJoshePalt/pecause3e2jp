import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View 
        style={{ flex: 1, backgroundColor: 'black' }} 
        className="flex-1 justify-center items-center"
        >
    
        <Text className="text-[#00FFFF] text-2xl font-bold mb-4">Bienvenido a Home</Text>

        {/* Link a Settings */}
        <Link href="/SettingsScreen" className="mt-2">
            <Text className="text-[#007AA3] font-bold text-lg underline text-center">
                Settings ⚙️
            </Text>
        </Link>
    </View>
  );
}