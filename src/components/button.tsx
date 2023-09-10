import{Button as ButtonNative, Text} from 'native-base';

interface props {
    text: string;
}

export function Button({text}: props){
    return(
        <ButtonNative
        color="#fff"
        w="90%"
        bgColor="#9DD9E7"
        marginTop={10}
        padding={4}
        ><Text color="#fff" fontSize={18}>{text}</Text></ButtonNative>
    )
}
import React from 'react';
import { Input as InputNative, IInputProps } from 'native-base';

interface IInewProps extends IInputProps {
  type: "text" | "password";
  secureText?: boolean; // Tornar secureText opcional
}
