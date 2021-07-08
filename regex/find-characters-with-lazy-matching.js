// Find Characters with Lazy Matching
// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>"

let text = "<h1>Winter is coming</h1>";
let myRegex = /<h.*?>/; // Change this line
let result = text.match(myRegex);