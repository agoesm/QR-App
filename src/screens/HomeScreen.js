import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const HomeScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Button
        title="QR Scanner"
        style={styles.btn}
        onPress={() => navigation.navigate('QrScanner')}
      />
      <Button
        title="Scan QR"
        style={styles.btn}
        onPress={() => navigation.navigate('ScanQR')}
      />
      <Button
        title="Ganerate QR"
        style={styles.btn}
        onPress={() => navigation.navigate('GanerateQR')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
  },
  btn: {
    marginVertical: 15,
  },
});
