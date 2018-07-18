
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Nisha',
          last_name: 'Bharti',
          email: 'nisha@nisha.com',
          password: 'nisha'
      },
      {
        first_name: 'Anita',
        last_name: 'Pandey',
        email: 'anita@anita.com',
        password: 'anita'
    },
    {
      first_name: 'Swati',
      last_name: 'Shipra',
      email: 'swati@swati.com',
      password: 'swati'
  },
  {
    first_name: 'Usha',
    last_name: 'Kiran',
    email: 'usha@usha.com',
    password: 'usha'
},
{
  first_name: 'Aditi',
  last_name: 'Roy',
  email: 'aditi@aditi.com',
  password: 'aditi'
},
{
  first_name: 'Admin',
  last_name: 'Admin',
  email: 'admin@admin.com',
  password: 'admin',
  admin:'true'
},
      ]);
    });
};
