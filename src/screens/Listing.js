import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import { COLORS } from "../assets/const/colors";
import apiClinica from '../services/apiClinica';

export const Listing = () => {

  const [pacientes, setPacientes] = useState([]);
    
    useEffect( 
      () => {
        apiClinica.get('/listarPacientes')
        .then(
                (data)=>{
                  setPacientes(data.data)
                 
                }
        )
      },
      []
    );

  return (
    <ScrollView>
      <View style={styles.container}>
        {
          pacientes.map(
            paciente => (
              <View
              key={paciente.cod_paciente}
              style={styles.post}
              >
              <View style={styles.postContainer}>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.titulo}>{paciente.nome}</Text>
              </View>
              <View style={styles.postContainer}>
                <Text style={styles.label}>E-mail::</Text>
                <Text style={styles.titulo}>{paciente.email}</Text>
              </View>
              <View style={styles.postContainer}>
                <Text style={styles.label}>Celular:</Text>
                <Text style={styles.titulo}>{paciente.celular}</Text>
              </View>
              <View style={styles.botoes}>
                <TouchableOpacity style={{...styles.botao, backgroundColor: COLORS.yellow}}>
                  <Text style={{...styles.labelButton}}>EDITAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{...styles.botao, backgroundColor: COLORS.blublue}}>
                  <Text style={styles.labelButton}>EXCLUIR</Text>
                </TouchableOpacity>
              </View>
              
            </View>
            )
          )
        }
         
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingTop: 60 
  },
  post: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: COLORS.pink,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 5,
    borderWidth: 5,
    borderColor: COLORS.black,
    borderRadius: 15
  },
  postContainer: {
    width: '95%',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
   //elevation: 5,
    //borderWidth: 5,
    //borderColor: COLORS.black,
    borderRadius: 15
  },
  imagem: {
    borderRadius: 5,
    marginVertical: 16,
    marginLeft: 16,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 16,
    //fontWeight: 'bold',
    color: COLORS.black
  },
  label: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black
  },
  botoes: {
    //backgroundColor: COLORS.blue,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    
  },
  botao: {
    width: 120,
    height: 40,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },
  labelButton: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.black
  }
});
