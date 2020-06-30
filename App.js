/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const StylingDasar = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,

            backgroundColor: 'pink',
          }}
        />
        <View
          style={{
            flex: 1,

            backgroundColor: 'yellow',
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          flex: 1,
        }}>
        <Text style={{color: 'white'}}>Hallo</Text>
      </View>
    </>
  );
};

const Crud = () => {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const inputHandler = text => {
    // console.log("Input Handler",text);
    setInputText(text);
    console.log(inputText);
  };
  const addToDoHandler = () => {
    console.log('PRESS');
    setTodoList([...todoList, inputText]);
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SafeAreaView />
        <Text>{inputText}</Text>
        {
        todoList.map(val => {
          return (
          <Text>{val}</Text>
          );
        })
        }
        <TextInput
          onChangeText={inputHandler}
          style={{
            borderWidth: 1,
            borderColor: 'red',
            padding: 12,
            width: '90%',
          }}
          placeholder="Inputan"
        />
        <TouchableOpacity onPress={addToDoHandler}>
          <Text>ADD TODO</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const App = () => {
  return (
    <>
      {/* <StylingDasar/> */}
      <Crud />
    </>
  );
};

export default App;
