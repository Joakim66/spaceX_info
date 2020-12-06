const url = "https://api.spacexdata.com/v3/history";

const section = document.getElementById("info-section");

const historyContainer = document.querySelector(".history-info");

async function getHistory(){
  try{
    const response = await fetch(url);

    const historyResults = await response.json();

    section.classList.add("backgroundBottom");
    
    historyContainer.innerHTML = "";

    for(let i = 0; i < historyResults.length; i++){
      historyContainer.innerHTML += 
      `
      <div class="historyItem">
        <time datetime="${historyResults[i].event_date_utc}">${historyResults[i].event_date_utc.slice(0,10)}</time>
        <div class="historyContent">
          <h2>${historyResults[i].title}</h2>
          <p>${historyResults[i].details}</p>
          <a href="${historyResults[i].links.article}" class="whiteBtn">Learn more</a>
          <a href="${historyResults[i].links.wikipedia}" class="whiteBtn">Wikipedia article</a>
        </div>
      </div>
      `
    };
  }
  catch(error) {
    historyContainer.innerHTML = `<div>An error occured.</div>`
  };
};

getHistory();