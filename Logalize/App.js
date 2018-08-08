import React from 'react'
import Home from './src/www/Home' //ESSE HOME SERA A TELA APOS FEITO O LOGIN
import Login from './src/www/Login'
import HomeScreen from './src/www/HomeScreen'  //ESSE HOME É DEFINITIVAMENTE A TELA INICIAL ONDE CHECA AS CONEXÕES
import Barcode from './src/www/Barcode'
import HomeAdmin from './src/www/HomeAdmin'
import ErrorScreen from './src/www/ErrorScreen' //ESSA TELA É A TELA DE ERROS
import showData from './src/www/showData'
import HomeOperations from './src/www/HomeOperations' //ESSA TELA É A TELA ONDE MOSTRA O LOGIN/CADASTRO
import {Stack, Router, Scene} from 'react-native-router-flux'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class App extends React.Component{
	render(){
		return(
			<Router>
				<Scene>
					<Scene type="reset" key="homescreen" component={HomeScreen}  hideNavBar={true} />
					<Scene type="reset" key="errorscreen" component={ErrorScreen}  hideNavBar={true} />
					<Scene type="reset" key="login" component={Login} hideNavBar={true}/>
					<Scene type="reset" key="home" component={Home} hideNavBar={true} />
					<Scene type="reset" key="barcode" component={Barcode} hideNavBar={true} />
					<Scene type="reset" key="showdata" component={showData}  hideNavBar={true}/>
					<Scene type="reset" key="homeoperations" hideNavBar={true} component={HomeOperations} />
				
					<Scene type="reset" key="homeadmin" component={HomeAdmin} hideNavBar={true} />
				</Scene>
			</Router>
		)
	}
}