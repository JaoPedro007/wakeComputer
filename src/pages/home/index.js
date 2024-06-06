import { useState } from "react";
import { View, Text , StyleSheet, TouchableOpacity, TextInput} from "react-native";


export function Home(){
    const [macAddress, setmacAddress] = useState('')
    const [ipAddress, setipAddress] = useState('')
    const [buttonText, setButtonText] = useState('Wake Up')
    const [buttonColor, setButtonColor] = useState('green')


    function handleButtonPress(){
        if(!inputIsValid()){
            console.log('complete the fields')
        }
        else{
        if(buttonText === 'Wake Up'){
            setButtonText('Sleep')
            setButtonColor('red')
        }
        else{
            setButtonText('Wake Up')
            setButtonColor('green')
        }
    }
    }

    function inputIsValid(){  
        return macAddress.trim() !== '' || ipAddress.trim() !==''
    }


    return(
        <View style={styles.container}>
            <Text>Home page</Text>

            <View style={styles.adresses}>
                <Text>Mac adress</Text>
                <TextInput
                    onChange={setmacAddress}
                    value={macAddress}
                    style={styles.inputmacAddress}
                    placeholder={'00:00:00:00:00:00'}
                />

                <Text>Ip adress</Text>
                <TextInput
                    onChange={setipAddress}
                    value={ipAddress}
                    style={styles.inputipAddress}
                    placeholder={'192.168.0.1'}
                />
            </View>
            <TouchableOpacity style={[styles.button, {backgroundColor: buttonColor}]} onPress={handleButtonPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.5)',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius: 50,
    },
    buttonText:{
        fontWeight: 'bold'
    },
    adresses:{
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputmacAddress:{
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        borderRadius: 5,
        width: 130,
        height: 20,
        textAlign: 'center',
    },
    inputipAddress:{
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        borderRadius: 5,
        width: 130,
        height: 20,
        textAlign: 'center',
        marginBottom: 20
    }
})