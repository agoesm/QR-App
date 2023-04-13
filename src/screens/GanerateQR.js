import {StyleSheet, TextInput, View, Button, Alert} from 'react-native';
import React from 'react';
import {useState} from 'react';
import QRCode from 'react-native-qrcode-svg';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Share from 'react-native-share';
// import RNFetchBlob from 'rn-fetch-blob';

const GanerateQR = () => {
  const [QRvalue, setQRValue] = useState('');
  const [QRImage, setQRImage] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [loading, setloading] = useState(false);
  const [imgBase64, setImgBase64] = useState();

  let logoFromFile = require('../assets/avatar.jpg');

  const shareQR = () => {
    QRImage.toDataURL(data => {
      const shareImageBase64 = {
        title: 'QR',
        message: 'Here is my QR code!',
        url: `data:image/jpeg;base64,${data}`,
      };
      setQRImage(String(shareImageBase64.url));
      Share.open(shareImageBase64);
    });
  };

  // const downloadQR = () => {
  //   setShowDialog(true);
  //   setloading(true);
  //   QRImage.toDataURL(async data => {
  //     const shareImageBase64 = {
  //       title: 'QR',
  //       message: 'Here is my QR code!',
  //       url: `data:image/jpeg;base64,${data}`,
  //     };
  //     setQRImage(String(shareImageBase64.url));

  //     if (Platform.OS === 'ios') {
  //       saveImage(String(shareImageBase64.url));
  //     } else {
  //       try {
  //         const granted = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //           {
  //             title: 'Storage Permission Required',
  //             message:
  //               'App needs access to your storage to download the QR code image',
  //           },
  //         );
  //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //           console.log('Storage Permission Granted');
  //           saveImage(String(shareImageBase64.url));
  //         } else {
  //           console.log('Storage Permission Not Granted');
  //         }
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //   });
  // };

  // const saveImage = qr => {
  //   setloading(false);
  //   qr = qr.split('data:image/jpeg;base64,')[1];

  //   let date = new Date();
  //   const {fs} = RNFetchBlob;
  //   let filename =
  //     '/qr_' + Math.floor(date.getTime() + date.getSeconds() / 2) + '.jpeg';
  //   let PictureDir = fs.dirs.DownloadDir + filename;

  //   fs.writeFile(PictureDir, qr, 'base64')
  //     .then(() => {
  //       RNFetchBlob.android.addCompleteDownload({
  //         title: '🎁 Here is your QR code!',
  //         useDownloadManager: true,
  //         showNotification: true,
  //         notification: true,
  //         path: PictureDir,
  //         mime: 'image/jpeg',
  //         description: 'Image',
  //       });
  //     })
  //     .catch(err => {
  //       console.log('ERR: ', err);
  //     });
  // };

  const generatePDF = async () => {
    QRImage.toDataURL(data => {
      const shareImageBase64 = data;
      setImgBase64(String(shareImageBase64));
      // console.log('base64Data ==>', imgBase64);
    });

    const html = `<html>
      <head>
        <style>
          body {
            font-family: 'Helvetica';
            font-size: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          h1 {
            font-size: 5em;
          }
          .footers {
            margin-top: 50px;
          }
          img {
            width: 500px; height: 500px;
            border: 3px solid black;
            border-radius: 15px;
            padding: 20px;
          }
        </style>
      </head>
      <body>
        <table>
          <tr>
            <th><h1>Scan QR</h1></th>
          </tr>
          <tr>
            <th><img src="data:image/png;base64, ${imgBase64}"/></th>
          </tr>
          <tr>
            <th><p class='footers'>ini cuma test pdf</p></th>
          </tr>
        </table>
      </body>
    </html>`;

    const options = {
      html,
      fileName: 'testPDF',
      directory: 'QR App',
    };
    const file = RNHTMLtoPDF.convert(options);
    console.log(file.filePath);
    // Alert.alert('Success, PDF saved to', file.filePath);
    Alert.alert('Download PDF Success');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="qr generator"
        placeholderTextColor={'grey'}
        value={QRvalue}
        onChangeText={e => {
          setQRValue(e);
        }}
      />
      <View style={styles.qrcode}>
        <QRCode
          value={QRvalue ? QRvalue : 'test'}
          getRef={ref => setQRImage(ref)}
          size={200}
          // color="red"
          logo={logoFromFile}
          logoSize={60}
          logoBackgroundColor="transparent"
        />
      </View>
      <View style={styles.btn}>
        <Button title="Download PDF" onPress={() => generatePDF()} />
      </View>
      <View style={styles.btn}>
        <Button title="Share PDF" onPress={() => shareQR()} />
      </View>
    </View>
  );
};

export default GanerateQR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  qrcode: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 15,
  },
  btn: {marginVertical: 15},
});
