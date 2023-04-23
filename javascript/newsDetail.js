

function addItem(e) {
    e.preventDefault();
    let itemValue = document.getElementById("comment");
    let ul = document.getElementById("myList");
    let li = document.createElement("li");
    li.className = "list-groupitem comment-item";
    let divRow = document.createElement("div");
    divRow.className = "row";
    let divColLeft = document.createElement("div");
    divColLeft.className = "col-2";
    let pName = document.createElement("p");
    pName.className="pName";
    pName.innerText = "Nguyen Van A"
    divColLeft.appendChild(pName);

    let divColRight = document.createElement("div");
    divColRight.className = "col-10";
    let pComment = document.createElement("p");
    pComment.className = "pComment";
    pComment.innerText = itemValue.value;
    
    const d = new Date();
    let time = `${d.getHours()}:${d.getMinutes()} ${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
    let pTime = document.createElement("p");
    pTime.className = "pTime"
    pTime.innerText = time;

    divColRight.appendChild(pComment);
    divColRight.appendChild(pTime);
    divRow.appendChild(divColLeft);
    divRow.appendChild(divColRight);
    li.appendChild(divRow);
    ul.insertBefore(li, ul.firstElementChild);
    itemValue.value = "";
}