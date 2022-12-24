const item = document.getElementById("write-task");

var list = document.getElementById("list");

item.addEventListener("keyup", function (event) {
  //console.log(event.key);

  if (event.key == "Enter") {
    addToDoItem(this.value);
      this.value = "";
  }
});



function addToDoItem(itemData) {
  // console.log(itemData);

  var listItem = document.createElement("li");

  listItem.innerHTML = `
   ${itemData}
  <i class="fas fa-times"></i>
`;

  listItem.addEventListener("click", function () {
    listItem.classList.toggle("done");
  });

  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });

  list.appendChild(listItem);

  //console.log(itemData);
}
