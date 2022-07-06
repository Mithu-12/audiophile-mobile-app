import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Headphones from '../screens/Headphones';
import ProductDetails from '../screens/ProductDetails';
import Earphones from '../screens/Earphones';
import Speakers from '../screens/Speakers';
import Cart from '../screens/Cart';
import CheckOUt from '../screens/CheckOUt';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../Theme/colors';
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons} from '@expo/vector-icons';




const THEME = {
    ...DefaultTheme,
   colors:{
    ...DefaultTheme.colors,
    background: 'white',
   }
}

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
function HomeStackScreen(){
    return(
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
            <HomeStack.Screen name='Home' component={Home} />
        </HomeStack.Navigator>
    )
}
const HeadphonesStack = createNativeStackNavigator();
function HeadphonesStackScreen(){
    return(
        <HeadphonesStack.Navigator screenOptions={{headerShown: false}}>
            <HeadphonesStack.Screen name='Headphones' component={Headphones} />
            <HeadphonesStack.Screen name='ProductDetails' component={ProductDetails} />
        </HeadphonesStack.Navigator>
    )
}
const EarphonesStack = createNativeStackNavigator();
function EarphonesStackScreen(){
    return(
        <EarphonesStack.Navigator screenOptions={{headerShown: false}}>
            <EarphonesStack.Screen name='Earphones' component={Earphones} />
            <EarphonesStack.Screen name='ProductDetails' component={ProductDetails} />
        </EarphonesStack.Navigator>
    )
}
const SpeakersStack = createNativeStackNavigator();
function SpeakersStackScreen(){
    return(
        <SpeakersStack.Navigator screenOptions={{headerShown: false}}>
            <SpeakersStack.Screen name='Speakers' component={Speakers} />
            <SpeakersStack.Screen name='ProductDetails' component={ProductDetails} />
        </SpeakersStack.Navigator>
    )
}
const CartStack = createNativeStackNavigator();
const CheckOUtStack = createNativeStackNavigator();
function CartStackScreen(){
    return(
        <CartStack.Navigator screenOptions={{headerShown: false}}>
            <CartStack.Screen name='Cart' component={Cart} />
            <CheckOUtStack.Screen name='CheckOUt' component={CheckOUt} />
        </CartStack.Navigator>
    )
}
function TabBarIcon({fontFamily, color, name}){
    if(fontFamily === 'MaterialCommunityIcons'){
        return (<MaterialCommunityIcons color={color} name={name} size={24} />)
    }
   else if(fontFamily === 'Ionicons'){
        return (<Ionicons color={color} name={name} size={24} />)
    }
    else if(fontFamily === 'SimpleLineIcons'){
        return (<SimpleLineIcons color={color} name={name} size={24} />)
    }
}

export default function Navigation(){
    return(

    <NavigationContainer theme={THEME}>
        <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false, tabBarActiveTintColor: colors.orange}}>
        
        <Tab.Screen name="HomeTab" options={{title: 'Home', tabBarIcon: ({color}) =>(<TabBarIcon fontFamily={'MaterialCommunityIcons'} name='home' color={color}/>),}} component={HomeStackScreen} />

        <Tab.Screen name="HeadphonesTab" options={{title: 'HeadPhones', tabBarIcon: ({color}) =>(<TabBarIcon fontFamily={'MaterialCommunityIcons'} name='headphones' color={color}/>),}} component={HeadphonesStackScreen} />

        <Tab.Screen name="EarphonesTab" options={{title: 'EarPhones', tabBarIcon: ({color}) =>(<TabBarIcon fontFamily={'SimpleLineIcons'} name='earphones-alt' color={color}/>),}} component={EarphonesStackScreen} />

        <Tab.Screen name="SpeakersTab" options={{title: 'Speakers', tabBarIcon: ({color}) =>(<TabBarIcon fontFamily={'MaterialCommunityIcons'} name='speaker' color={color}/>),}} component={SpeakersStackScreen} />

        <Tab.Screen name="CartTab" options={{title: 'Cart', tabBarIcon: ({color}) =>(<TabBarIcon fontFamily={'Ionicons'} name='cart-outline' color={color}/>),}} component={CartStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    )
}























// /**
//  * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
//  * https://reactnavigation.org/docs/getting-started
//  *
//  */
// import { FontAwesome } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import * as React from 'react';
// import { ColorSchemeName, Pressable } from 'react-native';

// import Colors from '../constants/Colors';
// import useColorScheme from '../hooks/useColorScheme';
// import ModalScreen from '../screens/ModalScreen';
// import NotFoundScreen from '../screens/NotFoundScreen';
// import TabOneScreen from '../screens/TabOneScreen';
// import TabTwoScreen from '../screens/TabTwoScreen';
// import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
// import LinkingConfiguration from './LinkingConfiguration';

// export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
//   return (
//     <NavigationContainer
//       linking={LinkingConfiguration}
//       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <RootNavigator />
//     </NavigationContainer>
//   );
// }

// /**
//  * A root stack navigator is often used for displaying modals on top of all other content.
//  * https://reactnavigation.org/docs/modal
//  */
// const Stack = createNativeStackNavigator<RootStackParamList>();

// function RootNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
//       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
//       <Stack.Group screenOptions={{ presentation: 'modal' }}>
//         <Stack.Screen name="Modal" component={ModalScreen} />
//       </Stack.Group>
//     </Stack.Navigator>
//   );
// }

// /**
//  * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
//  * https://reactnavigation.org/docs/bottom-tab-navigator
//  */
// const BottomTab = createBottomTabNavigator<RootTabParamList>();

// function BottomTabNavigator() {
//   const colorScheme = useColorScheme();

//   return (
//     <BottomTab.Navigator
//       initialRouteName="TabOne"
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme].tint,
//       }}>
//       <BottomTab.Screen
//         name="TabOne"
//         component={TabOneScreen}
//         options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
//           title: 'Tab One',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//           headerRight: () => (
//             <Pressable
//               onPress={() => navigation.navigate('Modal')}
//               style={({ pressed }) => ({
//                 opacity: pressed ? 0.5 : 1,
//               })}>
//               <FontAwesome
//                 name="info-circle"
//                 size={25}
//                 color={Colors[colorScheme].text}
//                 style={{ marginRight: 15 }}
//               />
//             </Pressable>
//           ),
//         })}
//       />
//       <BottomTab.Screen
//         name="TabTwo"
//         component={TabTwoScreen}
//         options={{
//           title: 'Tab Two',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// }

// /**
//  * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
//  */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
// }
