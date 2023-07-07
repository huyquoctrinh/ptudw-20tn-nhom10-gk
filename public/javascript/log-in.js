const dropdown = document.getElementById("dropdown");
const submitBtn = document.getElementById("submit-btn");

dropdown.addEventListener("change", function () {
  const selectedOption = dropdown.options[dropdown.selectedIndex].value;
  console.log(selectedOption);
});

submitBtn.addEventListener("click", function () {
  const selectedOption = dropdown.options[dropdown.selectedIndex].value;
  saveToDatabase(selectedOption);
});

const saveToDatabase = async (selectedOption) => {
  try {
    const response = await fetch("/save-role", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: selectedOption }),
    });
    const data = await response.json();
    console.log(data);
    // Thực hiện các hành động sau khi lưu vào cơ sở dữ liệu
    // Ví dụ: chuyển hướng đến trang thành công, hiển thị thông báo, vv.
  } catch (error) {
    console.error("Error saving to database:", error);
    // Xử lý lỗi khi lưu xuống cơ sở dữ liệu
    // Ví dụ: hiển thị thông báo lỗi, vv.
  }
};
