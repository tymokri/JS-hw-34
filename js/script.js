'use strict';

const str = 'hello world';

const insertWordInto = (str) => {

    let index = 0;

    return function (str2) {

        const arrStr = str.split(' ');

        if(arrStr.length < index) index = 0;

        arrStr.splice(index, 0, str2);

        index += 1;

        return arrStr.join(' ');
    }
}

const newStr = insertWordInto(str);

const result1 = newStr('Odessa');
console.log(result1);

const result2 = newStr('Odessa2');
console.log(result2);

const result3 = newStr('Odessa3');
console.log(result3);

const result4 = newStr('Odessa4');
console.log(result4);