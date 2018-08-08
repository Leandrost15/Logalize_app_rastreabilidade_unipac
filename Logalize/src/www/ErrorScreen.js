import React from 'react'
import {View,Text,Button,StatusBar} from 'react-native'
import {Actions} from 'react-native-router-flux'

function move(){
	Actions.homescreen()
}

export default class Home extends React.Component{
	
	render(){
		return(
		<View style={cssStyle.background}>
			<Text>{window.errorLog}</Text>
			<Button title='Tentar novamente' onPress={move} />
		</View>
		)
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