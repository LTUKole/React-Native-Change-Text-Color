import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [textColors, setTextColors] = useState({
    text1: 'black',
    text2: 'black',
    text3: 'black',
    text4: 'black',
  });

  const textMappings = {
    text1: 'red',
    text2: 'green',
    text3: 'blue',
    text4: 'purple',
  };

  const handleColorChange = (textKey) => {
    const newColor = textColors[textKey] === 'black' ? textMappings[textKey] : 'black';
    setTextColors((prevColors) => ({ ...prevColors, [textKey]: newColor }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.colorButtonsContainer}>
        <TouchableOpacity
          style={styles.colorButton}
          onPress={() => handleColorChange('text1')}
        >
          <Text style={[styles.buttonText, { color: textColors.text1 }]}> 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.colorButton}
          onPress={() => handleColorChange('text2')}
        >
          <Text style={[styles.buttonText, { color: textColors.text2 }]}> 2</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.colorButtonsContainer}>
        <TouchableOpacity
          style={styles.colorButton}
          onPress={() => handleColorChange('text3')}
        >
          <Text style={[styles.buttonText, { color: textColors.text3 }]}> 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.colorButton}
          onPress={() => handleColorChange('text4')}
        >
          <Text style={[styles.buttonText, { color: textColors.text4 }]}> 4</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={[styles.textInput, { color: textColors.text1 }]}
        placeholder="Text Input 1"
        placeholderTextColor={textColors.text1}
      />
      <TextInput
        style={[styles.textInput, { color: textColors.text2 }]}
        placeholder="Text Input 2"
        placeholderTextColor={textColors.text2}
      />
      <TextInput
        style={[styles.textInput, { color: textColors.text3 }]}
        placeholder="Text Input 3"
        placeholderTextColor={textColors.text3}
      />
      <TextInput
        style={[styles.textInput, { color: textColors.text4 }]}
        placeholder="Text Input 4"
        placeholderTextColor={textColors.text4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', 
  },
  colorButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  colorButton: {
    width: 100,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray', 
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    width: 150,
    marginVertical: 10,
  },
});

export default App;
