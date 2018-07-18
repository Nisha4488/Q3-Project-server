
exports.up = function(knex, Promise) {
  return knex.schema.createTable("purchases",(table)=>{
   table.increments();
   table.integer("user_id")
  .notNullable()
  .references('id')
  .inTable('users')
  .onDelete('CASCADE')
  .index();
  table.integer("sale_id")
 .notNullable()
 .references('id')
 .inTable('sales')
 .onDelete('CASCADE')
 .index();
 table.integer('quantity')
 table.integer('total')
   table.timestamps(true, true);
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("purchases");
};
