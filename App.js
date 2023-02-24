import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, 
  TouchableOpacity,Button, 
  ActivityIndicator, ScrollView,
  SafeAreaView, StyleSheet, 
  Alert} from 'react-native';

  const App = () => { 
    const [valor, setValor] = useState('Valor Padrão');
    const [clicado, setClicado] = useState(false);

    useEffect(()=>{
      // Alert.alert('independente do botão ser clicado') 
      alert('independente do botão ser clicado')
      if (clicado==true) {
        setValor('O botão foi clicado');
      } else {
        setValor('O estado do botão esta falso')        
      }
    }, [clicado]);

    return ( 
      <View>
        <Text>Exemplo Fetch API - ViaCEP</Text> 
        <Text>{valor}</Text>
        <Button onPress={()=>{
             (clicado == false) ? setClicado(true)
              : setClicado(false)
            }
          }
          title ={'CLIQUE AQUI PARA ALTERAR O TEXTO'} />
      </View> 
    )
  }
  export default App;