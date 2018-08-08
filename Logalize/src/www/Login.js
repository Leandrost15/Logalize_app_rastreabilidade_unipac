import React from 'react'
import {View,Text,Button,TextInput,TouchableOpacity} from 'react-native'
import axios from 'axios'
import {Actions} from 'react-native-router-flux'

var doRequestDatabase = function(re,senha){
	return new Promise(function(resolve,reject){
		axios.post('http://35.237.128.138:3000/autenticate', {
			RE:  re,
			senha: senha
		}).then(function(response){
			resolve(response.data)
		}).catch(function(err){
			reject('Falha') //arrumar para obter o CODIGO DO STATUS/ RESPONSE.STATUS 401
		})
	})
}

async function checkDate(re,senha,state){
	doRequestDatabase(re,senha).then(function(response){
		if(response == 2){
		Actions.homeadmin()
		} else {
			Actions.home()
		}
	}).catch(function(err){
		state.setState({erro:'Dados invalidos'})
	})
}

function back(){
	Actions.homeoperations()
}

export default class Login extends React.Component {
	
	constructor(props){
		super(props)
		
		this.state = {re: '',senha:'',erro:''}
	}
	
	render(){
		return(
		<View style = {[format.view]}>
			<View style={format.panel}>
				<TextInput onChangeText={(value)=> {this.setState({re: value})}} placeholder='Digite o RE' style={{margin: 10,paddingTop: 20}}/>
				<TextInput secureTextEntry onChangeText={(value)=> {this.setState({senha: value})}} placeholder='Digite a senha' style={{margin: 10,paddingTop: 20}}/>
				<Text style={{color:'red'}}>{this.state.erro}</Text>
				<View style={{flexDirection:'row',justifyContent:'center'}}>
					<View style={{paddingTop:20,width:100}}>
						<Button title='CONFIRMAR' onPress={checkDate.bind(this,this.state.re,this.state.senha,this)}/>
					</View>
					
					<View style={{paddingTop:20,paddingLeft:30,width:100}}>
						<Button title='Voltar' onPress={back.bind(this,)} />
					</View>
					</View>
				</View>
				
			<TouchableOpacity onPress={alert.bind(this,'eae')}> 
				<Text style={{textDecorationLine: "underline"}}> Solicitar cadastro </Text>
			</TouchableOpacity>
			<Text style={{paddingTop:60}}> Caso tenha esquecido a senha de usuario, recorra a um superior.</Text>
		</View>
		)
	}
}




const format = {
	view: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'royalblue'
	},
	panel: {
		width: 349 ,
		height: 250,
		backgroundColor: 'royalblue',
		margin: 5,
		marginTop : 110,
	},
}