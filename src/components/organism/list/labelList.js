import { ScrollView, View } from "react-native";
import TextLabel from "../../molecules/label/TextLabel";

export default function LabelList({data = []}) {
    return (
        <ScrollView horizontal>
            <View style={{ flexDirection: 'row', gap: 12, padding: 12 }}>
                {data.map(({name, key, onPress}) => (
                    <TextLabel text={name} key={key} onPress={onPress} />
                ))}
            </View>
        </ScrollView>
    )
}