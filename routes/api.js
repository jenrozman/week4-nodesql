var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();


router.get('/api/:id', (req, res) => { //get id from car button
  console.log(req.params.id);

  connect.query(`SELECT * FROM mainmodel WHERE model="${req.params.id}"`, (err, result) => {
  if(err){
    throw err; console.log(err);
  } else {
    console.log(result);

    res.json({carData: result});
   }
 });
});

router.delete('/api/:id', (req, res) => {
  console.log('hit the delete route');

  connection.query(`DELETE FROM mainmodel WHERE model="${req.params.id}"`, (err, result) => {
    if (err) {
      console.log(err), throw(err);
    }else{
      res.json(result);
    }
  });
});


module.exports = router;
