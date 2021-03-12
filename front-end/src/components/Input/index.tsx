import React, { InputHTMLAttributes } from 'react';

import { Field } from './styles';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  placeholder,
  type,
  id,
  onChange,
  style,
  value,
  accept,
  onKeyPress,
}) => {
  return (
    <Field
      type={type}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
      style={style}
      required
      value={value}
      accept={accept}
      onKeyPress={onKeyPress}
    />
  );
};

export default Input;
