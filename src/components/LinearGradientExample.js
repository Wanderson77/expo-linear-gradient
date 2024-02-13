import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function LinearGradientExample() {
  return (
    <View style={styles.container}>

        {/*Simple Gradient*/}
        <LinearGradient 
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            Simple Linear Gradient Backgrount
          </Text>
        </LinearGradient>

        {/*Horizontal Gradient*/}
        <LinearGradient 
          start={{x: 0, y: 0}} 
          end={{x: 1, y: 0}} 
          colors={['#4c669f', '#3b5998', '#192f6a']} 
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            Horizontal Gradient Backgrount
          </Text>
        </LinearGradient>

        {/*Location Gradient*/}
        <LinearGradient
          start={{x: 0.0, y: 0.25}} 
          end={{x: 0.5, y: 1.0}}
          locations={[0,0.5,0.6]}
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            Location Gradient Backgrount
          </Text>
        </LinearGradient>

      </View>
  );
}


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop:16,
    width:350,
  },

  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },  

});
