(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: ' This is a very cool gem, buy it right now',
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: ' This is a very cool gem, buy it right now',
      canPurchase: true,
      soldOut: true
    }


  ];


})();
//immediately invoked function
//that wraps the whole module
