const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('purchases').then(purchases=>res.json(purchases))
});

router.get('/:id', function(req,res,next){
  knex('purchases').where('id',req.params.id).then(purchases=>res.json(purchases))
})

router.post('/', function(req,res){
  knex('purchases').insert(req.body, '*').then(newPurchase=>res.json(newPurchase))
})

router.patch('/:id', function(req,res){
  knex('purchases').where('id',req.params.id).update(req.body, '*').then(updatedPurchase=>res.json(updatedPurchase))
})

router.delete('/:id', function(req,res){
  knex('purchases').where('id',req.params.id).del().then(removedPurchase=>res.json(removedPurchase))
})
module.exports = router;
