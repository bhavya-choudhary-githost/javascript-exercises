const sumAll = function(a, b) {
    if( Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0){
        if (a < b){
            result = [];
            for(let i = a; i <= b; i++){
                result.push(i);
            }
            const sum = result.reduce( (acc, item) => acc + item, 0);
            return sum;
        }

        else if (a > b){
            result = [];
            for(let i = b; i <= a; i++){
                result.push(i);
            }
            const sum = result.reduce( (acc, item) => acc + item, 0);
            return sum;
        }
        
        
        else{
            return a;
        }
    }

    else{
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
