import { useState } from 'react';
import {  Button, TextInput, View } from 'react-native';
import styles from './style';
import React from 'react';

export default function AddToDo({submitHandler}) {
    const [text, setText] =useState('')

    const changeHandler = (x) => {
        setText(x)
    }
    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='New ToDo...'
                onChange={changeHandler}
            />
            <Button onPress={()=> submitHandler(text)
            } title="Add ToDo" color="coral"/>
        </View>
  );
}