import React from 'react'
import {View,Text,Button,StatusBar} from 'react-native'

export default class BarComponent extends React.Component{
	render(){
		return(
		<View style = {cssStyle.front}>
			<StatusBar hidden />
		</View>
		)
	}
}

const cssStyle = {
	front: {
		width: 360,
		height: 60,
		elevation: 50,
		backgroundColor: 'cornflowerblue'
	}
}
