const categoriesList = document.querySelector("ul#categories");

const items = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const subItems = item.querySelectorAll("li");

  console.log(`Category: ${title}\nElements: ${subItems.length}`);
});
