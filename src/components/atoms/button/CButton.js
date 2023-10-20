import { Pressable, StyleSheet, Text, ToastAndroid, TouchableNativeFeedback, TouchableWithoutFeedback, View } from "react-native";
import { showToast } from "../../../util/showToast";

export default function CButton({ icon, cStyle = {} }) {

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#000',
            alignItems: 'center',
            padding: 12,
            borderRadius: 16,
        },
        text: {
            color: '#FFF'
        }
    })

    return (
        <TouchableNativeFeedback onPress={() => {
            showToast("Hey")
        }}>
            <View style={StyleSheet.flatten([styles.container, cStyle])}>
                <Text style={styles.text}>Hello</Text>
            </View>
        </TouchableNativeFeedback>
    )
}