
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('purchases').del()
    .then(function () {
      // Inserts seed entries
      return knex('purchases').insert([
        {
          "user_id": '3',
          "sale_id":'2',
          "quantity": '4',
          "total":"3000"
        },
        {
          "user_id": '3',
          "sale_id":'1',
          "quantity": '1',
          "total":"200"
        },
        {
          "user_id": '4',
          "sale_id":'2',
          "quantity": '3',
          "total":"800"
        },
        {
          "user_id": '1',
          "sale_id":'3',
          "quantity": '7',
          "total":"1000"
        },
        {
          "user_id": '5',
          "sale_id":'2',
          "quantity": '2',
          "total":"800"
        },

      ]);
    });
};
