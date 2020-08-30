import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    // default styles for text
  },
});

interface TextProps {
  fontSize?: number;
  bold?: boolean;
  color?: string;
  style?: {};
}

const CustomText: React.FC<TextProps> = ({
  children,
  style,
  fontSize,
  bold,
  color,
}) => {
  const customStyles: any = {};
  if (fontSize) {
    customStyles.fontSize = fontSize;
  }
  if (bold) {
    // customStyles.fontFamily = ''
  }
  if (color) {
    customStyles.color = color;
  }
  return <Text style={[styles.text, customStyles, style]}>{children}</Text>;
};

export default CustomText;
