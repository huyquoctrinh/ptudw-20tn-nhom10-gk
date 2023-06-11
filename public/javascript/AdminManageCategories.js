function filter(keyword) {
  document
    .querySelectorAll("li.list-groupitem")
    .forEach((item) => {
      if (item.innerText.indexOf(keyword) >= 0) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
}
function openEdit() {
    let form = document.getElementById("myForm");
    form.style.display = "block";
}

function closeEditAndChange(e){
    e.preventDefault()
    let value = document.getElementById("categories").value
    console.log(e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild)
    e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.innerText = `Chuyên mục: ${value}`
    document.getElementById("myForm").style.display = "none";
}

function closeEdit() {
    document.getElementById("myForm").style.display = "none";
}


document.querySelectorAll(".delete").forEach((item) => {
item.addEventListener("click", (e) => {
  if (confirm("Do you really want to remove this item?")) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
});
});

function openAdd(){
    let form = document.getElementById("addForm");
    form.style.display = "block";
}

function closeAdd(){
    let form = document.getElementById("addForm");
    form.style.display = "none";
    
}

function addItem(e){
    e.preventDefault();
    let itemValue = document.getElementById('itemAdd');
    console.log(itemValue)
    let ul = document.getElementById("myList");
    let li = document.createElement('li');
    li.className = 'list-groupitem';
    let inner = `
        <div class="row align-items-center g-2 category-item">
            <div class="col-7">
                <p class="title-categories text-black" id="title-categories">Tag: ${itemValue.value} </p>
            </div>
            <div class="col-5 button-div">
                <button class="btn btn-danger delete">Xóa <i class="bi bi-trash-fill"></i></button>
                <button class="btn btn-warning text-light" onclick="openEdit()">Sửa <i class="bi bi-pencil"></i></button>
                <!-- The form -->
                    <div class="form-popup" id="myForm" onsubmit="closeEdit()">
                    <form action="" method="post" class="form-container" >
                        <button type="button" onclick="closeEdit()" >x</button>
                        <h3 class="text-center">Sửa tag</h3>
                        <p class="text-center">${itemValue.value}</p>
                        <label for="categories"><b>Nhập tên Tag mới</b></label>
                        <input type="text" placeholder="" name="categories" id="categories"required>
                        <button type="submit" class="btn btn-primary" onclick="closeEdit()">Sửa</button>
                    </form>
                    </div>
                    
            </div>
        </div>
    `
    li.innerHTML = inner;
    ul.insertBefore(li, ul.firstElementChild);
    closeAdd()
}

async function updateStatus(id, status){
  
  let currentStatus = document.getElementById(`articleStatus${id}`).innerText;
  if (status == currentStatus) { return; }
  document.getElementById(`articleStatus${id}`).innerText = status;
  let details = {
    id: id,
    status: status
  }
  await fetch(`/admin/AdminViewAllPost/update`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(details)
  }).then(() => {
    console.log(123);
    console.log(status);
  })
}

function filter(keyword) {
  console.log(keyword);
  document
    .querySelectorAll("li.list-groupitem")
    .forEach((item) => {
      let title = item.childNodes[3].firstChild.text
      if (title.indexOf(keyword) >= 0) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
}