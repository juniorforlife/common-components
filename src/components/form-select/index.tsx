import React, {useState, Fragment} from 'react';
import {Keyboard} from 'react-native';

import SelectModal, {Option, SelectModalProps} from '../select-modal';
import SelectInput, {SelectInputProps} from '../select-input';

interface FormSelectProps
  extends Omit<SelectInputProps, 'onPress' | 'text'>,
    Omit<SelectModalProps, 'isVisible' | 'onCancel' | 'onSelect' | 'title'> {
  name: string;
  value: string | number;
  displayedText?: string;
  onChange: (value: string | number, inputName: string) => void;
}

const FormSelect: React.FC<FormSelectProps> = (props) => {
  const {
    name,
    value,
    displayedText,
    onChange,
    options,
    isDisabled,
    placeholder,
  } = props;

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    Keyboard.dismiss();
    setModalVisible(true);
  };

  const closeModal = () => {
    Keyboard.dismiss();
    setModalVisible(false);
  };

  const handleSelect = (selectedOption: Option) => {
    onChange(selectedOption.value, name);
    closeModal();
  };

  let text = '';
  /**
   * displayedText is for displaying value directly without finding in the options
   * useful when view only or when value is not in the options
   */
  if (displayedText) {
    text = displayedText;
  } else {
    const selectedOption = options.find((item: Option) => item.value === value);
    if (selectedOption) {
      text = selectedOption.label;
    }
  }

  return (
    <Fragment>
      <SelectInput {...props} onPress={openModal} text={text} />
      {!isDisabled && (
        <SelectModal
          {...props}
          isVisible={modalVisible}
          title={placeholder || ''}
          onSelect={handleSelect}
          onCancel={closeModal}
        />
      )}
    </Fragment>
  );
};

FormSelect.defaultProps = {
  options: [],
};

export default FormSelect;
