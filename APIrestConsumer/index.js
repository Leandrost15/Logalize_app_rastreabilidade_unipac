const server = require('./src/serverconfig/server_config')
const database = require('./src/dataconfig/data_config').connection;
var codUser = 0
var seqProd = 0
var idProd = 0
server.listen(3000)
database.connect(function(err){
        if(err){
                console.log(err)
                console.log('A conexao com o banco nao foi estabelecida')
                database.end()
                return
        }
        
        console.log('conecto no banco')
})
server.get('/getConnection', function(req,res){
        res.send(200)
})
server.get('/getConnectionDb', function(req,res){
        database.query('select * from dx1',function(err){
                if(err){
                        res.send(400)
                        console.log(err)
                        return
                }
                res.send(200)
        })
})
server.get('/filterProduto', function(req,res){
        database.query('select * from Produtos',function(err,result){
                if(err){
                        res.send(400)
                        console.log(err)
                        return  
                }
        res.send(JSON.stringify(result[0]))
        
        })
})
server.post('/autenticate', function(req,res){
        database.query('select ID_TYPE_USER from Usuarios where RE = ? and senha = ?',[req.body.RE,req.body.senha]$
                if(err){
                        res.send(400)
                        console.log(err)
                        return
                }
                
                if(result[0]){
                        codUser = JSON.stringify(result).replace(/[^0-9]/g,'')
                        res.send(codUser)
                } else {
                        res.send(401)
                }
        })
})
server.get('/test',function(req,res){
        res.send(codUser)
})
server.post('/insertProduto', function(req,res){
    database.query('select ID_PROD from Produtos where LOTE = ? and RG = ?',[req.body.lote,req.body.rg],function(e$
        if(err){
                res.send(400)
                console.log(err)
                return
        }
        if(result[0]){
                idProd = JSON.stringify(result[0]).replace(/[^0-9]/g,'')
        database.query('select SEQ from Produtos where LOTE = ? and RG = ?',[req.body.lote,req.body.rg],function(e$
                if(err){
                        res.send(400)
                        console.log(err)
                        return
                }
                seqProd = JSON.stringify(resultSeq[0]).replace(/[^0-9]/g,'')
                
                database.query('insert into LogMove (ID_PROD,PONTO_PARTIDA,PONTO_DESTINO,DATA_MOVE,HORA_MOVE,SEQ) $
                        if(err){
                                res.send(400)
                                console.log(err)
                                return
                        }
                        res.send(200)
                })      
        })
        } else {
                database.query('insert into Produtos (LOTE,QTD_EMB,SEQ,RG,COD_STATUS,DATA_FAB,HORA_FAB) values (?,$
                        if(err){
                                res.send(400)
                                console.log(err)
                                return
                        }
                
                    database.query('select ID_PROD from Produtos where LOTE = ? and RG = ?',[req.body.lote,req.bod$
                        if(err){
                            res.send(400)
                            console.log(err)
                            return
                        }
                        idProd = JSON.stringify(result[0]).replace(/[^0-9]/g,'')
                        database.query('select SEQ from Produtos where LOTE = ? and RG = ?',[req.body.lote,req.bod$
                                seqProd = JSON.stringify(resultSeq[0]).replace(/[^0-9]/g,'')
                                database.query('insert into LogMove (ID_PROD,PONTO_PARTIDA,PONTO_DESTINO,DATA_MOVE$
                                        if(err){
                                                res.send(400)
                                                console.log(err)
                                                return
                                        }
                                                res.send(200)
                                })
                        })

                    database.query('select ID_PROD from Produtos where LOTE = ? and RG = ?',[req.body.lote,req.bod$
                        if(err){
                            res.send(400)
                            console.log(err)
                            return
                        }
                        idProd = JSON.stringify(result[0]).replace(/[^0-9]/g,'')
                        database.query('select SEQ from Produtos where LOTE = ? and RG = ?',[req.body.lote,req.bod$
                                seqProd = JSON.stringify(resultSeq[0]).replace(/[^0-9]/g,'')
                                database.query('insert into LogMove (ID_PROD,PONTO_PARTIDA,PONTO_DESTINO,DATA_MOVE$
                                        if(err){
                                                res.send(400)
                                                console.log(err)
                                                return
                                        }
                                                res.send(200)
                                })
                        })
                    })
                })
            }
   })
})      
