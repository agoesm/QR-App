import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {useState} from 'react';
import {RNCamera} from 'react-native-camera';

const QrScanner = () => {
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const [flashLight, setFlashLight] = useState(false);

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={({data}) => alert(data)}
        flashMode={
          flashLight
            ? RNCamera.Constants.FlashMode.torch
            : RNCamera.Constants.FlashMode.auto
        }
        reactivate={true}
        reactivateTimeout={3000}
        showMarker={true}
        cameraStyle={{
          height: '95%',
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: -19,
        }}
        cameraContainerStyle={{padding: 0, margin: 0}}
        containerStyle={{padding: 0, margin: 0}}
      />
      {/* <View style={{zIndex: 1, position: 'absolute', bottom: 0}}> */}
      <TouchableOpacity
        onPress={() => setFlashLight(!flashLight)}
        style={{zIndex: 1, alignContent: 'center'}}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            padding: 10,
            backgroundColor: 'yellow',
          }}>
          Scan QR
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default QrScanner;

const styles = StyleSheet.create({
  container: {flex: 1},
});
