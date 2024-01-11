// ADD NEW ITEM TO END OF LIST
var ul = document.querySelector("ul");
var newEndItem = document.createElement("li");
var endItemText = document.createTextNode("Milk");
newEndItem.appendChild(endItemText);
ul.appendChild(newEndItem);

// ADD NEW ITEM START OF LIST
var newStartItem = document.createElement("li");
var startItemText = document.createTextNode("Eggs");
newStartItem.appendChild(startItemText);
ul.insertBefore(newStartItem, ul.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.querySelectorAll("li");
listItems.forEach(function(item) {
  item.classList.add("cool");
});

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var itemCount = listItems.length;
var header = document.querySelector("h2");
header.innerHTML += " (" + itemCount + " items)";