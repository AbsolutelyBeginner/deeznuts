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
  
  const btn = document.querySelector(".togglemodes");
  const theme = document.querySelector("#theme-link");
  btn.addEventListener("click", function () 
  {
    // Swap out the URL for the different stylesheets
    if (theme.getAttribute("href") == "darkmode.css") 
    {
      setTimeout(() => {
        
      theme.href = "lightmode.css"}, 100);
    } else {
      setTimeout(() => {
        
        theme.href = "darkmode.css"}, 100);
    }
  }); 