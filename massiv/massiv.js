
 

let menu = ['soup','pizza','caesar'];
let ingredientsSoup={
    ingredient1:('water'),
    ingredient2:('salt'),
    ingredient3:('potato')};
delete ingredientsSoup.ingredient2;
let priceSoup={
    purchasePrice:('5'),
    price:('8')
};
let ingredientsPizza={
    ingredient1:('dough'),
    ingredient2:('tomato'),
    ingredient3:('cheese')};
let pricePizza={
        purchasePrice:('4'),
        price:('10')};
let ingredientsCaesar={
        ingredient1:('crackers'),
        Ingredient2:('tomato'),
        ingredient3:('feta')};
let priceCaesar={
            purchasePrice:('4'),
            price:('9')};
alert(menu[0]);
alert(menu[1]);
alert(menu[2]);
menu.shift();
menu.unshift('soup');
let strExample= `посчитаем выгоду с единицы каждого проданого блюда 
за один проданный Soup мы получим ${8-5}
за одну проданную Pizza мы получим ${10-4}
за один проданный Caesar мы получим ${9-4}.`
console.log(menu);
console.log(ingredientsSoup);
console.log(priceSoup);
console.log(ingredientsPizza);
console.log(pricePizza);
console.log(ingredientsCaesar);
console.log(priceCaesar);
console.log(strExample);


