import React, {useState, useRef, Fragment} from 'react';
import {SafeAreaView, View, TouchableOpacity, Image} from 'react-native';
import {RNCamera, RNCameraProps} from 'react-native-camera';

import styles from './styles';
import VectorIcon from '../vector-icon';
import {windowWidth, windowHeight} from '../../utils';

const CAMERA_FRONT = RNCamera.Constants.Type.front;
const CAMERA_BACK = RNCamera.Constants.Type.back;
const FLASH_ON = RNCamera.Constants.FlashMode.on;
const FLASH_OFF = RNCamera.Constants.FlashMode.off;
const FLASH_AUTO = RNCamera.Constants.FlashMode.auto;

interface CameraProps {
  onSubmit: (photoUri: string) => void;
  cameraProps: RNCameraProps;
}

const Camera: React.FC<CameraProps> = ({onSubmit, cameraProps}) => {
  const [flashMode, setFlashMode] = useState(FLASH_OFF);
  const [cameraMode, setCameraMode] = useState(CAMERA_BACK);
  const [photoUri, setPhotoUri] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const cameraRef = useRef<any>(null);

  const handleChangeCamera = () => {
    setCameraMode(cameraMode === CAMERA_BACK ? CAMERA_FRONT : CAMERA_BACK);
  };

  const handleChangeFlashMode = () => {
    let newFlashMode = '';
    if (flashMode === FLASH_OFF) {
      newFlashMode = FLASH_ON;
    } else if (flashMode === FLASH_ON) {
      newFlashMode = FLASH_AUTO;
    } else {
      newFlashMode = FLASH_OFF;
    }
    setFlashMode(newFlashMode);
  };

  const handleCapture = async () => {
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync({
        pauseAfterCapture: true,
        exif: true,
        orientation: 'portrait',
      });
      setPhotoUri(data.uri);
    }
  };

  const handleSubmit = () => {
    if (typeof onSubmit === 'function') {
      onSubmit(photoUri);
    }
  };

  const iconProps = {size: 26, color: 'white'};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cameraContainer}>
        {photoUri ? (
          <Image style={styles.previewImg} source={{uri: photoUri}} />
        ) : (
          <RNCamera
            ref={cameraRef}
            style={styles.camera}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({barcodes}) => {}}
            type={cameraMode}
            flashMode={flashMode}
            autoFocus={'on'}
            useNativeZoom
            cameraViewDimensions={{width: windowWidth, height: windowHeight}}
            {...cameraProps}
          />
        )}
      </View>
      <View style={styles.top}>
        {photoUri ? (
          <VectorIcon
            name="highlighter"
            {...iconProps}
            onPress={() => setIsEditing(true)}
          />
        ) : (
          <Fragment>
            <VectorIcon
              onPress={handleChangeCamera}
              type="Ionicons"
              name="camera-reverse"
              {...iconProps}
            />
            <View style={styles.divider} />
            <VectorIcon
              type="MaterialCommunityIcons"
              name={
                flashMode === FLASH_ON
                  ? 'flash'
                  : flashMode === FLASH_OFF
                  ? 'flash-off'
                  : 'flash-auto'
              }
              onPress={handleChangeFlashMode}
              {...iconProps}
            />
          </Fragment>
        )}
      </View>
      <View style={styles.bottom}>
        {photoUri ? (
          <Fragment>
            <VectorIcon name="check" {...iconProps} onPress={handleSubmit} />
            <View style={styles.divider} />
            <VectorIcon
              name="undo"
              {...iconProps}
              onPress={() => {
                setPhotoUri('');
              }}
            />
          </Fragment>
        ) : (
          <TouchableOpacity style={styles.captureBtn} onPress={handleCapture}>
            <View style={styles.captureBtnInner} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Camera;
