// 1
console.log(hello);                                   
var hello = 'world';     

    // var hello = undefined;
    // console.log(hello);                                   
    // hello = 'world';     


// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

    // var needle = 'haystack';
    // test(){
    //     var needle = 'magnet';
    //     console.log(needle);
    // }

// 3
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// var needle = 'haystack';
// test(){
//     var needle = 'magnet';
//     console.log(needle);log magnet
// }

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}


// var food = 'chicken';
// console.log(food);
// eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food); log half-chicken
//     food = 'gone';
// }

// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// var mean;
// mean();type error
// console.log(food); if the error above fixed this will give unkown error
// var mean = function() {
//     var food
//     food = "chicken";
//     console.log(food);log food
//     food = "fish";
//     console.log(food); log fish
// }
// console.log(food); error again
//the program will stop at first line and won't continue after the first line

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre;
// console.log(genre); log undefined
// genre = "disco";
// rewind() {
//     var genre
//     genre = "rock";
//     console.log(genre);log rock
//     genre = "r&b";
//     console.log(genre); log r&b
// }
// console.log(genre);log disco

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// var dojo = "san jose";
// console.log(dojo); log san jose
// learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);log seattle
//     dojo = "burbank";
//     console.log(dojo); log burbank
// }
// console.log(dojo);log san jose


// 8 Bonus
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}


// console.log(
//     makeDojo("Chicago", 65){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
//     }
// ); log {name:Chicago,studens:65,hiring:true}
// console.log(makeDojo("Berkeley", 0){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now"; Type error and the programe stop 
//     }
//     return dojo;
// });
