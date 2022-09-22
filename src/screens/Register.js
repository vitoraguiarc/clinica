import React, {useState} from "react";
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from "react-native"
import { Button } from "../components/Button";
import { Input } from "../components/Input";


export const Register = () => {

    const [inputs, setInputs] = useState({
        nome: '',
        telefone: '',
        celular: '',
        email: '',
        nomeResponsavel: '',
        telefoneResponsavel: ''
    });

    const handlerOnChange = (text, input) => {
        setInputs((prevState)=>(
            {...prevState, [input]:text}
        ));
    }

    const [errors, setErrors] = useState({});

    
    const handlerErros = (errorMesage, input)=>{
      setErrors((prevState)=>({...prevState, [input]:errorMesage}));
    }

    const validate = () => {

        let validate = true;
    
        if (!inputs.nome) {
          validate = false
          handlerErros('Informe o seu nome', 'nome');
        }

        if(validate) {
            console.log('AAAA');
        }
      }

    return (

        <SafeAreaView style={styles.safe}>

            <ScrollView style={styles.scroll}>

                <Text> CADASTRO DE PACIENTE</Text>

                <View style={styles.viewForm}>

                    <Input 
                        label="Nome"
                        placeholder="Seu nome completo"
                        error={errors.nome}
                        onFocus={()=>{handlerErros(null, 'nome')}}
                        onChangeText={(text)=>handlerOnChange(text, 'nome')}>
                    </Input>

                    <Input 
                        label="Telefone"
                        >
                    </Input>

                    <Input 
                        label="Celular"
                        >
                    </Input>

                    <Input 
                        label="E-mail"
                        >
                    </Input>

                    <Input 
                        label="Nome Responsavel"
                        >
                    </Input>

                    <Input 
                        label="Telefone Responsavel"
                        >
                    </Input> 

                    <Button 
                        title="AAA"
                        onPress={validate}/>

                </View>

            </ScrollView>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe : {
        flex: 1,
        backgroundColor: '#F0F0F0'
    },
    scroll: {
        paddingTop: 50,
        paddingHorizontal: 20
      },
      title: {
        color: '#000',
        fontSize: 25,
        fontWeight: "bold"
      },
      viewForm: {
        marginVertical: 20,
      }
})