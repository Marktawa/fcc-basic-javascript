/* Accessing Nested Objects */

/* Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.*/

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

/* Using Bracket Notation */
/* var gloveBoxContents = myStorage["car"]["inside"]["glove box"]; */

/* Using Dot Notation */
var gloveBoxContents = myStorage.car.inside["glove box"];

