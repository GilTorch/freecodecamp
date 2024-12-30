// Exercise: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update

function updateInventory(arr1, arr2) {
    
    const inventory = {};

    [...arr1,...arr2].forEach(item => {

        if(item[1] in inventory){
            inventory[item[1]] += item[0];
        } else {
            inventory[item[1]] =item[0];
        }
    })

    const inventory2DArray = [];

    Object.keys(inventory).forEach(item => {
        inventory2DArray.push([inventory[item], item])
    })

    inventory2DArray.sort((item1, item2) => item1[1].localeCompare(item2[1]));

    return inventory2DArray;
}