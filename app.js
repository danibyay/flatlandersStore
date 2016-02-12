(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: ' This is a very cool gem, buy it right now',
      image: 'x.png',
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      image: 'w.png' ,
      description: ' This is a very cool gem, buy it right now',
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Zaphire',
      price: 10.99,
      image: 'z.png' ,
      description: ' This is a very cool gem, buy it right now',
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Not a Ruby',
      price: 8,
      image: 'y.png' ,
      description: ' This is a very cool gem, buy it right now',
      canPurchase: true,
      soldOut: true
    }


  ];


})();
//immediately invoked function
//that wraps the whole module
