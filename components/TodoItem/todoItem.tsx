import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import React from 'react';

export default function TodoItem({item, pressHandler}) {
  return (
    <TouchableOpacity onPress={()=>pressHandler(item.key)}>
        <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}