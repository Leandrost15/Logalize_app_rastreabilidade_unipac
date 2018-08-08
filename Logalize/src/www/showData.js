import React from 'react'
import {View,Text,Button,TextInput} from 'react-native'
import {Actions} from 'react-native-router-flux'
import axios from 'axios'

function doRequestDatabase(lote,qtd_emb,seq,rg,pontoPartida,pontoDestino){
	return new Promise(function(resolve,reject){
		axios.post('http://35.237.128.138:3000/insertProduto', {
			lote : lote,
			qtd_emb : qtd_emb,
			seq : seq,
			rg : rg,
			pontoPartida : pontoPartida,
			pontoDestino: pontoDestino
		}).then(function(response){
			Actions.home()
		}).catch(function(err){
				window.errorLog = 'Erro na tentativa de inserir informações no banco de dados, contate um superior sobre este erro.'
				Actions.errorscreen()
		})
	})
}

function back(){
	Actions.home()
}

export default class showData extends React.Component {
	
	constructor(props){
		super(props)
	}
	
	render(){
		return(
		<View style={format.view}>
			<View style={format.panel}>
				<View style={{paddingBottom:15}}>
					<Text style={{fontSize: 15,textDecorationLine: "underline"}}>LOTE: {window.barcode.substring(1,11)}</Text>
				</View>
				
				<View style={{paddingBottom:15}}>
					<Text style={{fontSize: 15,textDecorationLine: "underline"}}>QTD EMB: {window.barcode.substring(11,16)}</Text>
				</View>
				
				<View style={{paddingBottom:15}}>
					<Text style={{fontSize: 15,textDecorationLine: "underline"}}>SEQ:{window.barcode.substring(16,21)}</Text>
				</View>
				
				<View style={{paddingBottom:15}}>
					<Text style={{fontSize: 15,textDecorationLine: "underline"}}>RG: {window.barcode.substring(21,30)}</Text>
				</View>
				
				<View style={{paddingBottom:15}}>
					<Text style={{fontSize: 15,textDecorationLine: "underline"}}>PONTO DE PARTIDA:  {window.pontoPartida}</Text>
				</View>
				
				<View style={{paddingBottom:15}}>
					<Text style={{fontSize: 15,textDecorationLine: "underline"}}>DESTINO:  {window.destino}</Text>
				</View>
				
				<View style={{paddingTop: 20}}>
					<Button title = 'CONFIRMAR' onPress={doRequestDatabase.bind(this,window.barcode.substring(1,11),window.barcode.substring(11,16),window.barcode.substring(16,21),window.barcode.substring(21,30),window.pontoPartida,window.destino)} />
				</View>
				
				<View style={{paddingTop: 50,width:230,paddingLeft:125}}>
					<Button color='red' title ='CANCELAR' onPress={back.bind(this,)}  />
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
		height: 350,
		marginBottom: 5,
		margin: 5,
		marginTop : 130,
		elevation: 30,
		flexDirection: 'column'
	},
}