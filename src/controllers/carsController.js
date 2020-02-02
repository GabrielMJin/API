const sql = require("../db/connection")

exports.get = (req, res, next) => {
  res.status(200).send("opa fion");
};

exports.getCars = (req, res, next) => {
  var result = sql.query("SELECT * FROM Carro", (err, result, fields) => {
    if (err) {
      console.log("error: ", err);
      res.status(500).send("Ocorreu um erro! :(")
      return err;
    }
    var rows = JSON.parse(JSON.stringify(result));
    console.log(rows);
    res.status(200).send(rows);
    //res.json(result);
  });
}

exports.saveDelete = (req, res, next) => {
  //Deletar Carro

  var idDelete = req.params.id;
  sql.query("delete from carro where id = " + idDelete, (err, result, fields) => {
    if (err) {
      console.log("error: ", err);
      res.status(500).send("Ocorreu um erro! :(")
      return err;
    }
    res.status(200).send("Carro Deletado!");

  })

}

exports.saveCars = (req, res, next) => {

    //inserir carro

  var id;
  var placa;
  var estacionado;
  var tempo;
  try {
    id = req.body.id;


    console.log("id: ", id);
    placa = req.body.placa;
    if(placa!=undefined){
        placa = placa.substring(0, 5);
    }else{
        res.status(400).send("Placa não inserida! :(")
    }


    estacionado = req.body.estacionado;
    if(estacionado!=undefined){
        console.log(estacionado);
        estacionado = estacionado.substring(0,1);
    }
    else{
        estacionado = 0;
    }

    tempo = req.body.tempo;
    if(tempo!=undefined){
        tempo = tempo.substring(0, 10);
    }
    else{
        res.status(400).send("Tempo não inserido");
    }

    clientID = req.body.clientID;
    if(clientID!=undefined){
        clientID == clientID.substring(0,10);
    }
    else{
        res.status(400).send("Insira o ID do cliente");
    }


    console.log("Placa : ", placa);
    console.log("Estacionado : ", estacionado );
    console.log("Tempo : ", tempo);

    if (id == undefined || id == null || id == "") {
      var values = `("${placa}" ,${estacionado}, ${tempo}, ${clientID})`
      //Cadastro do carro

      sql.query("insert into carro (placa, estacionado,tempo,clientID ) values  " + values, (err, result, fields) => {
        if (err) {

          console.log("error: ", err);
          res.status(500).send("Ocorreu um erro! :(")
          return err;
        }
        res.status(200).send("Carro Inserido!");    

      })
    }
    else {

      //Edição de carro
      var ident = `("${id}")`;
      var plaka = `("${placa}")`;
      var time = `("${tempo}")`;
      var clienteID = `("${clientID}")`;
      sql.query("update carro set placa = " + plaka + " ,tempo = " + time + " ,clientID = " + clienteID + " where id = " + ident, (err, result, fields) => {
        if (err) {
          console.log("error: ", err);
          res.status(500).send("Ocorreu um erro! :(")
          return err;
        }
        res.status(200).send("Carro modificado!");

      })

    }
  } catch (error) {

    console.log(error);
    res.status(500).send("Houve um Erro!");
  }

}


