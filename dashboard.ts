export {};
let resultObject: {}[];
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
                    class="moveCI item "
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
                 class="" id="preview-icon-toggle-${item.id}"    />
              <img
                src="./assets/icons/manage course.svg"
                alt="manage-course-icon"
                id="manage-course-icon-toggle-${item.id}"
                 onClick="handler(event)"
                 class=""
              />
              <img
                src="./assets/icons/grade submissions.svg"
                alt="grade-submission-icon"
                id="grade-submission-icon-toggle-${item.id}"
                 onClick="handler(event)"
                 class=""
              />
              <img src="./assets/icons/reports.svg" alt="resports-icon"  onClick="handler(event)"
                 class=""  id="reports-icon-toggle-${item.id}"/>
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
