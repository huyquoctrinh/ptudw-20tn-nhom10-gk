function openEditEditor(id) {
    let form = document.getElementById(`editEditorForm${id}`);
    form.style.display = "block";
}

function closeEditEditor(id){
    document.getElementById(`editEditorForm${id}`).style.display = "none";
}

async function updateCategoryForEditor(e, id){
    e.preventDefault();
    console.log(id);
    let newCategory = document.getElementById(`categoryEditor${id}`).value
    let detail = {
        id: id,
        newCategory: newCategory
    };
    await fetch(`/admin/Editor/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(detail)
    })
    closeEditEditor(id);
}

function closeEditAndChangeEditor(id){
    let value = document.getElementById(`categoryEditor${id}`).value;
    document.getElementById(`editorCategory${id}`).innerText = `Chuyên mục: ${value}`;
    closeEditEditor(id);
}