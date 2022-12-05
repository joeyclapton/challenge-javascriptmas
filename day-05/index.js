import products from "./data.js";

function getNewItems(oldItem) {
    const { item, price } = oldItem;
    
    return {
        item, 
        price
    };
}

function getSaleItems(data){
    const sweetItems = data.filter((item) => item.type === 'sweet');
    const newItems = sweetItems.map(getNewItems);
    
    return newItems;
};

const shoppingCart = getSaleItems(products);

console.log(shoppingCart);
