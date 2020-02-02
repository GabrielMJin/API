const sql = require("../db/connection")

exports.get = (req, res, next) => {
  res.status(200).send("opa fion");
};

exports.getUsers = (req, res, next) => {
  var result = sql.query("SELECT * FROM Cliente", (err, result, fields) => {
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
  //Deletar usuário

  var idDelete = req.params.id;
  sql.query("delete from cliente where id = " + idDelete, (err, result, fields) => {
    if (err) {
      console.log("error: ", err);
      res.status(500).send("Ocorreu um erro! :(")
      return err;
    }
    res.status(200).send("Usuario Deletado!");

  })

}

exports.saveUser = (req, res, next) => {


  var id;
  var nome;
  var idade;
  var valorDevedor;
  try {
    id = req.body.id;


    console.log("id: ", id);


    nome = req.body.nome.substring(0, 199);
    idade = req.body.idade.substring(0, 10);
    valorDevedor = req.body.valorDevedor.substring(0, 10);


    console.log("Nome : ", nome);
    console.log("Idade: ", idade);
    console.log("Valor Devedor : ", valorDevedor);


    if (id == undefined || id == null || id == "") {
      var values = `("${nome}" ,${idade}, ${valorDevedor})`
      //Cadastro de Usuário

      sql.query("insert into cliente (nome, idade,valorDevedor ) values  " + values, (err, result, fields) => {
        if (err) {

          console.log("error: ", err);
          res.status(500).send("Ocorreu um erro! :(")
          return err;
        }
        res.status(200).send("Usuario Inserido!");

      })
    }
    else {

      //Edição de usuário
      var ident = `("${id}")`;
      var name = `("${nome}")`;
      var age = `("${idade}")`;
      var valorDever = `("${valorDevedor}")`;
      sql.query("update cliente set valorDevedor = " + valorDever + " ,idade = " + age + " ,nome = " + name + " where id = " + ident, (err, result, fields) => {
        if (err) {
          console.log("error: ", err);
          res.status(500).send("Ocorreu um erro! :(")
          return err;
        }
        res.status(200).send("Usuario Inserido!");

      })

    }
  } catch (error) {

    console.log(error);
    res.status(500).send("Houve um Erro!");
  }

}


