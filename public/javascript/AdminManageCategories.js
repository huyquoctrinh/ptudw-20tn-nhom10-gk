document.querySelectorAll(".delete").forEach((item) => {
  item.addEventListener("click", (e) => {
    if (confirm("Do you really want to remove this item?")) {
      e.target.parentElement.parentElement.parentElement.remove();
    }
  });
});

async function deleteCategory(e, id) {
  e.preventDefault();
  let details = {
    id: id,
  };
  await fetch("/admin/Category/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(details),
  });
}

function openAdd() {
  let form = document.getElementById("addForm");
  form.style.display = "block";
}

function closeAdd(e) {
  let form = document.getElementById("addForm");
  form.style.display = "none";
}

async function addItemCategory(e, root_category_id = null) {
  e.preventDefault();
  console.log(root_category_id);
  let form = e.target;
  let itemValue = form.querySelector("[name=itemAdd]");
  console.log(itemValue);
  if (itemValue.value.trim() == "") return;
  let ul = document.getElementById("myCategory");
  let li = document.createElement("li");
  li.className = "list-groupitem";
  let details = {
    category_name: itemValue.value,
    root_category_id: root_category_id,
  };
  let res = await fetch("/admin/CategoriesDetail/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(details),
  });
  let json = await res.json();
  let inner = `
    <div class="row align-items-center g-2 category-item">
      <div class="col-5">
        <p class="title-categories text-black" id="Category${json.id}>Chuyên mục: ${itemValue.value}</p>
      </div>
      <div class="col-7 button-div">
        <button class="btn btn-danger delete" onclick="deleteCategory(event,${json.id})">Xóa<i class="bi bi-trash-fill text-white"></i></button>
        <button class="btn btn-warning text-light" onclick="openEdit(${json.id})">Sửa <i class="bi bi-pencil text-white"></i></button>
        <div class="form-popup" id="editForm${json.id}">
          <form action="/admin/Category/edit" method="post" onclick="updateCategory(event, ${json.id})" class="form-container">
            <button type="button" onclick="closeEdit(${json.id})">x</button>
            <h3 class="text-center">Sửa chuyên mục</h3>
            <p class="text-center">${itemValue.value}</p>
            <label for="newNameCategory${json.id}"><b>Nhập tên chuyên mục mới</b></label>
            <input type="text" placeholder="" name="newNameCategory${json.id}" id="newNameCategory${json.id}" required/>
            <button type="submit" class="btn btn-secondary" onclick="closeEditAndChange(${json.id})">Sửa</button>
          </form>
        </div>
      </div>
    </div>
    `;
  li.innerHTML = inner;
  ul.insertBefore(li, ul.firstElementChild);

  closeAdd();
}

function openEdit(id) {
  let form = document.getElementById(`editForm${id}`);
  form.style.display = "block";
}

function closeEditAndChange(id) {
  // e.preventDefault()
  // let form = e.target;
  let value = document.getElementById(`newNameCategory${id}`).value;
  console.log(value);
  document.getElementById(`Category${id}`).innerText = `Chuyên mục: ${value}`;
  closeEdit(id);
}

function closeEdit(id) {
  document.getElementById(`editForm${id}`).style.display = "none";
}

async function updateCategory(e, id) {
  e.preventDefault();
  console.log(id);
  let newName = document.getElementById(`newNameCategory${id}`).value;
  let detail = {
    id: id,
    newName: newName,
  };
  await fetch(`/admin/Category/edit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(detail),
  });
  closeEdit(id);
}

async function updateStatus(id, status, statusButtonId) {
  let currentStatus = document.getElementById(statusButtonId).innerText;
  if (status == currentStatus) {
    return;
  }
  document.getElementById(statusButtonId).innerText = status;
  let details = {
    id: id,
    status: status,
  };
  await fetch(`/admin/AdminViewAllPost/update`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(details),
  }).then(() => {
    console.log(123);
    console.log(status);
  });
}

function filter(keyword) {
  document.querySelectorAll("li.list-groupitem").forEach((item) => {
    let title = item.childNodes[1].childNodes[1].childNodes[1].innerText
      .substring(12)
      .toLowerCase();
    if (title.indexOf(keyword.toLowerCase()) >= 0) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
