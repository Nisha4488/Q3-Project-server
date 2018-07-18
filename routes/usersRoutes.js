const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('users').then(users=>res.json(users))
});

router.get('/:id', function(req,res,next){
  knex('users').where('id',req.params.id).then(users=>res.json(users))
})

router.post('/', function(req,res){
  knex('users').insert(req.body, '*').then(newUser=>res.json(newUser))
})

router.patch('/:id', function(req,res){
  knex('users').where('id',req.params.id).update(req.body, '*').then(updatedUser=>res.json(updatedUser))
})

router.delete('/:id', function(req,res){
  knex('users').where('id',req.params.id).del().then(removedUser=>res.json(removedUser))
})
module.exports = router;
