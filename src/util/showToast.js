import { ToastAndroid } from "react-native";

export const showToast = (message, longToast = false) => {
    if(longToast){
        ToastAndroid.show(message, ToastAndroid.LONG)
    }else{
        ToastAndroid.show(message, ToastAndroid.SHORT)
    }
}