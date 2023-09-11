import React from 'react';
import { Input as InputNative, IInputProps } from 'native-base';

interface IInewProps extends IInputProps {
  type: "text" | "password";
  secureText?: boolean; // Tornar secureText opcional
}

export function Input({ type, secureText = false,placeholder, ...rest }: IInewProps) {
  return (
    <InputNative
      marginX={4}
      padding={4}
      marginBottom={4}
      placeholder={placeholder}
      fontSize={15}
      secureTextEntry={secureText} 
    />
  );
}