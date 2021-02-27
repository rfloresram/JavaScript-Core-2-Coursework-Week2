function todoList(todos) {

 let ulFun = document.createElement("ul");

  for (let i = 0; i < todos.length; i++) {
    let liFun = document.createElement("li");
    let liTextFun = document.createTextNode(todos[i].todo)

    liFun.style.textDecorationLine = "none";
    liFun.appendChild(liTextFun);
    ulFun.appendChild(liFun);
    liFun.addEventListener("click", function () {

      let textDecoration = liFun.style.textDecorationLine;
      if (textDecoration === "none")
      {
        
        liFun.style.textDecorationLine = "line-through";
      }else if (textDecoration === "line-through")
        liFun.style.textDecorationLine = "none";

})
  }

  let contentElement = document.getElementById("content");
  contentElement.appendChild(ulFun);
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);