export {};

const cardContainer = document.querySelector(".cardC") as HTMLDivElement;
interface cardData {
  id: number;
  title: string;
  image: string;
  subject: string;
  grade: string;
  units: number;
  lessons: number;
  topics: number;
  students: number;
  courseDuration: string;
  expired: boolean;
}
function doGetRequest() {
  fetch("http://localhost:3031/courses")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data: cardData[]) => {
      console.log(data);

      const markup = data.map((item: cardData) => {
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
          </div>`;
      });
      const combinedMarkup = markup.join("");
      cardContainer.innerHTML = combinedMarkup;
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

//for content dropdown
const contentArrow = document.querySelector(".arrow-down") as HTMLImageElement;
const hamburgerContents = document.querySelector(
  ".ham-contents"
) as HTMLDivElement;
const content: NodeListOf<Element> = document.querySelectorAll(".content-1");

contentArrow.addEventListener("click", function (event: MouseEvent) {
  content.forEach((element: Element, index: number) => {
    content[index].classList.toggle("hide-content");
    content[index].classList.toggle("activep");
  });

  contentArrow.classList.toggle("invert");
  hamburgerContents.classList.toggle("activep");
});

//for users dropdown
const contentArrow1 = document.querySelector(
  ".arrow-down-1"
) as HTMLImageElement;
const hamburgerUsers = document.querySelector(".ham-users") as HTMLDivElement;

const users: NodeListOf<Element> = document.querySelectorAll(".users");

contentArrow1.addEventListener("click", function (event: MouseEvent) {
  users.forEach((element: Element, index: number) => {
    users[index].classList.toggle("hide-content");
    users[index].classList.toggle("activep");
  });

  contentArrow1.classList.toggle("invert");
  hamburgerUsers.classList.toggle("activep");
});
//for reports dropdown
const hamburgerReports = document.querySelector(
  ".ham-reports"
) as HTMLDivElement;
const contentArrow2 = document.querySelector(
  ".arrow-down-2"
) as HTMLImageElement;
const reports: NodeListOf<Element> = document.querySelectorAll(".reports");

contentArrow2.addEventListener("click", function (event: MouseEvent) {
  reports.forEach((element: Element, index: number) => {
    reports[index].classList.toggle("hide-content");
    reports[index].classList.toggle("activep");
  });
  hamburgerReports.classList.toggle("activep");
  contentArrow2.classList.toggle("invert");
});

// for dummy dropdown
const hamburgerAdmin = document.querySelector(".ham-admin") as HTMLDivElement;
const contentArrow3 = document.querySelector(
  ".arrow-down-3"
) as HTMLImageElement;

const dummy: NodeListOf<Element> = document.querySelectorAll(".dummy");
contentArrow3.addEventListener("click", function (event: MouseEvent) {
  dummy.forEach((element: Element, index: number) => {
    dummy[index].classList.toggle("hide-content");

    dummy[index].classList.toggle("activep");
  });
  hamburgerAdmin.classList.toggle("activep");
  contentArrow3.classList.toggle("invert");
});

const alertMenuDropdown = document.querySelector(
  ".alert-menu-dropdown"
) as HTMLDivElement;

const alertContainer = document.querySelector(
  ".alert-container"
) as HTMLDivElement;

alertContainer.addEventListener("mouseover", function () {
  console.log("over");

  alertMenuDropdown.style.minWidth = "315px";
  alertMenuDropdown.style.minHeight = " 584px";
  alertMenuDropdown.style.maxHeight = " 584px";
  alertMenuDropdown.style.maxWidth = "315px";
  alertMenuDropdown.style.opacity = "1";
  alertMenuDropdown.style.visibility = "visible";
  alertMenuDropdown.style.transform = "translateY(0);";
  alertMenuDropdown.style.zIndex = "10";
});
alertContainer.addEventListener("mouseout", function () {
  console.log("mouseout");

  alertMenuDropdown.style.minWidth = "0";
  alertMenuDropdown.style.minHeight = "0";
  alertMenuDropdown.style.maxHeight = "0";
  alertMenuDropdown.style.maxWidth = "0";

  alertMenuDropdown.style.opacity = "0";
  alertMenuDropdown.style.visibility = "hidden";
  alertMenuDropdown.style.transform = "translateY(-3em);";
  alertMenuDropdown.style.zIndex = "-1";
});

const announcementMenuDropdown = document.querySelector(
  ".announcement-menu-dropdown"
) as HTMLDivElement;

const announcementContainer = document.querySelector(
  ".announcement-container"
) as HTMLDivElement;

announcementContainer.addEventListener("mouseover", function () {
  console.log("over");

  announcementMenuDropdown.style.minWidth = "315px";
  announcementMenuDropdown.style.minHeight = " 584px";
  announcementMenuDropdown.style.maxHeight = " 584px";
  announcementMenuDropdown.style.maxWidth = "315px";
  announcementMenuDropdown.style.opacity = "1";
  announcementMenuDropdown.style.visibility = "visible";
  announcementMenuDropdown.style.transform = "translateY(0);";
  announcementMenuDropdown.style.zIndex = "10";
});
announcementContainer.addEventListener("mouseout", function () {
  console.log("mouseout");

  announcementMenuDropdown.style.minWidth = "0";
  announcementMenuDropdown.style.minHeight = "0";
  announcementMenuDropdown.style.maxHeight = "0";
  announcementMenuDropdown.style.maxWidth = "0";

  announcementMenuDropdown.style.opacity = "0";
  announcementMenuDropdown.style.visibility = "hidden";
  announcementMenuDropdown.style.transform = "translateY(-3em);";
  announcementMenuDropdown.style.zIndex = "-1";
});
const hamburgerMenuDropdown = document.querySelector(
  ".hamburger-menu-dropdown"
) as HTMLDivElement;

const hamburgerContainer = document.querySelector(
  ".hamburger-container"
) as HTMLDivElement;

hamburgerContainer.addEventListener("mouseover", function () {
  console.log("over");

  hamburgerMenuDropdown.style.minWidth = "200px";
  hamburgerMenuDropdown.style.minHeight = "auto";
  hamburgerMenuDropdown.style.maxHeight = "900px";
  hamburgerMenuDropdown.style.maxWidth = "280px";
  hamburgerMenuDropdown.style.opacity = "1";
  hamburgerMenuDropdown.style.visibility = "visible";
  hamburgerMenuDropdown.style.transform = "translateY(0);";
  hamburgerMenuDropdown.style.zIndex = "10";
});
hamburgerContainer.addEventListener("mouseout", function () {
  console.log("mouseout");

  hamburgerMenuDropdown.style.minWidth = "0";
  hamburgerMenuDropdown.style.minHeight = "0";
  hamburgerMenuDropdown.style.maxHeight = "0";
  hamburgerMenuDropdown.style.maxWidth = "0";

  hamburgerMenuDropdown.style.opacity = "0";
  hamburgerMenuDropdown.style.visibility = "hidden";
  hamburgerMenuDropdown.style.transform = "translateY(-3em);";
  hamburgerMenuDropdown.style.zIndex = "-1";
});
