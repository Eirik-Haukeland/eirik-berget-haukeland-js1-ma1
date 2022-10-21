/* eslint-disable no-console */
/* eslint-disable quotes */
const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1
const cat = {
  complain: () => {
    console.log("Meow!");
  },
};

cat.complain();

// Question 2
const heading = document.querySelector("h3");

heading.innerText = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList += "subheading";

// Question 5

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((element) => {
  // eslint-disable-next-line no-param-reassign
  element.style.color = "red";
});

// Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7

const loopList = (list) => {
  list.forEach((element) => {
    console.log(element.name);
  });
};

loopList(cats);

// Question 8

// eslint-disable-next-line no-shadow
const createCats = (cats) => {
  const catHtmlArray = [];

  cats.forEach((element) => {
    const catInfoDiv = document.createElement("div");
    const catInfoHeader = document.createElement("h5");
    catInfoHeader.innerText = element.name;
    catInfoDiv.append(catInfoHeader);

    const catInfoAge = document.createElement("p");
    if (element.age) {
      catInfoAge.innerText = `Age: ${element.age}`;
    } else {
      catInfoAge.innerText = "Age: unknown";
    }
    catInfoDiv.append(catInfoAge);
    catHtmlArray.push(catInfoDiv);
  });
  return catHtmlArray;
};

const catContainer = document.querySelector(".cat-container");

const htmlcats = createCats(cats);
htmlcats.forEach((element) => {
  catContainer.append(element);
});
