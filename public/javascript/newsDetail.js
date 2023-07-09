
async function addItem(e) {
    e.preventDefault();

    let form = e.target;

    let details = {
        comment: form.querySelector('[name=comment]').value,
        article_id: form.querySelector('[name=article_id]').value,
        user_id: form.querySelector('[name=user_id]').value,
    }

    let res = await fetch('/newsDetail/comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(details)
    })

    let json = await res.json();

    let itemValue = document.getElementById("comment");
    let ul = document.getElementById("myList");
    let li = document.createElement("li");
    li.className = "list-groupitem comment-item";
    let divRow = document.createElement("div");
    divRow.className = "row";
    let divColLeft = document.createElement("div");
    divColLeft.className = "col-3";
    let pName = document.createElement("p");
    pName.className="pName";
    pName.innerText = `${json.name}`;
    divColLeft.appendChild(pName);

    let divColRight = document.createElement("div");
    divColRight.className = "col-9";
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

function demoFromHTML() {
    var pdf = new jsPDF();
    source = document.getElementById('newspdf');

    console.log(source); 
    pdf.fromHTML(source, 15, 15, {'width' : 100},
    function(doc) { pdf.save('test.pdf')}
    );
}
