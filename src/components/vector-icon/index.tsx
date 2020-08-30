import React from 'react';
import {TouchableOpacity, StyleProp, ViewStyle} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export interface VectorIconProps {
  type?: string;
  name: string;
  size?: number;
  color?: string;
}
interface Props extends VectorIconProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const VectorIcon: React.FC<Props> = ({
  onPress,
  type,
  name,
  size,
  color,
  style,
}) => {
  let icon = null;
  const iconProps = {name, size, color};
  switch (type) {
    case 'AntDesign':
      icon = <AntDesign {...iconProps} />;
      break;
    case 'Entypo':
      icon = <Entypo {...iconProps} />;
      break;
    case 'EvilIcons':
      icon = <EvilIcons {...iconProps} />;
      break;
    case 'Feather':
      icon = <Feather {...iconProps} />;
      break;
    case 'FontAwesome':
      icon = <FontAwesome {...iconProps} />;
      break;
    case 'FontAwesome5':
      icon = <FontAwesome5 {...iconProps} />;
      break;
    case 'Fontisto':
      icon = <Fontisto {...iconProps} />;
      break;
    case 'Foundation':
      icon = <Foundation {...iconProps} />;
      break;
    case 'Ionicons':
      icon = <Ionicons {...iconProps} />;
      break;
    case 'MaterialIcons':
      icon = <MaterialIcons {...iconProps} />;
      break;
    case 'MaterialCommunityIcons':
      icon = <MaterialCommunityIcons {...iconProps} />;
      break;
    case 'Octicons':
      icon = <Octicons {...iconProps} />;
      break;
    case 'SimpleLineIcons':
      icon = <SimpleLineIcons {...iconProps} />;
      break;
  }
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {icon}
    </TouchableOpacity>
  );
};

VectorIcon.defaultProps = {
  size: 16,
  type: 'FontAwesome5',
  color: 'grey',
};

export default VectorIcon;
