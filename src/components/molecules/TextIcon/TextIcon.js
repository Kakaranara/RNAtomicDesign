import { StyleSheet, View } from "react-native";
import CText from "../../atoms/Text/CText";
import CircleImage from "../../atoms/image/CircleImage";

export default function TextIcon({icon, text = "Anonymus", CStyle={}}) {

    const styles = StyleSheet.create({
        container : {
            flexDirection: 'row',
            alignItems: 'center'
        },
        emptyIcon : {
            borderRadius: 24,
            backgroundColor: '#ddd',
            height: 35,
            width: 35,
            marginEnd: 6
        }
    })

    return(
        <View style={StyleSheet.flatten([styles.container, CStyle])}>
            <View style={styles.emptyIcon}/>
            <CText> {text}</CText>
        </View>
    )
}