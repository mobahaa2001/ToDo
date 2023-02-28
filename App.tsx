import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from './style';
import Header from './components/header';

export default function App() {
  const [todo, setTodo] = useState([
    {text:"Physics", key:'1'},
    {text:"Math", key:'2'},
    {text:"English", key:'3'},
  ])

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
        <FlatList
            data={todo}
            renderItem={({item}) =>(
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}