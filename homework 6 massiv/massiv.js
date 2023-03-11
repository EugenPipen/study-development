
 
//Несколько обьектов и описание
let Soup={
 dish:"Суп",
ingredients:{
    water:100,
    salt:10,
    potato:30,},
};
let Pizza={
    dish:"Пицца",
    ingredients:{
    dough:30,
    tomato:50,
    cheese:40},
};
let Caesar={
    dish:"Цезарь",
        ingredients:{
        crackers:10,
        tomato:30,
        feta:50},
};
//Массив из обьектов
let menu = [Soup,Pizza,Caesar];
alert(`Созданный массив из объектов для меню: ${JSON.stringify(menu)}`);
//Удалить один обьект из массива
menu.splice(1,1);
alert(`Удалили одно блюдо из меню: ${JSON.stringify(menu)}`);
//Добавить этот блюдо обратно на первое место, но уберать один из ингредиентов
delete Soup.ingredients.potato;
menu.unshift(Soup);
alert(`Добавили обратно блюдо, которое удалили но без одного ингредиента: ${JSON.stringify(menu)}`);
//указать закупочную цену и цену продажи
menu.forEach(function (element) {
    switch  (element.dish ) {
        case "Суп":
            element.price = 300;
            element.purchasePrice = 500;
            break;
        case "Пицца":
            element.price = 400;
            element.purchasePrice = 500;
            break;
        case "Цезарь":
            element.price = 200;
            element.purchasePrice = 300;
            break;
            default:
                alert("Error");
        }
    });
    alert(`Добавили каджому блюду в меню по новым параметрам(цена и время приготовления): ${JSON.stringify(menu)}`);
//Посчитать прибыль с каждого блюда
let sum =  Soup.price-Soup.purchasePrice+Pizza.price-Pizza.purchasePrice+Caesar.price-Caesar.purchasePrice
alert(`Сумма заказа: ${sum} $`);
//удалить все элементы из массива кроме одного
menu.splice(1);
alert(`Меню после удаления всех элементов корме одного: ${JSON.stringify(menu)}`);


