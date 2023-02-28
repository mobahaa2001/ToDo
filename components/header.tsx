import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from './style';

export default function Header() {


  return (
    <View style={styles.header}>
        <Text style={styles.title}> My ToDo</Text>
    </View>
  );
}