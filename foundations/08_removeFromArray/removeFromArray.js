const removeFromArray = function(array, ...rem) {
    result = [];
    for(let item of array){
        if(!rem.includes(item)){
            result.push(item);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
