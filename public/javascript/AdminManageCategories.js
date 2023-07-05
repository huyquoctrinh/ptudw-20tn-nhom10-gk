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


document.querySelectorAll(".delete").forEach((item) => {
  item.addEventListener("click", (e) => {
    if (confirm("Do you really want to remove this item?")) {
      e.target.parentElement.parentElement.parentElement.remove();
    }
  });
});

async function deleteCategory(e, id){
  e.preventDefault();
  // e.target.parentElement.parentElement.parentElement.remove();
  // /Category/delete
  let details = {
    id: id
  }
  await fetch('/admin/Category/delete', {
    method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(details)
  });
}

function openAdd(){
    let form = document.getElementById("addForm");
    form.style.display = "block";
}

function closeAdd(e){
    let form = document.getElementById("addForm");
    form.style.display = "none";
}

async function addItemCategory(e, root_category_id=null){
    e.preventDefault();
    console.log(root_category_id);
    let form = e.target;
    let itemValue = form.querySelector('[name=itemAdd]');
    console.log(itemValue);
    if (itemValue.value.trim() == '') return;
    let ul = document.getElementById("myCategory");
    let li = document.createElement('li');
    li.className = "list-groupitem";
    let inner = `
    <div class="row align-items-center g-2 category-item">
      <div class="col-5">
        <p class="title-categories text-black">Chuyên mục: ${itemValue.value}</p>
      </div>
      <div class="col-7 button-div">
        <button class="btn btn-danger delete" onclick="deleteCategory(event,{{id}})">Xóa<i class="bi bi-trash-fill text-white"></i></button>
        <button class="btn btn-warning text-light" onclick="openEdit()">Sửa <i class="bi bi-pencil text-white"></i></button>
        <div class="form-popup" id="editForm">
          <form action="/admin/Category/edit" method="post" onclick="updateCategory(event, {{id}})" class="form-container">
            <button type="button" onclick="closeEdit()">x</button>
            <h3 class="text-center">Sửa chuyên mục</h3>
            <p class="text-center">${itemValue.value}</p>
            <label for="categories"><b>Nhập tên chuyên mục mới</b></label>
            <input type="text" placeholder="" name="categories" id="categories" required/>
            <button type="submit" class="btn btn-primary" onclick="closeEditAndChange(event)">Sửa</button>
          </form>
        </div>
      </div>
    </div>
    `
    li.innerHTML = inner;
    ul.insertBefore(li, ul.firstElementChild);

    let details = {
      category_name: itemValue.value,
      root_category_id: root_category_id,
    }
    await fetch('/admin/CategoriesDetail/add', {
      method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(details)
    });
    closeAdd();
}

function openEdit(id) {
  let form = document.getElementById(`editForm${id}`);
  form.style.display = "block";
}

function closeEditAndChange(id){
    // e.preventDefault()
    // let form = e.target;
    let value = document.getElementById(`newNameCategory${id}`).value
    console.log(value);
    document.getElementById(`Category${id}`).innerText = `Chuyên mục: ${value}`;
    closeEdit(id);
}

function closeEdit(id) {
  document.getElementById(`editForm${id}`).style.display = "none";
}

async function updateCategory(e, id){
  e.preventDefault();
  console.log(id);
  let newName = document.getElementById(`newNameCategory${id}`).value
  let detail = {
    id: id,
    newName: newName
  };
  await fetch(`/admin/Category/edit`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(detail)
  })
  closeEdit(id);
}

async function updateStatus(id, status, statusButtonId){
  
  let currentStatus = document.getElementById(statusButtonId).innerText;
  if (status == currentStatus) { return; }
  document.getElementById(statusButtonId).innerText = status;
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