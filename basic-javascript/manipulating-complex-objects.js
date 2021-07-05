/*Manipulating Complex Objects */
/*
Sometimes you may want to store data in a flexible Data Structure.
A JavaScript object is one way to handle flexible data. 
They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.
Objects hold data in a property, which has a key-value format. 
 JavaScript Object Notation or JSON is a related data interchange format used to store data.
*/
/*Add a new album to the myMusic array. 
 *Add artist and title strings, release_year number, and a formats array of strings. */

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Kanye West",
    "title": "Graduation",
    "release_year": 2003,
    "formats": [
      "CD",
      "iTunes",
      "LP",
      "Vinyl"
    ],
    "platinum": true 
  }
];