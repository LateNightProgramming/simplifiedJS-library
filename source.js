//simplified JS

function random(min,max) {
    return Math.random() * max + min;
}

function randInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}

// console.log() equivalents

function output(item) {
    print(item);
}

function write(item) {
    print(item);
}

function log(item) {
    print(item);   
}

function display(item) {
    print(item);
}

function print(item) {
    if (typeof(item) === typeof([])) {
        let evalString = "console.log("
        for (let i = 0; i < item.length; i++) {
            if (evalString === "console.log(") {
                evalString+="item[" + String(i) + "]";
            } else {
                evalString+=",item[" + String(i) + "]";
            }
        }
        evalString+=")";
        eval(evalString);
    } else {
        console.log(item);
    }
}

// end 

function randChoice(item) {
    return item[Math.floor(Math.random() * array.length+1)];
}

// \n equivalents

function newLine() {
    return "\n";
}

function endLine() {
    return "\n";
}

// end

function len(item) {
    return item.length;
}

function getRandBits(amount) {
    if (amount === 1) {
        return Math.floor(Math.random() * 2);
    } else {
        let arr = [];
        for (let i = 0; i < amount; i++) {
            arr.push(Math.floor(Math.random() * 2));
        }
        return arr;
    }
}

function bool(item) {
    if (item === 0) {
        return false;
    } else if (item === 1) {
        return true
    } else {
        throw new Error();
    }
}

function roundDown(item) {
    return Math.floor(item);
}
 
function roundUp(item) {
    return Math.ceil(item);
}

function randBool() {
    return [true,false][Math.floor(Math.random() * 2)];
}

function type(item) {
    return typeof(item);
}

function str(item) {
    return String(item);
}

function int(item) {
    if (isNaN(Number(item))) {
        throw new Error();
    } else {
        return Math.floor(Number(item));
    }
}

function num(item) {
    if (isNaN(Number(item))) {
        throw new Error();
    } else {
        return Number(item);
    }
}

function isEven(item) {
    if (item % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isOdd(item) {
    if (item % 2 !== 1) {
        return true;
    } else {
        return false;
    }
}

function square(item) {
    return Math.pow(item,2)
}

function declare(name,item) {
    eval(name + " = function() {" + item + "}");
}

function isEmpty(item) {
    if (isNaN(item) || item === undefined || item === null) {
        return true;
    } else {
        return false;
    }
}
