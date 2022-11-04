import React, {useState} from "react";
import {View, Text, StyleSheet, SafeAreaView, ScrollView, ImageBackground, Image} from "react-native"
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { COLORS } from "../assets/const/colors";
import apiClinica from "../services/apiClinica";



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

        if (!inputs.telefone) {
            validate = false
            handlerErros('Informe o seu telefone', 'telefone');
        }

        if (!inputs.celular) {
            validate = false
            handlerErros('Informe o seu celular', 'celular');
        }

        //expressão regular que válida um email
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(inputs.email).toLowerCase())) {
            validate = false
            handlerErros('Informe um email válido', 'email');
        }


        if(validate) {
            console.log('Sem erros de validação');
            cadastrar();
            console.log('CADASTROU')
        }
      }

    const cadastrar = () => {
        try {
            const response = apiClinica.post('/cadastrarPaciente', {
                'nome': inputs.nome,
                'telefone': inputs.telefone,
                'celular': inputs.celular,
                'email': inputs.email,
                'nomeResponsavel': inputs.nomeResponsavel,
                'telefoneResponsavel': inputs.telefoneResponsavel
            });
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <SafeAreaView style={styles.safe}>

            <ScrollView style={styles.scroll}>

                <View style={styles.viewForm}>

                    <Text style={styles.title}>CADASTRO DE PACIENTE</Text>

                    <Input 
                        label="Nome"
                        placeholder="Seu nome completo"
                        error={errors.nome}
                        onFocus={()=>{handlerErros(null, 'nome')}}
                        onChangeText={(text)=>handlerOnChange(text, 'nome')}
                        iconName="account-circle">
                    </Input>

                    <Input 
                        label="Telefone"
                        placeholder="Informe seu telefone"
                        error={errors.telefone}
                        onFocus={()=>{handlerErros(null, 'telefone')}}
                        onChangeText={(text)=>handlerOnChange(text, 'telefone')}
                        iconName="phone"
                        >
                    </Input>

                    

                    <Input 
                        label="Celular"
                        placeholder="Informe seu celular"
                        error={errors.celular}
                        onFocus={()=>{handlerErros(null, 'celular')}}
                        onChangeText={(text)=>handlerOnChange(text, 'celular')}
                        iconName="cellphone"
                        >
                    </Input>

                    <Input 
                        label="E-mail"
                        placeholder="Informe seu email"
                        error={errors.email}
                        onFocus={()=>{handlerErros(null, 'email')}}
                        onChangeText={(text)=>handlerOnChange(text, 'email')}
                        iconName="email"
                        >
                    </Input>

                    <View style={styles.responsavel}>

                        <Text style={styles.title}>DADOS DE RESPONSÁVEL</Text>

                        <Input 
                            label="Nome responsável"
                            placeholder="Opcional"
                            iconName="human-male-boy"
                            >
                        </Input>

                        <Input 
                            label="Telefone responsável"
                            placeholder="Opcional"
                            iconName="phone"
                            >
                        </Input> 

                    </View>

                    <Button 
                        title="CADASTRAR"
                        onPress={validate}/>

                </View>

            </ScrollView>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe : {
        flex: 1,
        backgroundColor: COLORS.pinkBold
    },
    scroll: {
        paddingHorizontal: 20
      },
      title: {
        color: COLORS.black,
        fontSize: 25,
        fontWeight: "bold"
      },
      viewForm: {
       marginVertical: 55,
      },
      title: {
        fontSize: 22,
        fontWeight: 'bold'
      },
      responsavel: {
        //flex: 1,
        //backgroundColor: '#FFF'
      },
      responsavelText: {
        color: COLORS.black,
        fontSize: 25,
        fontWeight: "bold"
      },
      
})