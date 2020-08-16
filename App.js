import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View, FlatList, TouchableHighlight, Platform
} from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';



const App: () => React$Node = () => {

  const [ mostrarForm, guardarMostrarForm ] = useState(false);

  const [citas, setCitas] = useState([
    { id: "1", paciente: "Hook", propietario: "Juan",sintomas: "No come" },
    { id: "2", paciente: "Redux", propietario: "Itzel",sintomas: "No duerme" },
    { id: "3", paciente: "Native", propietario: "Josue",sintomas: "No canta" }
  ]);

  // ELIMINA PACIENTE DEL STATE
  const eliminarPaciente = id => {
    setCitas( ( citasActales ) => {

      return citasActales.filter( cita => cita.id !== id );

    } ); 
  };

  const mostrarFormulario = () => {
    console.log( mostrarForm );
    guardarMostrarForm( !mostrarForm );
  };

  return (
    
    <View style={ styles.contenedor }>
      <Text style={ styles.titulo } >Administrador de citas</Text>

      <View>
          <TouchableHighlight 
            onPress={ () => mostrarFormulario() }
            style={ styles.btnMostrarForm }
          >
            <Text style={ styles.textoMostrarForm }> Crear nueva cita</Text>
          </TouchableHighlight>
      </View>

      <View style={ styles.contenido }>

        {
          mostrarForm
          ? (
            <>
              <Text style={ styles.titulo } > Crear nueva cita </Text>
              <Formulario />
            </>
          )
          : (
            <>
            <Text style={ styles.titulo } >
              {
              ( citas.length > 0 )
              ? 'Administra tus citas'
              : 'No hay citas, agrega una.' 
              }         
            </Text>

            <FlatList
              style={ styles.listado }
              data={ citas }
              renderItem={ ( { item } ) => <Cita item={ item } eliminarPaciente={ eliminarPaciente } /> }
              keyExtractor={ cita => cita.id }
            />
            </>
          )
        }

      </View>

    </View>

  );
};

const styles = StyleSheet.create({

  contenedor: {
    backgroundColor: '#aa076b',
    flex: 1,
  },  

  titulo: {
    color: '#FFF',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },

  contenido: {
    flex: 1,
    marginHorizontal: '2.5%'
  },

  listado: {
    flex: 1,

  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: '#7D024E',
    marginVertical: 10
  },

  textoMostrarForm: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }

});

export default App;
