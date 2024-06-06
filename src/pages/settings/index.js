import { View , Text , StyleSheet } from "react-native";


export function Settings(){
    return(
        <View style={styles.container}> 
            <Text>Settings page</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})