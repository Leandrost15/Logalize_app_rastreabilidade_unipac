import React, { Component } from 'react';
import {Text, View, Image,Button,TouchableOpacity,BackHandler } from 'react-native';
import * as Animatable from 'react-native-animatable'
import {Actions} from 'react-native-router-flux'

function nextLogin(){
	Actions.login()
}

export default class HomeScreen extends Component {
    render() {
        return (
		<View style={cssStyle.background}>
			<Image source={require('./components/logo.png')} style={{width: 120,height:120}}/>
			<Text style={{fontSize:30, color:'white',paddingBottom:20}}> Logilize </Text>
				<View>
					<Button title='Solicite um cadastro' onPress={alert.bind(this,'eae')}/>
					<Text style={{fontSize:20,color:'white',paddingLeft:70,paddingBottom:30,paddingTop:30}}> Ou </Text>
					<Button title='Entre' onPress={nextLogin.bind(this,)}/>
				</View>
					
			<Text style={{paddingTop:30}}>Faça do seu trabalho um "vapt e vupt".</Text>
			<TouchableOpacity onPress={BackHandler.exitApp.bind(this,)}> 
				<Text style={{paddingTop:30,textDecorationLine: "underline"}}> Sair do Logilize </Text>
			</TouchableOpacity>
		</View>
        );
    }
}

const cssStyle = {
	background : {
		flex: 1,
		backgroundColor: 'royalblue',
		justifyContent:'center',
		alignItems: 'center'
	},
}
//https://github.com/oblador/react-native-animatable