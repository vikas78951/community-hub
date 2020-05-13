//////////////////////
//NAVBAR FUNCTION
/////////////////////
// nav responsive button
let nav = document.querySelector('nav');
let nav_mask = document.querySelector('.nav_mask');

const my_button = document.querySelector(".responsive_nav_button");
const nav_bar = document.querySelector(".Nav_link_container");
const nav_bar_links = document.querySelectorAll(".Nav_link_container li");

  my_button.addEventListener('click',()=>{

    nav_bar.classList.toggle("open_nav");
    nav_bar_links.forEach(link =>{
      link.classList.toggle("fade_in")
    })

});

function sizing(){
  var width = window.outerWidth;
  if(width > 500){
      nav_bar.classList.remove("open_nav");
  }
}

scrollEvents = () => {
  if(window.pageYOffset > 0)
  {
    let nav = document.querySelector('nav');
    nav.style.height="50px";
    nav_mask.style.height="50px";

  }
  else{
    nav.style.height="10vh";
    nav_mask.style.height="10vh";
  }

}
window.addEventListener('scroll',scrollEvents);


////////////////////
// INCLUDING FILE
///////////////////
function include_file(){
  var i , elements ,file , xhttp;
  elements = document.getElementsByTagName("*");
  for (i=0 ; i< elements.length ; i++){
    element = elements[i];
    file = element.getAttribute("myfile");
    if(file)
    {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange=function(){
        if(this.readyState == 4){
          if(this.status == 200){ element.innerHTML = this.responseText;}
          if(this.status == 404){element.innerHTML = "page not found";}
        }
      }
      xhttp.open("GET",file,true);
      xhttp.send();
      return;
    }

  }

}
