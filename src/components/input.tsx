import React from 'react';
import { Input as InputNative, IInputProps } from 'native-base';

interface IInewProps extends IInputProps {
  type: "text" | "password";
  secureText?: boolean; // Tornar secureText opcional
}

export function Input({ type, secureText = false, ...rest }: IInewProps) {
  return (
    <InputNative
      marginX={5}
      marginBottom={6}
      backgroundColor="#B8BCC3"
      fontSize={15}
      secureTextEntry={secureText} 
    />
  );
}
