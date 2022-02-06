/*
  You may use the following animals array to test your functions inside of this file. This is the same array of animals that is used in the tests.
  
  To run this file, remember that you can run `node index.js` from the command line. You will need to be in the directory where the `index.js` file is kept for the above command to work.

  Finally, remember that in order for you to see output on the command line, you must log something out.
*/
const animals = [
  { kind: "Pig", count: 5 },
  { kind: "Cow", count: 7 },
  { kind: "Chicken", count: 11 },
  { kind: "Horse", count: 1 },
  { kind: "Dog", count: 2 },
  { kind: "Cat", count: 2 },
];

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Adds up the `count` key of each animal in the array and returns a total.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {number} The total of all animal counts.
 *
 * EXAMPLE
 * ------------------
 * getTotalCount(animals); //> 28
 * getTotalCount([]); //> 0 // returns 0 if the input array is empty
 */
function getTotalCount(animals){ 
//should return a total of all animal cobjects count values  
//set a variable for an accumulator 
  let animalCount = 0;
//set up a loop to iterate over the ANIMALS array 
  for(let obj of animals) {
    //inside the loop we need to aADD out animal.count value to the total
    animalCount += obj.count

  }
  //when the loop is finished return the total
  return animalCount;
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the `kind` for each object from the inputted array.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {string[]} An array of strings, where each string is a kind of animal.
 *
 * EXAMPLE
 * ------------------
 * getAllKinds(animals); //> ["Pig", "Cow", "Chicken", "Horse", "Dog", "Cat"]
 * getAllKinds([]); //> [] // returns empty array if input array is empty
 */

//creates a function that returns the kind from the inputted array of ANIMALS
function getAllKinds(animals) {
  //create a variable called kindArr to equal an empty array
  let kindArr = [];
  //for of loop through the array ANIMALS
  for(let obj of animals) {
    //for each animal in the ANIMALS array push the kind of animal into the empty array called kindArr
    kindArr.push(obj.kind)
  }
  //return the new array with all kind of aninals from the ANIMALS array
  return kindArr;
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns all objects inside the given array where the `count` of an animal is equal to or greater than the `minimum` amount.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @param {number} minimum - The lowest count of animals to include.
 * @returns {Object[]} An array of objects, which represents all animals that have a count equal to or greater than the minimum.
 *
 * EXAMPLE
 * ------------------
 * filterByCountMinimum(animals, 5); //> [
    { kind: "Pig", count: 5 },
    { kind: "Cow", count: 7 },
    { kind: "Chicken", count: 11 },
  ];
 * filterByCountMinimum([], 3); //> [] // returns empty array if input array is empty
 */
function filterByCountMinimum(animals = newAnimals, minimum = 5) {
  // let minObj = [];
  // for(let obj of animals) {
  //   if(animals[obj].count >= minimum) {
  //     //minimum = 5;
  //     minObj.push(animals[obj])
  //   //} else if 
  //    // (obj.count >= 5) {
  //     //  minObj.push(obj.count)
      
  //   }
  // }
  // return minObj;

  let enoughAnimals = [];
  for (let i = 0; i > animals.length; i++){
    if (animals[i].count >= minimum) {
      enoughAnimals.push(animals[i]);
    }
  }
  return enoughAnimals;
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the object with the highest `count`. If more than one object shares the same highest `count`, return the first one.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {Object} The object which represents the animal with the highest count.
 *
 * EXAMPLE
 * ------------------
 * getMostCommonAnimal(animals); //> { kind: "Chicken", count: 11 }
 * getMostCommonAnimal([]); //> null // returns null if the input is empty
 *///CHECK THE EXAMPLE AND TEST INFORMATION 
function getMostCommonAnimal(animals) {
  if (animals.length < 1){
    return null;
  }
  let highestSoFar = animals[0];
  for (let i = 1; i < animals.length; i++) {
      if (animals[i].count > highestSoFar.count) {

        highestSoFar = animals[i];
      }
  }
  // let firstHigh = 0;
  // for(let obj of animals){
  //   if(animals[obj] > firstHigh){
  //     firstHigh.push(animals[obj])
  //   } 
      
  //   }
  return highestSoFar;
  //   return firstHigh;
  }


// Do not change anything below this line.
module.exports = {
  getTotalCount,
  getAllKinds,
  filterByCountMinimum,
  getMostCommonAnimal,
};
