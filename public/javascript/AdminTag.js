function filterTag(keyword) {
  document.querySelectorAll("li.list-groupitem").forEach((item) => {
    let text = item.childNodes[1].childNodes[1].childNodes[1].innerText
      .substring(5)
      .toLowerCase();
    if (text.indexOf(keyword.toLowerCase()) >= 0) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
function openEditTag(id) {
  let form = document.getElementById(`editTagForm${id}`);
  form.style.display = "block";
}

function closeEditAndChangeTag(id) {
  let value = document.getElementById(`newTag${id}`).value;
  document.getElementById(`tag${id}`).innerText = `Tag: ${value}`;
  closeEditTag(id);
}

function closeEditTag(id) {
  document.getElementById(`editTagForm${id}`).style.display = "none";
}

// document.querySelectorAll(".delete").forEach((item) => {
//     item.addEventListener("click", (e) => {
//         if (confirm("Do you really want to remove this item?")) {
//             e.target.parentElement.parentElement.parentElement.remove();
//         }
//     });
// });

async function deleteTag(e, id) {
  e.preventDefault();
  if (confirm("Do you really want to remove this item?")) {
    console.log(123);

    let list = e.target.parentElement.parentElement.parentElement.parentElement;
    list.removeChild(list.firstElementChild);
    console.log(id);
    let details = {
      id: id,
    };
    await fetch("/admin/Tag/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(details),
    });
  }
}

function openAddTag() {
  let form = document.getElementById("addFormTag");
  form.style.display = "block";
}

function closeAddTag() {
  let form = document.getElementById("addFormTag");
  form.style.display = "none";
}

async function addItemTag(e) {
  e.preventDefault();
  let itemValue = document.getElementById("itemAdd");
  console.log(itemValue);
  let ul = document.getElementById("myTags");
  let li = document.createElement("li");
  li.className = "list-groupitem";

  let detail = {
    tag_name: itemValue.value,
  };
  let res = await fetch(`/admin/tag/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(detail),
  });
  let json = await res.json();
  let inner = `
        <div class="row align-items-center g-2 category-item">
        <div class="col-7">
            <p class="title-categories text-black"id="tag${json.id}">Tag: ${json.tag_name} </p>
        </div>
        <div class="col-5 button-div">
            <button class="btn btn-danger delete" onclick="deleteTag(event, ${json.id})">Xóa<i class="bi bi-trash-fill text-white"></i></button>
            <button class="btn btn-warning text-light" onclick="openEditTag(${json.id})">Sửa <i class="bi bi-pencil text-white"></i></button>
            <!-- The form -->
            <div class="form-popup" id="editTagForm${json.id}">
            <form action="/admin/Tag/edit" method="post" class="form-container" onclick="updateTag(event, ${json.id})">
                <button type="button" onclick="closeEditTag(${json.id})">x</button>
                <h3 class="text-center">Sửa tag</h3>
                <p class="text-center"> ${json.tag_name}</p>
                <label for="newTag${json.id}"><b>Nhập tên Tag mới</b></label>
                <input type="text" placeholder="" name="newTag${json.id}" id="newTag${json.id}" required />
                <button type="submit" class="btn btn-secondary" onclick="closeEditAndChangeTag(${json.id})">Sửa</button>
            </form>
            </div>
        </div>
        </div>
    `;
  li.innerHTML = inner;
  ul.insertBefore(li, ul.firstElementChild);
  closeAddTag();
}

async function updateTag(e, id) {
  e.preventDefault();
  console.log(id);
  let newName = document.getElementById(`newTag${id}`).value;
  let detail = {
    id: id,
    newName: newName,
  };
  await fetch(`/admin/Tag/edit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(detail),
  });
  closeEditTag(id);
}
