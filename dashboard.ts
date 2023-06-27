export {};

const cardContainer = document.querySelector(".cardC") as HTMLDivElement;

function doGetRequest() {
  fetch("http://localhost:3031/courses")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      const markup = `
       
        ${data
          .map((item: any) => {
            return `
          <div class="card" >
            <div class="${
              item.expired ? "expired" : "expired disable"
            } ">EXPIRED</div>
            <div class="cardI ${item.expired ? "expiredPadding" : ""}">
              <img src="./assets/images/${item.image}" alt="topic-image" />
              <div class="cardF">
                <div class="adjustStar">
                  <span class="titleFont item restrict">${item.title}</span>
                  <img
                    src="./assets/icons/favourite.svg"
                    alt="favourite-icon"
                    class="moveCI item fav"
                    id="favourite-icon-toggle-${item.id}"
                     onClick="favouriteHandler(event)"
                
                  />
                </div>
                <div class="subjectFont">
                  <span class="moveC">${
                    item.subject
                  }</span><span class="moveC">|</span
                  ><span>Grade ${item.grade}</span>
                </div>
               
                ${
                  item.units === 0 && item.lessons === 0 && item.topics === 0
                    ? ``
                    : `  <div>
                  <span class="subjectFont1">${item.units} </span
                  ><span class="subjectFont moveC">units</span
                  ><span class="subjectFont1">${item.lessons}</span>
                  <span class="subjectFont moveC">lessons</span
                  ><span class="subjectFont1">${item.topics}</span
                  ><span class="subjectFont"> topics</span>
                </div>`
                }
               
                <input
                  list="us_districts"
                  id="browser"
                  class="datal searchInputC"
                />
                <datalist id="us_districts">
                  <option value="Edgesdfa"></option>
                  <option value="Firefoxasdf"></option>
                  <option value="Chromeasdf"></option>
                  <option value="Operaafsd"></option>
                  <option value="Safarasfdasdfi"></option>
                </datalist>
                ${
                  item.students === 0
                    ? ``
                    : `<div>
                  <span class="subjectFont moveC">${item.students} students</span
                  ><span class="moveC">|</span
                  ><span class="subjectFont">${item.courseDuration}</span>
                </div>`
                }
               

              </div>
            </div>
               <div class="card2">
              <img src="./assets/icons/preview.svg" alt="preview-icon"  onClick="handler(event)"
                 class="preview" id="preview-icon-toggle-${item.id}"    />
              <img
                src="./assets/icons/manage course.svg"
                alt="manage-course-icon"
                id="manage-course-icon-toggle-${item.id}"
                 onClick="handler(event)"
                 class="manage-course"
              />
              <img
                src="./assets/icons/grade submissions.svg"
                alt="grade-submission-icon"
                id="grade-submission-icon-toggle-${item.id}"
                 onClick="handler(event)"
                 class="grade-submission"
              />
              <img src="./assets/icons/reports.svg" alt="reports-icon"  onClick="handler(event)"
                 class="report"  id="reports-icon-toggle-${item.id}"/>
            </div>
          </div>
         
        `;
          })
          .join("")} 
       `;

      cardContainer.innerHTML = markup;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

doGetRequest();
//for star icon
const handler = (event: MouseEvent) => {
  const imgElement = event.target as HTMLImageElement;
  imgElement.classList.toggle("disable-icon");
};
const favouriteHandler = (event: MouseEvent) => {
  const imgElement = event.target as HTMLImageElement;
  console.log(imgElement.src);
  if (imgElement.src == "http://127.0.0.1:5500/assets/icons/favourite.svg") {
    imgElement.src = "http://127.0.0.1:5500/assets/icons/favourite2.svg";
  } else {
    imgElement.src = "http://127.0.0.1:5500/assets/icons/favourite.svg";
  }
};
//for hamburger menu
const contentArrow = document.querySelector(".arrow-down") as HTMLImageElement;
const hamburgerContents = document.querySelector(
  ".ham-contents"
) as HTMLDivElement;
const content1 = document.querySelector(".content-1") as HTMLDivElement;
const courseCatalog = document.getElementById(
  "courseCatalog"
) as HTMLDivElement;
contentArrow.addEventListener("click", function (event: MouseEvent) {
  courseCatalog.classList.toggle("hide-content");

  contentArrow.classList.toggle("invert");
  hamburgerContents.classList.toggle("activep");
  content1.classList.toggle("activep");
});

const contentArrow1 = document.querySelector(
  ".arrow-down-1"
) as HTMLImageElement;
const hamburgerUsers = document.querySelector(".ham-users") as HTMLDivElement;

const users = document.querySelector(".users") as HTMLDivElement;
const users1 = document.querySelector(".users1") as HTMLDivElement;
const users2 = document.querySelector(".users2") as HTMLDivElement;
const users3 = document.querySelector(".users3") as HTMLDivElement;
contentArrow1.addEventListener("click", function (event: MouseEvent) {
  users.classList.toggle("hide-content");
  users1.classList.toggle("hide-content");
  users2.classList.toggle("hide-content");
  users3.classList.toggle("hide-content");
  contentArrow1.classList.toggle("invert");
  hamburgerUsers.classList.toggle("activep");
  users.classList.toggle("activep");
  users1.classList.toggle("activep");
  users2.classList.toggle("activep");
  users3.classList.toggle("activep");
});
const hamburgerReports = document.querySelector(
  ".ham-reports"
) as HTMLDivElement;
const contentArrow2 = document.querySelector(
  ".arrow-down-2"
) as HTMLImageElement;
const reports = document.querySelector(".reports") as HTMLDivElement;
const reports1 = document.querySelector(".reports1") as HTMLDivElement;
const reports2 = document.querySelector(".reports2") as HTMLDivElement;

contentArrow2.addEventListener("click", function (event: MouseEvent) {
  reports.classList.toggle("hide-content");
  reports1.classList.toggle("hide-content");
  reports2.classList.toggle("hide-content");
  reports.classList.toggle("activep");
  reports1.classList.toggle("activep");
  reports2.classList.toggle("activep");
  hamburgerReports.classList.toggle("activep");
  contentArrow2.classList.toggle("invert");
});
const hamburgerAdmin = document.querySelector(".ham-admin") as HTMLDivElement;
const contentArrow3 = document.querySelector(
  ".arrow-down-3"
) as HTMLImageElement;
const dummy = document.querySelector(".dummy") as HTMLDivElement;
const dummy1 = document.querySelector(".dummy1") as HTMLDivElement;

contentArrow3.addEventListener("click", function (event: MouseEvent) {
  dummy.classList.toggle("hide-content");
  dummy1.classList.toggle("hide-content");
  dummy.classList.toggle("activep");
  dummy1.classList.toggle("activep");
  hamburgerAdmin.classList.toggle("activep");
  contentArrow3.classList.toggle("invert");
});
