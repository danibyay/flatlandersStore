(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });
  app.controller("PanelController", function(){
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: ' This is a very cool gem, buy it right now',
      image: 'x.png',
      canPurchase: true,
      soldOut: false,
      specifications: "This is why a gem can be very specific",
      reviews: "There are no reviews yet for this gem, yem, yum"
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      image: 'w.png' ,
      description: ' This is a very cool gem, buy it right now',
      canPurchase: true,
      soldOut: false,
      specifications: "This is why a gem can be very specific",
      reviews: "There are no reviews yet for this gem, yem, yum"


    },
    {
      name: 'Zaphire',
      price: 10.99,
      image: 'z.png' ,
      description: ' This is a very cool gem, buy it right now',
      canPurchase: true,
      soldOut: false,
      specifications: "This is why a gem can be very specific",
      reviews: "There are no reviews yet for this gem, yem, yum"


    },
    {
      name: 'Not a Ruby',
      price: 8,
      image: 'y.png' ,
      description: ' This is a very cool gem, buy it right now',
      canPurchase: true,
      soldOut: true,
      specifications: "This is why a gem can be very specific",
      reviews: "There are no reviews yet for this gem, yem, yum"


    }


  ];


})();
//immediately invoked function
//that wraps the whole module
