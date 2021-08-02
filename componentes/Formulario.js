
import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableHighlight,
  TextInput,
  Button,
  KeyboardType,
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
const Formulario = () => {


const [paciente,guardarPaciente]= useState('');
const [dueno,guardarDueno]= useState('');
const [telefono,guardarTelefono]= useState('');
const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
const [isTimerPickerVisible, setTimerPickerVisibility] = useState(false);
const [hora,guardarHora] = useState ('');
const [fecha,guardarFecha] = useState ('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = date => {
    const opciones= { year: 'numeric',month: 'long', day:"2-digit" };
    guardarFecha(date.toLocaleDateString('es-ES',opciones));
    hideDatePicker();
  };


  const showTimerPicker = () => {
    setTimerPickerVisibility(true);
  };

  const hideTimerPicker = () => {
    setTimerPickerVisibility(false);
  };

  const confirmarHora = hora => {
    const opciones= { hour: 'numeric',minute:"2-digit" };
    guardarHora(hora.toLocaleDateString('en-US',opciones));
    hideTimerPicker();
  };
    return (
        <>
        <View style={styles.formulario}> 

            <View>
            <Text style={styles.label}>Paciente:</Text>
            <TextInput
                style={styles.input}
                onChange={ texto => guardarPaciente(texto)}
            />
            </View>
            <View>
            <Text style={styles.label}>Dueño:</Text>
            <TextInput
                style={styles.input}
                onChange={ (texto) =>guardarDueno(texto)}
            />
            </View>
            <View>
            <Text style={styles.label}>Telefono Contacto:</Text>
            <TextInput
                style={styles.input}
                onChange={ (texto) => guardarTelefono(texto)}
                keyboardType="numeric"
            />
            </View>  

            <View>
              <Text style={styles.label}>Fecha:</Text>
                <Button title="Seleccionar fecha" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={confirmarFecha}
                    onCancel={hideDatePicker}
                    locale='es_ES'
                    headerTextIOS="Elige una fecha"
                    cancelTextIOS="Cancelar"
                    confirmTextIOS="Confirmar"
                />
                <Text>{fecha}</Text>
             </View>

             <View>
             <Text style={styles.label}>Hora:</Text>
                <Button title="Seleccionar hora" onPress={showTimerPicker} />
                <DateTimePickerModal
                    isVisible={isTimerPickerVisible}
                    mode="time"
                    onConfirm={confirmarHora}
                    onCancel={hideTimerPicker}
                    locale='es_ES'
                    headerTextIOS="Elige una hora"
                    cancelTextIOS="Cancelar"
                    confirmTextIOS="Confirmar"
                />
             </View>
             <Text>{hora}</Text>
            <View>       
            <Text style={styles.label}>Sintomas:</Text>
            <TextInput
                multiline
                style={styles.input}
                onChange={ (texto) => console.log("")}
            />
            </View>
            
        </View>
        </>
    )


}

const styles=StyleSheet.create({

    formulario: {
        backgroundColor:'#FFF',
        paddingHorizontal:20,
        paddingVertical:10,
        marginHorizontal:'2.5%'
    },
    label: {
        fontWeight:'bold',
        fontSize:20,
        marginTop:20
    },
    input: {
        marginTop:10,
        borderColor:'#e1e1e1',
        borderWidth:1,
        height:50,
        borderStyle: 'solid',
    }

})
export default Formulario;