function openReject(id) {
    document.getElementById(`rejectform${id}`).style.display = 'block';
}

function closeReject(id){
    document.getElementById(`rejectform${id}`).style.display = "none";
}

function openApprove(id){
    document.getElementById(`approveForm${id}`).style.display = 'block';
}

function closeApprove(id){
    document.getElementById(`approveForm${id}`).style.display = "none";
}

async function updateRejectReason(e, id) {
    e.preventDefault();
    console.log(id);
    let reason = document.getElementById(`reason${id}`).value;
    console.log(reason);
    let detail = {
        reason: reason,
        id: id
    }
    let res = await fetch('/users/editorReject', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(detail)
    });
    let json = await res.json();
    if (json.status == 'ok'){
        document.getElementById(`approveBtn${id}`).style.display = "none";
        document.getElementById(`rejectBtn${id}`).disabled = true;
    }
    closeReject(id);
}

async function approve(e, statusId, articleId){
    e.preventDefault();
    let tag = document.getElementById(`tag${statusId}`).value;
    let category = document.getElementById(`category${statusId}`).value;
    let pubDay = document.getElementById(`pubDay${statusId}`).value;
    console.log(statusId);
    console.log(articleId);
    console.log(pubDay);
    let details = {
        tag: tag,
        category: category,
        statusId: statusId,
        articleId: articleId,
        pubDay: pubDay
    }
    let res = await fetch('/users/editorApprove', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(details)
    });
    let json = await res.json();
    if (json.status == 'ok'){
        document.getElementById(`rejectBtn${statusId}`).style.display = "none";
        document.getElementById(`approveBtn${statusId}`).disabled = true;
    }

}

function filterEditor(keyword) {
    document
        .querySelectorAll("li.list-groupitem")
        .forEach((item) => {
            let text = item.childNodes[1].childNodes[3].childNodes[1].childNodes[1].innerText.toLowerCase();
            if (text.indexOf(keyword.toLowerCase()) >= 0) {
                item.style.display = "block"; 
            } else {
                item.style.display = "none"; 
            }
        });  
}