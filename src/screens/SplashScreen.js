import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>TEST APP</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {color: 'black', fontSize: 50},
});
