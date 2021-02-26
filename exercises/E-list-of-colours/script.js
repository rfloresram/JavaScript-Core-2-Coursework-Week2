function listOfColours(colours) {

    let contentFun = document.querySelector("#content");
 
  let h3Fun = document.createElement("h3");
  h3Fun.innerText = "Please, select a Color!";
  contentFun.appendChild(h3Fun);

  let funElement = document.createElement("select");
  contentFun.appendChild(funElement);

  let pElement = document.createElement("p");
  contentFun.appendChild(pElement);

  colours.forEach((colour) => {
    let optionElement = document.createElement("option");
    optionElement.value= colour;
    optionElement.innerText = colour;
    funElement.appendChild(optionElement);

  })

  funElement.addEventListener("change", pFunction);
    function pFunction(e) {
      pElement.innerText = `You choose color ${e.target.value}`;
      pElement.style.color = e.target.value;
    }
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
