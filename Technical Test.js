'use strict'

const fetch = require('node-fetch')

function arrayModification(array) {
    let value = [];

    array.forEach(num => {
        (num % 2 === 0) ? value.push(num * 2) : value.push(num * 3);
    });

    return value;
};

function isFibo(number) { 
    // let value = false
    // let fibonancciTemp = []
    // let lower = 0;
    // while (!value) {
    //     if(fibonancciTemp.length < 2) fibonancciTemp.push(lower) && lower ++
    //     else fibonancciTemp.push(fibonancciTemp[fibonancciTemp.length - 1] + fibonancciTemp[fibonancciTemp.length - 2]);

    //     if(fibonancciTemp[fibonancciTemp.length - 1] == number) value = true;
    //     else if(fibonancciTemp[fibonancciTemp.length - 1] > number) break;
    // }
    // return value;

    let value = false;
    let highest = 1;
    let lowest = 0;

    while (!value) {
        let temp = 0;
        temp = highest + lowest;
        lowest = highest;
        highest = temp;

        if(highest === number) value = true;
        else if(highest > number) break;
    }

    return value;
};

function groupWord(animals) {
    let result = [];
    let temp = [];

    animals.forEach(animal => {
        let newGroup = [];
        let sortedWordOfAnimal = animal.split("").sort().join("");

        animals.forEach(animal2 => {
            let sortedWordOfAnimal2 = animal2.split("").sort().join("");
            if(sortedWordOfAnimal === sortedWordOfAnimal2) newGroup.push(animal2);
        });

        if(!temp.includes(sortedWordOfAnimal)) result.push(newGroup) && temp.push(sortedWordOfAnimal);
    });

    return result;
};

function linkAja(array) {
    let value = [];

    array.forEach(num => {
        if(num % 3 == 0 && num % 7 == 0) value.push("Link Aja");
        else if(num % 7 == 0) value.push("Aja");
        else if(num % 3 == 0) value.push("Link");
        else value.push(num);
    });

    return value.join("\n");
};

async function asyncronus() {
    const result = [];
    await fetch( "https://api.jikan.moe/v3/search/anime?q=Naruto" )
        .then(response => {
            return response.json();
        }).then(data => {
            let temp = data.results;
            temp.forEach(value => {
                if (value.score > 7.8) {
                    result.push({
                        title: value.title,
                        type: value.type,
                        synopsis: value.synopsis,
                        score: value.score,
                        year: new Date(value.start_date).getFullYear()
                    });
                };
            });
        }).catch(err => {
            console.log(err);
        })
        console.log(result);
};

var number1 = [1, 2, 3, 4, 5];
var number3 = ["katak", "takak", "kasur", "rusak", "surak", "foo",  "bar"];
var number4 = [23, 2, 45, 98, 27, 4,28, 8, 30, 70, 16, 15, 21, 14, 42];

// CODING TEST 1
console.log(`==========\n NOMOR 1\n==========`)
console.log(arrayModification(number1));

// CODING TEST 2
console.log(`\n==========\n NOMOR 2\n==========`)
console.log(isFibo(8));
console.log(isFibo(9));

// CODING TEST 3
console.log(`\n==========\n NOMOR 3\n==========`)
console.log(groupWord(number3));

// CODING TEST 4
console.log(`\n==========\n NOMOR 4\n==========`)
console.log(linkAja(number4));

// CODING TEST 5
console.log(`\n==========\n NOMOR 5\n==========`)
asyncronus()