console.log(`There are ${characters.length} characters in the array.`);

// function aNames(arr){
//     let names= Object.values(arr['name'])
//     console.log(names)
//     // names.forEach(function(el){
//     //   if el[0] == "A" {
//     //     console.log(el);
//     //     }
//     // });
// 
// function aNames(arr){
// emptyList = []
// arr.name.forEach(function(letter){
//     if (letter== "A"){
//         emptyList.push(name)
//     }

// })
// return emptyList 
// }

// console.log(aNames(characters));

// function aNames(charsDict) {
//     let charList = []
//     charsDict.forEach(function(names){
//         if (names.name[0]== "A"){
//             charList.push(names.name);
//         }
//     })
//     return charList.length
// }

// console.log(` ${aNames(characters)} have names that start with a`)

// function zNames(charsDict) {
//     let charList = []
//     charsDict.forEach(function(names){
//         if (names.name[0]== "Z"){
//             charList.push(names.name);
//         }
//     })
//     return charList.length
// }

// console.log(`${zNames(characters)} have names that start with z`)

// function areDead(charsDict) {
//     let deadCharList = []
//     charsDict.forEach(function(chars){
//         if (chars.died.length >= 1) {
//             deadCharList.push(chars.died)
//         }
//     });
//     return deadCharList.length;
// }
// console.log(areDead(characters));

// function mostTitles(charsDict) {
//     let mostTitilesArray = []
//     charsDict.forEach(function(chars) {
//         chars.titles.sort(function(a,b){
//             return a.titles-b.titles
//         })
//     })
//     return a.titles-b.titles

// };
// console.log(mostTitles(characters));

// function sortByTitles(arr) {
//     arr.sort(function(a,b){
//         return a.titles.length - b.titles.length
//     });
//     return arr[arr.length-1]
// }
// console.log(sortByTitles(characters));

// function sortByCulture(charsDict) {
//     valyrianArray = []
//     charsDict.forEach(function(chars){
//         if (chars.culture == "Valyrian") {
//             valyrianArray.push(chars.culture)
//         };
//     });
//     return valyrianArray.length
// };
// console.log(`There are ${sortByCulture(characters)} Valyrian characters in GOT`);

function findHotPie(charsDict) {
    charsDict.forEach(function(chars){
        if (chars.name == "Hot Pie") {
            console.log(chars.playedBy)
        };
    });
};

findHotPie(characters)