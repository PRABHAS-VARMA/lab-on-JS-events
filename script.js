//challenge 1
window.onload = function() {
  var spanUser = document.getElementById("user")
  spanUser.innerHTML= "Prabhas Varma"
};

//challenge 2
  window.onclick= function(){
  var button = document.getElementById("btn-click")
  if(button){
  button.style.backgroundColor = "green"}}
//challenge 3
  function makeSentence() {
    // Get the values of the input elements
    var noun = document.getElementById("noun").value;
    var verb = document.getElementById("verb").value;
    var adverb = document.getElementById("adverb").value;

    // Create the sentence
    var sentence = noun + " " + verb + " " + adverb;

    // Display the sentence in the "statement" div
    var statementDiv = document.getElementById("statement");
    statementDiv.innerHTML = sentence;
}
  // Add an event listener to the button
  var buildButton = document.getElementById("build-button");
  buildButton.addEventListener("click", makeSentence);

//challenge 4.1
  var grandparent = document.getElementById("grandparent");
  // Add a click event listener to the "grandparent" div
  grandparent.addEventListener("click", function() {
    // Print "Grandparent clicked" to the console
    console.log("Grandparent clicked")});

  var parent = document.getElementById("parent");
  // Add a click event listener to the "parent" div
  parent.addEventListener("click", function() {
      // Print "Grandparent clicked" to the console
      console.log("Parent clicked")});  
      
  var parent = document.getElementById("child");
  // Add a click event listener to the "child" div
  child.addEventListener("click", function() {
      // Print "Grandparent clicked" to the console
      console.log("Child clicked")});  

//challenge 4.2
    // Add a click event listener to the "grandparent" div
    grandparent.addEventListener("click", function() {
      // Print "Grandparent clicked" to the console
      console.log("Grandparent clicked")},true);

    // Add a click event listener to the "parent" div
    parent.addEventListener("click", function() {
      // Print "Grandparent clicked" to the console
      console.log("Parent clicked")},true);  
      
    // Add a click event listener to the "child" div
    child.addEventListener("click", function() {
      // Print "Grandparent clicked" to the console
      console.log("Child clicked")},true);  

//challenge 5
    const blazers = document.getElementById("category");

    // Add a click event listener to the "category" ul
    blazers.addEventListener("click", function(event) {
        // Check if the clicked element has the id "blazers"
        if (event.target.id === "blazers") {
            // Print "blazers" to the console
            console.log("blazers");  }
          });
