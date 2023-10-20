import { Image, StyleSheet } from "react-native";
import defaultImg from "../../../assets/image/random_image.jpg"

export default function CircleImage({image = defaultImg, size = 60, cStyles = {}}) {
    return(
        <Image source={image} style={StyleSheet.flatten([{
            borderRadius: size / 2,
            width: size, 
            height: size,
            overflow: "hidden"
        }, cStyles])} />
    )
}

const styles = StyleSheet.create({
    imageStyle : {
        
    }
})