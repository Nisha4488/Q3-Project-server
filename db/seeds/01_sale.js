
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sales').del()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {
"name": "Sony Alpha A7R III",
"img_url": "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2017%2F11%2Fsony_a7r_mark_ii-top-10-best-gadgets.jpg&w=1600&q=70",
"regular_price": "300",
"description": "The recently unveiled Sony Alpha A7R III stands to be one of the best mirrorless cameras ever made..",
"units_sold": "4",
"end_at":"2018-07-25T06:35:36.163Z",

},
{
"name": "Amazon Echo (second generation)",
"img_url": "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2017%2F11%2Famazon-echo-top-10-best-gadgets.jpg&w=1600&q=70",
"regular_price": "200",
"description": "Virtual assistants like Siri have been around for years, but it wasn’t until the first Amazon Echo launched in 2014 that voice-enabled gadgets really started to take off.",
"units_sold": "5",
"end_at":"2018-07-31T06:35:36.163Z",

},
{
"name": "Apple Watch 3",
"img_url": "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2017%2F11%2Fwatch_series_3_ceramic_newband-top-10-best-gadgets.jpg&w=1600&q=70",
"regular_price": "700",
"description": "It supports LTE, you can receive calls and texts on your wrist even when your phone is out of range.",
"units_sold": "8",
"end_at":"2018-07-28T06:35:36.163Z",
},
{
"name": "Apple iPhone X",
"img_url": "http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2012/03/logitech-webcam-hd-mac.jpg",
"regular_price": "1100",
"description": " the iPhone X’s edge-to-edge screen and facial recognition system will undoubtedly set a new standard for phones to come.",
"units_sold": "9",
"end_at":"2018-07-26T06:35:36.163Z",

},
{
"name": "Samsung Galaxy S8",
"img_url": "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2017%2F11%2Fsamsung-galaxy-s8-top-10-best-gadgets.jpg&w=1600&q=70",
"regular_price": "800",
"description": "It may have not been the first phone with a nearly borderless screen, but the Galaxy S8’s exquisitely curved display certainly made it the among most attractive phones of the year.",
"units_sold": "12",
"end_at":"2018-07-20T06:35:36.163Z",

},
      ]);
    });
};
