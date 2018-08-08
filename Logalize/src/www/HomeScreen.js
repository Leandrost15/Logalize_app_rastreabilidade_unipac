import React, { Component } from 'react';
import {Text, View, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable'
import axios from 'axios'
import {Actions} from 'react-native-router-flux'


function getConnections(){
	axios.get('https://www.google.com').then(function(resolve){
		axios.get('http://35.237.128.138:3000/getConnection').then(function(resolve){
			axios.get('http://35.237.128.138:3000/getConnectionDb').then(function(resolve){
				Actions.homeoperations() //PROXIMA TELA
			}).catch(function(err){
				window.errorLog = 'Erro de conexão com o banco de dados'
				Actions.errorscreen()
			})
		}).catch(function(err){
			window.errorLog = 'Erro de conexão direta com o servidor'
			Actions.errorscreen()
		})
	}).catch(function(err){
		window.errorLog = 'Você não esta conectado na internet.'
		Actions.errorscreen()
	})
}

function waitConnections(){
	setTimeout(getConnections, 5000) //TIMEOUT PARA AGUARDAR RESPOSTA DE CONEXAO
}

export default class HomeScreen extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			messageVerify: 'Aguarde enquanto as conexões estão sendo estabelecidas.!'
		}
	}
	
    render() {
        return (
            <View style={cssStyle.background}>
			
				<View style={cssStyle.welcome}>
					<Text style={{fontSize:22}}>Olá, bem vindo ...</Text>
					<Animatable.Text onAnimationBegin={waitConnections} animation='flash' iterationDelay={1000} iterationCount='infinite' style={{fontSize:12}}>{this.state.messageVerify}</Animatable.Text>
				</View>
				
			</View>
        );
    }
}

const cssStyle = {
	background : {
		flex: 1,
		backgroundColor: 'royalblue',
		justifyContent: 'center',
		alignItems: 'center',
	}
}
//https://github.com/oblador/react-native-animatable