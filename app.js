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
      images: [
          {
            full: 'x.png',
            thumb:'y.png'
          }
      ],
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      images: [
          {
            full: 'w.png',
            thumb:'z.png'
          }
      ],
      description: ' This is a very cool gem, buy it right now',
      canPurchase: true,
      soldOut: true
    }


  ];


})();
//immediately invoked function
//that wraps the whole module
