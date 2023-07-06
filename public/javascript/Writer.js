function filterPost(keyword){
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