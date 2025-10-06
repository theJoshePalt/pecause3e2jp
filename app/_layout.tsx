import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Bonjour",
          headerStyle: {
            backgroundColor: "#000911",//color del fondo del encabezado.
          },
          headerTintColor: "#fff",//color de las letras
          headerTitleStyle: {
            fontWeight: "bold",//tipo de letra del encabezado
          },
          
        }}
      />
    </Stack>
  );
}
