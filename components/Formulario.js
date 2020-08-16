import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    ScrollView,
    Alert
  } from 'react-native';

import moment from "moment";

import DateTimePickerModal from "react-native-modal-datetime-picker";

  const Formulario = () => {

    const [ paciente, guardarPaciente ] = useState('');
    const [ propietario, guardarPropietario ] = useState('');
    const [ telefono, guardarTelefono ] = useState('');
    const [ fecha, guardarFecha ] = useState('');
    const [ hora, guardarHora ] = useState('');
    const [ sintomas, guardarSintomas ] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };

    const handleConfirmDate = (date) => {
      
      // const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      // guardarFecha( date.toLocaleString() );
      guardarFecha( moment( date ).locale('es').format("DD MMMM YYYY") );
      hideDatePicker();
    };

    // TIME PICKER
    const showTimePicker = () => {
      
      setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
      setTimePickerVisibility(false);
    };

    const handleConfirmTime = (hour) => {
      
      // console.warn( moment( hour, 'YYYY-MM-DD', 'es') );
      guardarHora( moment( hour ).locale('es').format("HH:mm") );
      
      // const opciones = { hour: "numeric", minute: "2-digit" };
      
      // console.warn( hour.toLocaleString('en-US') );
      // guardarFecha( date.toLocaleDateString('en-US', opciones) );

      hideTimePicker();
    };

    // CREAR NUEVA CITA
    const crearNuevaCita = ({ citas }) => {
      
      // VALIDAR
      // if( paciente.trim() === '' || propietario.trim() === '' || telefono.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
      //   // FALLA LA VALIDACION
      //    mostrarAlerta();

      // }

    
    };

    const mostrarAlerta = () => {
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios',
        [{
          text: 'OK'
        }]
      );
    };

    return (
      <>

      <ScrollView style={ styles.formulario } >

        <View>
          <Text style={ styles.label }>Paciente:</Text>
          <TextInput 
            style = { styles.input }
            onChangeText= { ( texto ) => guardarPaciente( texto ) }
          />
        </View>

        <View>
          <Text style={ styles.label }>Dueño:</Text>
          <TextInput 
            style = { styles.input }
            onChangeText= { ( texto ) => guardarPropietario( texto ) }
          />
        </View>

        <View>
          <Text style={ styles.label }>Teléfono contacto:</Text>
          <TextInput 
            style = { styles.input }
            onChangeText= { ( texto ) => guardarTelefono( texto ) }
            keyboardType= 'numeric'
          />
        </View>


        <View>
          <Text style={ styles.label }>Fecha:</Text>
          
          <Button title="Select Date" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={ handleConfirmDate }
            onCancel={hideDatePicker}
            locale='es_ES'
            headerTextIOS='Elige una fecha'
            cancelTextIOS='Cancelar'
            confirmTextIOS='Confirmar'
          />
          <Text>{ fecha }</Text>
        </View>

        <View>
        <Text style={ styles.label }>Hora:</Text>
          <Button title="Select hour" onPress={ showTimePicker } />
          <DateTimePickerModal
            isVisible={ isTimePickerVisible }
            mode="time"
            onConfirm={ handleConfirmTime }
            onCancel={ hideTimePicker }
            locale='es_ES'
            headerTextIOS='Elige una hora'
            cancelTextIOS='Cancelar'
            confirmTextIOS='Confirmar'
          />
          <Text>{ hora }</Text>
        </View>

        <View>
          <Text style={ styles.label }>Sintomas:</Text>
          <TextInput 
            style = { styles.input }
            onChangeText= { ( texto ) => guardarSintomas( texto ) }
            multiline
          />
        </View>

        <View>
          <TouchableHighlight 
            onPress={ () => crearNuevaCita() }
            style={ styles.btnSubmit }
          >
            <Text style={ styles.textoSubmit }> Crear nueva cita</Text>
          </TouchableHighlight>
        </View>


      </ScrollView>

        

      </>
    );

  };

  const styles = StyleSheet.create({  

    formulario: {
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },  

    label: {
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 20
    },

    input: {
      marginTop: 10,
      height: 50,
      borderColor: '#e1e1e1',
      borderWidth: 1,
      borderStyle: 'solid'
    },

    btnSubmit: {
      padding: 10,
      backgroundColor: '#7D024E',
      marginVertical: 10
    },

    textoSubmit: {
      color: '#FFF',
      fontWeight: 'bold',
      textAlign: 'center'
    }

  });

  export default Formulario;