const scrollButton = document.querySelector(".scrollBtn");

function showScrollBtn(){
  if(window.scrollY > 394){
  scrollButton.style.display = "block";
  }
  else{
  scrollButton.style.display = "none";
  };
};

window.onscroll = showScrollBtn;