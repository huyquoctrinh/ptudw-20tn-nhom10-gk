async function extendReader(id){
    if (confirm("Bạn có chắc muốn gia hạn thêm cho người dùng này thêm 1 tuần?")){
        let details = {
            id: id,
        }
        let res = await fetch(`/admin/Premium/extend`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(details)
        })
        let json = await res.json();
        document.getElementById(`expireDate${id}`).innerText = json;
    }
}

function filterReader(keyword) {
    document
        .querySelectorAll("li.list-groupitem")
        .forEach((item) => {
            let text = item.childNodes[1].childNodes[1].childNodes[1].innerText;
            console.log(text);
            if (text.indexOf(keyword.toLowerCase()) >= 0 || text.indexOf(keyword.toUpperCase()) >= 0) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
}