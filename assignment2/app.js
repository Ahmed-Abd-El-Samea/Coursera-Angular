(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var tbctrl = this;
	tbctrl.toBuyItems = ShoppingListCheckOffService.getItems();
	tbctrl.remove = function(index){
		ShoppingListCheckOffService.moveToBought(index);
	};
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var alrbctrl = this;
	alrbctrl.boughtitems = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
	var service = this;
		var boughtItems = [];
		var items = [
			{
    			name: "Milk",
    			quantity: "2"
  			},
			{
			  	name: "Donuts",
			 	quantity: "200"
		 	},
			{
		      	name: "Cookies",
		      	quantity: "300"
		    },
			{
			  	name: "Chocolate",
			  	quantity: "5"
		    },
		    {
		    	name: "Pepto Bismol",
		    	quantity: "100"
		    }
		];
		this.getBoughtItems = function(){
			return boughtItems;
		};
		this.getItems = function(){
			return items;
		};
		this.moveToBought = function(idx){
			var x = items.splice(idx,1);
			var it = {};
			it['name'] = x[0].name;
			it['quantity'] = x[0].quantity;
			boughtItems.push(it);
			// console.log(x[idx].name);
		};
}

})();
