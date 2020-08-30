import React, {useRef} from 'react';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';
import {StyleSheet, SafeAreaView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  canvas: {
    width: '100%',
    height: '100%',
  },
});

interface AnnotateImageProps {
  uri: string;
}

const AnnotateImage: React.FC<AnnotateImageProps> = ({uri}) => {
  const canvasRef = useRef<any>(null);

  const handleSaveSketch = (success, path) => {
    if (success) {
      //`file://${path}`
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <SketchCanvas
        ref={canvasRef}
        localSourceImage={{
          filename: uri,
          mode: 'AspectFit',
        }}
        style={styles.canvas}
        strokeColor={'red'}
        strokeWidth={7}
        onSketchSaved={handleSaveSketch}
      />
    </SafeAreaView>
  );
};
export default AnnotateImage;
