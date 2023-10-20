import { View, StyleSheet, Text } from "react-native";
import TextIcon from "../../molecules/TextIcon/TextIcon";
import CircleImage from "../../atoms/image/CircleImage";
import CText from "../../atoms/Text/CText";

export default function ActivityCard({ name = "Anonymous", icon = "" }) {

    const styles = StyleSheet.create({
        container: {
            padding: 12,
            backgroundColor: '#dde',
            borderRadius: 12,
            margin: 12
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextIcon CStyle={{ flex: 1 }} text={name} />
                <Text style={{}}>15:45</Text>
            </View>
            <CText CStyle={{marginVertical:12}}>Add resources.png and images.png file to the Travel Design UI Kit card task</CText>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CircleImage size={35} />
                <CircleImage size={35} />
                <CircleImage size={35} />
                <CircleImage size={35} />
                <Text> +15</Text>

            </View>
        </View>
    )
}