var btnAdd = document.getElementById("btn_add");
btnAdd.addEventListener("click", function () {
  var data = document.querySelector("#input").value;
  var input = document.getElementById('input')
  if (data === "") {
    alert("You have to write something.");
  } 
  else {
    var list = "";
    list = `
        <li class="ul-list">
            <h1 id="todovalue">${data}</h1>
            <button class="btn_done"><i class="fa-solid fa-check"></i></button>
            <button class="btn_del"><i class="fa-solid fa-trash"></i></button>
        </li>
        `
        input.value = ''

    var ul = (document.querySelector("#list").innerHTML += list);
    
    btnDel = document.querySelectorAll(".btn_del");
    for (var btn of btnDel) {
      btn.addEventListener("click", function () {
        this.parentElement.remove();
      });
    }

    btnDone = document.querySelectorAll(".btn_done");
    for (var btnD of btnDone) {
      btnD.addEventListener("click", function () {
        this.previousElementSibling.classList.toggle("active");
      });
    }
  }
});
