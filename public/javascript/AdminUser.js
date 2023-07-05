async function updateUser(id, role, roleButtonId){
  
    let currentrole = document.getElementById(roleButtonId).innerText;
    if (currentrole == 'Đã đăng ký') currentrole = "reader";
    else if (currentrole == 'Người viết bài') currentrole = "writer";
    else if (currentrole == 'Biên tập viên') currentrole = "editor";
    else if (currentrole == 'Admin') currentrole = "admin"
    if (role == currentrole) { return; }
    let res = role;
    if (role == 'reader') res = "Đã đăng ký";
    else if (role == 'writer') res = "Người viết bài";
    else if (role == 'editor') res = "Biên tập viên";
    else if (role == 'admin') res = "Admin"
    document.getElementById(roleButtonId).innerText = res;
    let details = {
        id: id,
        role: role,
        oldRole: currentrole
    }
    await fetch(`/admin/User/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(details)
    })
}

function filterUser(keyword) {
    document
        .querySelectorAll("li.list-groupitem")
        .forEach((item) => {
            let text = item.childNodes[1].childNodes[1].childNodes[1].innerText;
            if (text.indexOf(keyword.toLowerCase()) >= 0 || text.indexOf(keyword.toUpperCase()) >= 0) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
}