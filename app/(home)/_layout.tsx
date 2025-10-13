import { Stack } from 'expo-router';

const HomeLayout = () => {
  return (
    <Stack screenOptions={{headerShown:true}}>

      <Stack.Screen 
        name="HomeScreen" 
        options={{ 
          title: "Home" ,
          headerStyle: {
            backgroundColor: "#003647",//color del fondo del encabezado.
          },
          headerTintColor: "#fff",//color de las letras
          headerTitleStyle: {
            fontWeight: "bold",//tipo de letra del encabezado
          },
        }}
      />
      <Stack.Screen 
        name="SettingsScreen" 
        options={{ 
          title: "Settings",
          headerStyle: {
            backgroundColor: "#003647",//color del fondo del encabezado.
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

export default HomeLayout;