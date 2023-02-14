const menu=['udon','barbecue','rice'];
let udon = {
ingredient:('noodles','seafood'),
price0:"10"};
delete udon.seafood;
let barbecue = {
    ingredient:('beef','spices'),
    price1:"8"
};
let rice = {
    ingredient:('rice','diversity'),
    price2:"7"
};
let purchase0 = 5;
let purchase1 = 3;
let purchase2 = 2;
let numExample0 = 10-5;
let numExample1 = 8-3;
let numExample2 = 7-2;
let strExample1 = `закупочная цена первого блюда menu ${purchase0} 
если продавать по указанной в меню цене , то прибыль составит ${numExample0}`
let strExample2 = `закупочная цена второго блюда menu ${purchase1} 
если продавать по указанной в меню цене , то прибыль составит ${numExample1}`
let strExample3 = `закупочная цена второго блюда menu ${purchase2} 
если продавать по указанной в меню цене , то прибыль составит ${numExample2}`
alert(udon[0]);
alert(barbecue[1]);
alert(rice[2]);
menu.shift
menu.unshift
menu.pop(rice)
menu.pop(barbecue)
console.log(menu)
console.log(udon)
console.log(barbecue)
console.log(rice)
console.log(strExample1)
console.log(strExample2)
console.log(strExample3)


