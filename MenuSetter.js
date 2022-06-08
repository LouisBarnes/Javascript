const menu = {
  _meal: '',
  _price: 0,

  set meal(mealToCheck) {
    if(typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    }
  },

  set price(priceToCheck) {
    if(typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
    }
  },

  get todaysSpecial(){
    if(this._meal && this._price){
      return `Today's special is ${this._meal} for £${this._price}!`
    } else {
      return 'Meal or price was not set correctly!'
    }
  }
};

//Set your specials for the day below.
menu.meal = 'Pizza';
menu.price = 20;

console.log(menu.todaysSpecial)