import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    h1:{
        fontSize :30,
    }
})

const H1 = ({children}) => {
  return (
    
  <Text style={styles.h1}>{children}</Text>
    
  );
};

export default H1;
