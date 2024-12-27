import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Pagina1Screen from "../screens/Pagina1Screen";
import Pagina2Screen from "../screens/Pagina2Screen";
import Pagina3Screen from "../screens/Pagina3Screen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Tab = createBottomTabNavigator();

function MyTabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Pagina1" component={ Pagina1Screen} />
            <Tab.Screen name="Pagina2" component={ Pagina2Screen} />
            <Tab.Screen name='Pagina3' component={ Pagina3Screen} />
        </Tab.Navigator>
    );
}

///////////////////////////////

const Stack = createStackNavigator()

function MyStack(){
    return(
        <Stack.Navigator screenOptions={ ()=> ({
            headerShown: false,
            
          })} >
            <Stack.Screen name="Ventana" component={ WelcomeScreen}/>
            <Stack.Screen name= "Bottom" component={ MyTabs } />

        </Stack.Navigator>
    );
}



///////////////////////////////////////////////
export default function BottomTabNavigator(){
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );

}