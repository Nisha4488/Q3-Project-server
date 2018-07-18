
exports.up = function(knex, Promise) {
  return knex.schema.createTable("sales",(table)=>{
   table.increments();
   table.string("name");
   table.text('img_url');
   table.string("status").defaultsTo('live');
   table.integer("regular_price");
   table.string("inCart").defaultsTo('false');
   table.text('description');
   table.integer('units_sold');
   table.date('end_at');
   table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("sales");
};
