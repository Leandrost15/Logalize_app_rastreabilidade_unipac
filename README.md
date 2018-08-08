# Logalize_app_rastreabilidade_unipac (Descontinuado)
Logalize Startup / Aplicativo desenvolvido para rastreabilidade de produtos para UNIPAC-Jacto

Pré-desenvolvido pela equipe de automação em logistica denominada como Logalize com fins lucrativos á empresa UNIPAC com o objetivo de automatizar,rastrear e agilizar processos de transferencias de produtos desde sua origem até seu destino final (Deposito) tendo como coadjuvante a grande tecnologia alemã, SAP.

O aplicativo em si, assemelha-se a um "Check Pointer Worker". A cada etapa cuja ação seja entrada/saida, é passada para o aplicativo, e do aplicativo é transmitida para o banco de dados.
No aplicativo, informa-se de qual etapa o produto passou e qual sera a proxima etapa em que o produto passará.
	Pode-se analogar da seguinte forma mais rude possivel:
			"Onde acabei de passar, para onde irei"
Assim desta forma, não só gerando um backlog da rastreabilidade de movimentações dos produtos, mas também gerando um backlog de produtos já avaliados pelo aplicativo, sempre em suma importancia á consistencia, evitando duplicatas de registro no banco de dados

Imagens demonstrativas
	BackLog Produtos: https://ibb.co/gMtj0e
	BackLog Movimentação: https://ibb.co/mUkxLe

Vida procedural do aplicativo(Logalize Model CTO Development Project):
	PRODUTO = (P)		CHECK POINT APP = (CKAP)	Destino = (Dest) Depositos = (Depo)
	
	ORIGEM P >> CKAPP 
		Dest1 <> Dest2 [...] <> >> CKAPP
		Dest3 >> CKAPP
		<> Dest4 >> CKAPP
		<> [...] <> >> CKAPP
	DESTINO FINAL >> CKAPP
		Depo1
		Depo2
		Depo3
		Depo[....] <>

Tecnologias envolvidas:

	NodeJS
	Framework Express
	Framework React-Native
	JavaScript
	MySQL
	npm
	yarn
	GoogleCloud
	API rest
	Android Studio SDK
	Java JRE/JDK
	
	
Logalize Team:

	Elaine (CEO)
	Leandro Salustriano dos Santos (CTO)
	Karina Arakaki Higuti
	Ezequiel Pontes
	Paulo Okuda
	Addany Costa
	
Devido falta de membros com precisas competencias, e fazendo juz a grande mudanças na vida universitaria dos integrantes, o projeto foi dado como descontinuado e liberado para livre e espontaneo acesso, para ter como base o uso das tecnologias usada aqui á terceiros para adquirir novos aprendizados.


	
	
