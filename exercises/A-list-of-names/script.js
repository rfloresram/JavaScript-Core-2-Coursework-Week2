function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  arrayOfPeople.forEach((people) => {
    
    let nameH1 = document.createElement("h1");
    nameH1.innerText = people.name;
    let nameH2 = document.createElement("h2");
    nameH2.innerText = people.job;
    content.appendChild(nameH1);
    content.appendChild(nameH2);
  })

}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
