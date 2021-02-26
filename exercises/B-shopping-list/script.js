function shoppingList(shopList) {

  const content = document.querySelector("div");
  const randomList = document.createElement("ul");

  content.appendChild(randomList);
  shopList.forEach((element) => {

  let list = document.createElement("li");

  list.innerText = element;

  randomList.appendChild(list);
  })
  }


let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
