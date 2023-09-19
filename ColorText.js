import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const ColorText = ({ text, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={{ color }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
  },
});

export default ColorText;
