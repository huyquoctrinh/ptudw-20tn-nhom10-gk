import { jsPDF } from "jspdf";

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
    var pdf = new jsPDF('p', 'pt', 'letter');
    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    source = document.getElementById('news-pdf')[0];

    // we support special element handlers. Register them with jQuery-style 
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors 
    // (class, of compound) at this time.
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#bypassme': function (element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true
        }
    };
    margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522
    };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
        source, // HTML string or DOM elem ref.
        margins.left, // x coord
        margins.top, { // y coord
            'width': margins.width, // max width of content on PDF
            'elementHandlers': specialElementHandlers
        },

        function (dispose) {
            // dispose: object with X, Y of the last line add to the PDF 
            //          this allow the insertion of new lines after html
            pdf.save('Test.pdf');
        }, margins
    );
}