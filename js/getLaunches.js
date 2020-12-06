const url = "https://api.spacexdata.com/v3/launches";
const section = document.getElementById("info-section");
const launchesContainer = document.querySelector(".launches-info");

async function getLaunches(){
  try{
    const response = await fetch(url);
    const launchesResults = await response.json();
    section.classList.add("backgroundBottom");
    launchesContainer.innerHTML = "";

    for(let i = 0; i < launchesResults.length; i++){
      let missionPatch = launchesResults[i].links.mission_patch_small;
      let missionAlt = "Mission emblem/patch.";
      let missionDetails = launchesResults[i].details;
      let youtubeLink = launchesResults[i].links.video_link;
      let youtubeLinkTrue = "";
      let wikipediaLink = launchesResults[i].links.wikipedia;
      let wikipediaLinkTrue = "";

      if(missionPatch === null){
        missionPatch = "assets/svg/img_missing.svg"
        missionAlt = "No image available."
      };
      if(missionDetails === null){
        missionDetails = "No description available."
      };
      if (youtubeLink !== null){
        youtubeLinkTrue = `<a href="${youtubeLink}" class="whiteBtn">YouTube video</a>`
      };
      if (wikipediaLink !== null){
        wikipediaLinkTrue = `<a href="${wikipediaLink}" class="whiteBtn">Wikipedia article</a>`
      };
      
      launchesContainer.innerHTML += 
      `
      <div class="launchItem">
        <time datetime="${launchesResults[i].launch_date_utc}">${launchesResults[i].launch_date_utc.slice(0,10)}</time>
        <div class="launchImageCenterizer">
          <img class="launchImg" src="${missionPatch}" alt="${missionAlt}"></img>
        </div>
        <div class="launchItemContent">
          <h2>MISSION: ${launchesResults[i].mission_name}</h2>
          <h3>ROCKET: ${launchesResults[i].rocket.rocket_name}</h3>
          <p>${missionDetails}</p>
          ${youtubeLinkTrue}
          ${wikipediaLinkTrue}
        </div>
      </div>
      `
    };
  }
  catch(error) {
    launchesContainer.innerHTML = `<div>An error occured.</div>`
  };
};
getLaunches();