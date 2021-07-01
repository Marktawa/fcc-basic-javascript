/* Accessing Nested Arrays */

/* Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object. */

var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

/* Using Bracket Notation
var secondTree = myPlants[1]["list"][1];
console.log(secondTree); */

/*Using Dot Notation */
var secondTree = myPlants[1].list[1];