import { Pressable, StyleSheet, Text } from "react-native"

interface Props {
    label: string,
    onPress: () => void;
}

export const PrimaryButton = ({ label, onPress }: Props) => {
    return (
        <Pressable
            style={globalStyles.primaryButton}
            onPress={() => onPress()}>
            <Text style={globalStyles.buttonText}>{label}</Text>
        </Pressable>
    )
}
const globalStyles = StyleSheet.create({
    container: {
        flex:1,
        padding: 20,
    },
    primaryButton: {
        fontSize: 10,
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 10,
        padding: 10
    }
});