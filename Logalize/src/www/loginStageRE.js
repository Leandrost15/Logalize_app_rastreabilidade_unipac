import React, { Component } from 'react';
import {Text, View,TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class Barcode extends Component {
    render() {
        return (
        <View style={cssStyle.background}>
				<TextInput style={{backgroundColor:'white',elevation:15,opacity:0.3,width:300}}/>
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