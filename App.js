/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';
import H1 from './src/components/Text/H1';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthStack from './src/navigators/AuthStack';

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 12,
    width: '80%',
    marginTop: 12,
    alignSelf: 'center',
  },
  bgRed: {
    backgroundColor: 'lightblue',
  },
  todoItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  deleteBtn: {
    backgroundColor: 'red',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 12,
  },
  addTodoBtn: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 8,
    alignSelf: 'center',
  },
});

const StylingDasar = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View // Satu
        style={{
          flex: 1,
          backgroundColor: 'pink',
        }}
      />
      <View // Dua
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <View style={{flex: 1, backgroundColor: 'lightblue'}} />
        <View style={{flex: 1, backgroundColor: 'navy'}} />
      </View>
    </SafeAreaView>
  );
};

const Todo = () => {
  //    nama state, nama fnc utk setstate
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const inputHandler = (text) => {
    setInputText(text);
  };

  const addTodoHandler = () => {
    setTodoList([...todoList, inputText]);
  };

  const renderTodoList = ({item, index}) => {
    return (
      <View style={{...styles.todoItemContainer}}>
        <Text>{item}</Text>
        <TouchableOpacity
          style={{...styles.deleteBtn}}
          onPress={() => deleteTodo(index)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const deleteTodo = (deleteIdx) => {
    const newArr = todoList.filter((val, idx) => {
      return idx !== deleteIdx;
    });
    setTodoList(newArr);
  };
  return (
    <View>
      <SafeAreaView />
      <H1 style={{fontSize: 50}}>Halo Dunia</H1>
      <TextInput
        onChangeText={inputHandler}
        style={{...styles.textInput, ...styles.bgRed}}
        placeholder="Your Todo here"
      />
      <TouchableOpacity style={{...styles.addTodoBtn}} onPress={addTodoHandler}>
        <Text>ADD TODO</Text>
      </TouchableOpacity>
      <FlatList
        keyExtractor={(item, idx) => idx.toString()}
        data={todoList}
        renderItem={renderTodoList}
      />
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="AuthStack" component={AuthStack} />
        <Tab.Screen name="Todo" component={Todo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;