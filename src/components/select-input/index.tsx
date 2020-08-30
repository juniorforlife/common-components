import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import styles from './styles';
import Text from '../text';
import VectorIcon, {VectorIconProps} from '../vector-icon';

export interface SelectInputProps {
  onPress: () => void;
  isDisabled?: boolean;
  placeholder?: string;
  label?: string;
  text?: string;
  iconProps?: VectorIconProps;
  error?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  onPress,
  isDisabled,
  placeholder,
  label,
  text,
  iconProps,
  error,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        !!error && styles.containerError,
        isDisabled && styles.containerDisable,
      ]}
      onPress={onPress}>
      <View style={styles.topContainer}>
        {typeof iconProps === 'object' && (
          <View style={[styles.iconContainer]}>
            <VectorIcon {...iconProps} />
          </View>
        )}

        <View style={styles.contentContainer}>
          {!!label && <Text style={styles.label}>{label}</Text>}
          {!!text && <Text style={styles.value}>{text}</Text>}
          {!text && <Text style={styles.placeholder}>{placeholder}</Text>}
        </View>
        <View style={styles.rightIconContainer}>
          <VectorIcon name="chevron-right" color={'grey'} />
        </View>
      </View>
      {!!error && <Text>{error}</Text>}
    </TouchableOpacity>
  );
};

SelectInput.defaultProps = {
  placeholder: 'placeholder...',
};

export default SelectInput;
