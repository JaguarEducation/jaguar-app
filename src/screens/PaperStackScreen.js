import React from 'react';
import { Button, Link, View, Text, StyleSheet, TouchableOpacity, FlatList,Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import Markdown from 'react-native-markdown-display';
import Fontawesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AnimatedSearchbar from 'react-native-animated-searchbar';

import Search_Bar from '../components/SearchBar';
import LessonScreen from './LessonScreen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { useHeaderHeight } from '@react-navigation/stack';



Fontawesome.loadFont();
Feather.loadFont();

var hi

const copy = `
# Introducción
`;

const topics = [
    {
        id: "1",
        topic: "Análisis del programa"
    },
    {
        id: "2",
        topic: "Algoritmos"
    },
    {
        id: "3",
        topic: "Algoritmos en Diagramas de Flujos de Datos (DFD)"
    },
    {
        id: "4",
        topic: "Algoritmos en pseudocódigo"
    },
    {
        id: "5",
        topic: "Tipos de lenguajes de programación"
    },
    {
        id: "6",
        topic: "Tipos de datos"
    },
    {
        id: "7",
        topic: "Identificadores"
    },
    {
        id: "8",
        topic: "Palabras clave"
    },
    {
        id: "9",
        topic: "Variables y Constantes"
    },
    {
        id: "10",
        topic: "Vectores o arrays"
    },
    {
        id: "11",
        topic: "Operadores y reglas de Prioridad"
    },
    {
        id: "12",
        topic: "Expresiones"
    },
    {
        id: "12",
        topic: "Funciones internas"
    },
];



function PaperScreen({ navigation }) {
    const { colors } = useTheme();
    const stylesM = StyleSheet.create({
        heading1: {
            color: colors.text,
        },
        heading2: {
            color: colors.text,
        },
        heading3: {
            color: colors.text,
        },
        heading4: {
            color: colors.text,
        },
        heading5: {
            color: colors.text,
        },
        text: {
            color: colors.text,
        },
        body: {
            paddingHorizontal: 20,
            fontSize: 15,
        }

    });


    /* const renderOptions = () => {

        const results = topics.map(e => ({ id: e.id, topic: e.topic }));
    };

    
 */

    function Item({ title }) {
        return (
            <TouchableOpacity style={styles.item}>
                <Text style={{ color: colors.text }}>{title}</Text>
            </TouchableOpacity>
        );
    }
    const renderItem = ({ item }) => (
        <Item title={item.topic} />
    );


    const HeaderRight = <View style={styles.rightSide}>
        <Feather name={"message-circle"} size={24} color={"#d32f2f"} />
    </View>

    const SearchBarIcon = <View style={styles.baricon}>
        <Fontawesome name={"search"} size={18} color={"gray"} />
    </View>


    const SearchScreen = () => {
        return (
            <View style={styles.searchScreen}>
                <Text style={styles.text}>Search Screen</Text>
            </View>
        );
    }
    
    return (
        
        <View>
           

                
                {/* <Search_Bar/> */}
                {/* <Text style={styles({ color: colors.text }).title}>Categorias</Text> */}
                <ScrollView style={styles.container}

                  contentContainerStyle={{ minHeight: windowHeight }}
                  contentOffset={{ y: 34 }}>
                <Search_Bar/>
                <FlatList
                    data={topics}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={{ height: "100%" }}
                    
                />
                </ScrollView>
        </View>

        /* <SafeAreaView >
            <ScrollView

                contentInsetAdjustmentBehavior="automatic"
                style={{ height: '100%' }}
            >
                <Markdown
                    style={stylesM}
                >
                    {copy
                    }
                </Markdown>
            </ScrollView>
        </SafeAreaView> */
        /* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: colors.text }}>Pantalla de teoria</Text>
            <Button
                title="Ir a lección"
                onPress={() => navigation.navigate('Lección')}
            />
        </View> */

    );
}

const PaperStack = createStackNavigator();

const PaperStackScreen = () => {
    const { colors } = useTheme();


    /*  console.log(results); */

    return (
        <PaperStack.Navigator>
            <PaperStack.Screen
                name="Teoría"
                component={PaperScreen}
                options={{
                    title: 'Teoria', //Set Header Title
                    headerTitleStyle: {
                        fontSize: 18,
                        fontWeight: '900', //Set Header text style
                    },
                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                        height: 60,
                    },
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        null

                        /* <TouchableOpacity onPress={() => alert('This is a button!')}>
                            <View style={styles({ color: null }).iconContainer}>
                                <FontAwesome5 name="search" size={24} color={colors.text} />
                                <Text style={{ color: colors.text, fontSize: 18, fontWeight: '900' }} >14</Text>
                            </View>
                        </TouchableOpacity> */
                    ),
                }}
            />
            <PaperStack.Screen name="Lección" component={LessonScreen} />
        </PaperStack.Navigator>
    );
}

const styles = StyleSheet.create({

    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 25,
        width: 75,
    },
    container: {
        height: '100%'
    },
    item: {
        padding: 20,
        //borderBottomColor: "gray",
        marginHorizontal: 5,
        marginTop: 3,
        //backgroundColor: "rgba(244,183,35,0.1)",
        //borderBottomWidth: 0,
        //borderRadius: 10,
        //shadowColor: 'black',
        //shadowOffset: { width: 0, height: 0.1 * 1 },
        //shadowOpacity: 0.1,
        //shadowRadius: 0.8 * 5

    },
});

export default PaperStackScreen;