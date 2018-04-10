import React from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

const InputBox = (props) => {
  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.textInput}
        value={props.placeName}
        placeholder="A place to go"
        onChangeText={props.onPlaceNameChange}
      />
      <Button title=" a d d " onPress={props.onSubmitPlace}/>
    </View>
  )
};

const styles = StyleSheet.create({
  inputBox: {
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center'
  },
  textInput: {
    width: '80%',
    borderColor: 'blue',
    borderWidth: 1,
  }
});

export default InputBox;