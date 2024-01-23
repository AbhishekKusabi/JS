const Marvel_hero = [ "thor", "Ironman","Spiderman"]
const Dc_hero = ["Superman", "Flash"]

// Marvel_hero.push(Dc_hero)

// console.log(Marvel_hero);
// console.log(Marvel_hero[3][0]);

//  const all_heros= Marvel_hero.concat(Dc_hero)
// console.log(all_heros);

const all_new_heros=[...Marvel_hero,...Dc_hero]

// console.log(all_new_heros);

const anotherArr = [1, 2, 3, 4, [5, 6, 7,], 8, [9, 10,[5, 6]]]


const real_another_arr = anotherArr.flat(Infinity)
// console.log(real_another_arr);

// console.log(Array.isArray("abhi"));
// console.log(Array.from("abhi"));
// console.log(Array.from({name : "Abhi"})); // note (Intereesting)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
