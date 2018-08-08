import React from 'react'
import {View,Text,Button,StatusBar,Picker,Image} from 'react-native'
import {Actions} from 'react-native-router-flux'

function handlerChangeValue(pontoPartida,destino){
	if(pontoPartida == "pontoPartida" || destino == "destino" || pontoPartida == destino){
		alert('Informações invalidas')
	} else {
		window.pontoPartida = pontoPartida
		window.destino = destino
		Actions.barcode()
	}
	
	
}

function back(){
	Actions.homeoperations()
}

export default class Home extends React.Component{
	
	constructor(props){
		super(props);
		
		this.state = {
			destino:'destino',
			pontoPartida: 'pontoPartida'
		}
	}
	
	render(){
		return(
		<View style = {format.view}>
			<StatusBar hidden />
			<Image source={require('./components/logo.png')} style={{width:150,height:150,paddingBottom:-400}} />
			<View style = {format.panel}>
				<View style={format.pickerStyle}>
					<Picker style={{width: 180}} selectedValue={this.state.pontoPartida} onValueChange={(value)=> this.setState({pontoPartida: value})}>
						<Picker.Item label="Ponto de partida" value="pontoPartida" />
						<Picker.Item label="Fabricação" value="Fabricacao" />	
						<Picker.Item label="Hidratação" value="Hidratacao" />
						<Picker.Item label="Acabamento" value="Acabamento" />
						
					</Picker>
					
					<Picker style={{width: 180}} selectedValue={this.state.destino} onValueChange={(value)=> this.setState({destino: value})}>
						<Picker.Item label="Destino" value="destino" />
						<Picker.Item label="Hidratação" value="Hidratacao" />
						<Picker.Item label="Acabamento" value="Acabamento" />
						<Picker.Item label="Descarte" value="Descarte" />
						<Picker.Item label="Deposito 4837" value="Dep4837" />
						<Picker.Item label="Deposito 4805" value="Dep4805" />
					</Picker>
					
				</View>
				
				<View style={{paddingTop: 40,width:350,paddingLeft:5}}>
						<Button onPress={handlerChangeValue.bind(this,this.state.pontoPartida, this.state.destino)} title='Ler codigo de barra do produto' />	
				</View>
				
				<View style={{justifyContent:'center',alignItems:'center',paddingTop:60}}>
					<Button color='red' title='Desconectar-se' onPress={back.bind(this,)}/>
				</View>
			</View>
			
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