import { useState } from 'react';
import {  FlatList, View } from 'react-native';
import styles from './style';
import Header from './components/Header/header';
import TodoItem from './components/TodoItem/todoItem';
import React from 'react';

export default function App() {
  const [todo, setTodo] = useState([
    {text:"Physics", key:'1'},
    {text:"Math", key:'2'},
    {text:"English", key:'3'},
  ])

  const pressHandler = (key) => {
    setTodo((e) =>{
      return e.filter(todo => todo.key != key)
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
        <FlatList
            data={todo}
            renderItem={({item}) =>(
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}
