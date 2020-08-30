import {StyleSheet} from 'react-native';

import {windowWidth} from '../../utils';

const CAPTURE_BTN_WIDTH = windowWidth / 6;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
  },
  top: {
    position: 'absolute',
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    position: 'absolute',
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '5%',
  },
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  captureBtn: {
    width: CAPTURE_BTN_WIDTH,
    height: CAPTURE_BTN_WIDTH,
    borderRadius: CAPTURE_BTN_WIDTH / 2,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(90, 90, 90, 0.7)',
  },
  captureBtnInner: {
    width: CAPTURE_BTN_WIDTH * 0.7,
    height: CAPTURE_BTN_WIDTH * 0.7,
    borderRadius: (CAPTURE_BTN_WIDTH * 0.7) / 2,
    backgroundColor: 'white',
  },
  previewImg: {
    flex: 1,
  },
  divider: {
    marginHorizontal: 16,
  },
});
