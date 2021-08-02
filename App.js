import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {


  //definir el estado de citas
  const [citas,setCitas]=useState([

    { id:"1",paciente:"hook", propietario:"juan",sintomas:"No come"},
    { id:"2",paciente:"redux", propietario:"andy",sintomas:"No duerme"},
    { id:"3",paciente:"native", propietario:"luis",sintomas:"No toma"}
  ]);


  //eliminar pacientes
  const eliminarPaciente= id =>{
    setCitas( (citasActualles) => {
      return citasActualles.filter( cita => cita.id !== id)
    })

  }
  return(
    <View style={styles.contenedor}> 
      <Text style={styles.titulo} > Administrador de citas </Text>
      <Formulario />
      <Text style={styles.titulo}> {citas.length > 0 ? "Administra tus citas" : "No hay citas" }s</Text>
                  
                 

              <FlatList
                data={citas}
                renderItem={ ({item}) => <Cita cita={item} eliminarP={eliminarPaciente}/> }
                keyExtractor={ cita=> cita.id }
              />
          
          
          {//mapeoo
          /*{citas.map(cita =>(
            <View>
              <Text>{cita.paciente}</Text>
            </View>
          ))}*/}
    </View>
    );
  };

const styles=StyleSheet.create({
    contenedor:{
      backgroundColor:'#AA076B',
      flex:1
    },

    titulo:{
      color:'#FFF',
      marginTop:40,
      marginBottom:20,
      fontSize:24,
      fontWeight:'bold',
      textAlign:'center'
    }


});

export default App;
