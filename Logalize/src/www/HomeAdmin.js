import React from 'react'
import {View,Text,Button,StatusBar,Picker,Image} from 'react-native'
import {Actions} from 'react-native-router-flux'
import axios from 'axios'

function showData(stateSet){
	axios.get('http://35.237.128.138:3000/filterProduto').then(function(response){
		alert(response)
	}).catch(function(err){
		alert(err)
	})
}


export default class HomeAdmin extends React.Component{
	constructor(props) {
		super(props)
		
		this.state = {
			result : ''
		}
	}
	render(){
		return(
		<View style = {format.view}>
			<Button title='Mostrar' onPress={showData.bind(this,this)} />
			<Text> {this.state.result} </Text>
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
		height: 220,
		marginBottom: 5,
		margin: 5,
		marginTop : 100,
		elevation: 30, 
	},
	pickerStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between'	
	}
}