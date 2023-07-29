function openLinks(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// const btn = document.querySelector(".togglemodes");
// const theme = document.querySelector("#theme-link");
// btn.addEventListener("click", function () 
// {
//   // Swap out the URL for the different stylesheets
//   if (theme.getAttribute("href") == "darkmode.css") 
//   {
//     setTimeout(() => {
      
//     theme.href = "lightmode.css"}, 100);
//   } else {
//     setTimeout(() => {
      
//       theme.href = "darkmode.css"}, 100);
//   }
// }); // hardcoded shit, unnecessary but will keep here
const btn = document.querySelector('.togglemodes');
const myImg = document.getElementById('me');
const theme = document.querySelector('body');
const intro = document.querySelector('#intro');
const second = document.getElementById('second');
const youtube = document.getElementById('yt');
const nickname = document.getElementById('nickname');
const projectcard = document.getElementById('project-card');
const tab = document.querySelectorAll('.tab');
const tabbBtn = document.querySelectorAll('.tab button');
const links = document.querySelectorAll('a');
let lightMode = false;
function changeMode()
{
  lightMode = !lightMode;
  if(lightMode == true)
  {
    theme.classList.toggle('lightmode');
    myImg.classList.toggle('lightmode');
    intro.classList.toggle('lightmode');
    second.classList.toggle('lightmode');
    youtube.classList.toggle('lightmode');
    nickname.classList.toggle('lightmode');
    projectcard.classList.toggle('lightmode');
    tab.forEach(entireTab => entireTab.classList.toggle('lightmode'));// doing this will select individual shits within that querySelectorAll.
    tabbBtn.forEach(tabbtn => tabbtn.classList.toggle('lightmode')); //JESUS FUCK I SPENT 2 HOURS ON THIS
    links.forEach(eachLink => eachLink.classList.toggle('lightmode'));
    lightMode = false;
  }

}
btn.addEventListener('click',changeMode);