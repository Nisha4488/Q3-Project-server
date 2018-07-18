const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('sales').then(sales=>res.json(sales))
});

router.get('/:id', function(req,res,next){
  knex('sales').where('id',req.params.id).then(sales=>res.json(sales))
})

router.post('/', function(req,res){
  knex('sales').insert(req.body, '*').then(newSale=>res.json(newSale))
})

router.patch('/:id', function(req,res){
  knex('sales').where('id',req.params.id).update(req.body, '*').then(updatedSale=>res.json(updatedSale))
})

router.delete('/:id', function(req,res){
  knex('sales').where('id',req.params.id).del().then(removedSale=>res.json(removedSale))
})
module.exports = router;
