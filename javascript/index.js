// Thêm class "dropdown-submenu" vào các menu có submenu
// document.querySelectorAll(".dropdown-menu").forEach(function (element) {
//   if (element.querySelector(".dropdown-menu")) {
//     element.parentNode.classList.add("dropdown-submenu");
//   }
// });

// Bật submenu khi click vào dropdown menu
document.querySelectorAll(".dropdown-submenu > a").forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      var subMenu = this.nextElementSibling;
      if (subMenu.classList.contains("show")) {
        subMenu.classList.remove("show");
        subMenu.parentElement.classList.remove("show");
      } else {
        subMenu.classList.add("show");
        subMenu.parentElement.classList.add("show");
      }
    });
  });
  // =================================================================================================================================
  
  // Lấy API Key từ trang web NewsAPI
  // const apiKey = "4faaaecb29ed418585c2dc5ca0799025";
  // window.onload = function () {
  //   // Tạo yêu cầu Fetch API
  //   fetch(
  //     `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`
  //   )
  //     .then((response) => response.json()) // chuyển đổi phản hồi sang JSON
  //     .then((data) => {
  //       // lấy danh sách các bài báo mới nhất từ phản hồi JSON
  //       const articles = data.articles;
  
  //       // lặp qua danh sách các bài báo và thêm chúng vào carousel
  //       const carouselInner = document.querySelector(".carousel-inner");
  //       let active = true;
  //       for (let i = 0; i < articles.length; i++) {
  //         const article = articles[i];
  //         const item = document.createElement("div");
  //         item.classList.add("carousel-item");
  //         if (active) {
  //           item.classList.add("active");
  //           active = false;
  //         }
  //         item.innerHTML = `
  //         <div class="row">
  //           <div class="col-md-1"></div>
  //           <div class="col-md-5">
  //             <img
  //               src="${article.urlToImage}"
  //               class="d-block w-100"
  //               alt="${article.title}"
  //             />
  //           </div>
  //           <div class="col-md-5">
  //             <h4>${article.title}</h4>
  //             <p>${article.description}</p>
  //             <div class="row">
  //               <div class="col-10 text-secondary">
  //                 <b><i>${article.source.name}</i></b>
  //               </div>
  //               <div class="col-2 text-secondary">
  //                 <b><i>${new Date(
  //                   article.publishedAt
  //                 ).toLocaleDateString()}</i></b>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       `;
  //         carouselInner.appendChild(item);
  //       }
  //     })
  //     .catch((error) => console.log(error)); // xử lý lỗi (nếu có)
  // };
  
  // const form = document.querySelector("#searchForm");
  // const newsList = document.querySelector("#newsList");
  
  // form.addEventListener("submit", async (event) => {
  //   event.preventDefault(); // prevent form submission
  
  //   const query = document.querySelector("#newsQuery").value;
  
  //   const response = await fetch(
  //     `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
  //   );
  
  //   const data = await response.json();
  
  //   // clear previous search results
  //   newsList.innerHTML = "";
  
  //   // display news articles on the page
  //   data.articles.forEach((article) => {
  //     const card = document.createElement("div");
  //     card.classList.add("col-12", "col-md-6", "col-lg-4", "mb-4");
  //     card.innerHTML = `
  //     <div class="card h-100">
  //     <img src="${article.urlToImage}" class="card-img-top" alt="${article.title}">
  //     <div class="card-body">
  //       <h5 class="card-title">${article.title}</h5>
  //       // <p class="card-text">${article.description}</p>
  //       <p class="card-text"><small class="text-muted">${article.publishedAt}</small></p>
  //       <p class="card-text"><small class="text-muted">${article.source.name}</small></p>
  //     </div>
  //   </div>
  // `;
  //     newsList.appendChild(card);
  //   });
  // });
  







  
  // const searchBtn = document.getElementById("searchBtn");
  // const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";
  // const newsType = document.getElementById("newsType");
  // const newsQuery = document.getElementById("newsQuery");
  
  // searchBtn.addEventListener("click", function () {
  //   newsType.innerHTML = "<h4>Search : " + newsQuery.value + "</h4>";
  //   fetchQueryNews();
  // });
  
  // const fetchQueryNews = async () => {
  //   if (newsQuery.value == null) return;
  
  //   const response = await fetch(
  //     SEARCH_NEWS + encodeURIComponent(newsQuery.value) + "&apiKey=" + apiKey
  //   );
  //   newsDataArr = [];
  //   if (response.status >= 200 && response.status < 300) {
  //     const myJson = await response.json();
  //     newsDataArr = myJson.articles;
  //   } else {
  //     //error handle
  //     console.log(response.status, response.statusText);
  //     newsdetails.innerHTML = "<h5>No data found.</h5>";
  //     return;
  //   }
  
  //   displayNews();
  // };
  
  // const newsdetails = document.getElementById("newsdetails");
  // var newsDataArr = [];
  // function displayNews() {
  //   newsdetails.innerHTML = "";
  
  //   newsDataArr.forEach((news) => {
  //     var date = news.publishedAt.split("T");
  
  //     var col = document.createElement("div");
  //     col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";
  
  //     var card = document.createElement("div");
  //     card.className = "p-2";
  
  //     var image = document.createElement("img");
  //     image.setAttribute("height", "matchparent");
  //     image.setAttribute("width", "100%");
  //     image.src = news.urlToImage;
  
  //     var cardBody = document.createElement("div");
  
  //     var newsHeading = document.createElement("h5");
  //     newsHeading.className = "card-title";
  //     newsHeading.innerHTML = news.title;
  
  //     var dateHeading = document.createElement("h6");
  //     dateHeading.className = "text-primary";
  //     dateHeading.innerHTML = date[0];
  
  //     var discription = document.createElement("p");
  //     discription.className = "text-muted";
  //     discription.innerHTML = news.description;
  
  //     var link = document.createElement("a");
  //     link.className = "btn btn-dark";
  //     link.setAttribute("target", "_blank");
  //     link.href = news.url;
  //     link.innerHTML = "Read more";
  
  //     cardBody.appendChild(newsHeading);
  //     cardBody.appendChild(dateHeading);
  //     cardBody.appendChild(discription);
  //     cardBody.appendChild(link);
  
  //     card.appendChild(image);
  //     card.appendChild(cardBody);
  
  //     col.appendChild(card);
  
  //     newsdetails.appendChild(col);
  //   });
  // }
  