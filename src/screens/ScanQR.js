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

const ScanQR = () => {
  const [flashLight, setFlashLight] = useState(false);

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={this.onSuccess}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
      <TouchableOpacity
        onPress={() => setFlashLight(!flashLight)}
        style={{zIndex: 1, alignContent: 'center'}}>
        <Text style={styles.flashLight}>Scan QR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScanQR;

const styles = StyleSheet.create({
  container: {flex: 1},
  flashLight: {
    color: 'black',
    fontSize: 20,
    padding: 10,
    backgroundColor: 'yellow',
  },
});
