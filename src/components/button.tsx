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
        
        ><Text color="#fff" fontSize={18}>{text}</Text></ButtonNative>
    )
}