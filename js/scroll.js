function Scroll(){
  var scaleY = window.pageYOffset;
  document.getElementById("scale").innerHTML = scaleY;

   //////////////
   //FUNCTION
   //////////////
   var section1 = document.querySelector("#section1")
   var section2 = document.querySelector("#section2")
   var section3 = document.querySelector("#section3")
   var section4 = document.querySelector("#section4")
   var section5 = document.querySelector("#section5")
   var sectionlist = document.querySelector(".sectionlist")

   if(scaleY > 775 && scaleY < 1957){
     sectionlist.classList.add("section_fixed")
   }

   else{
     sectionlist.classList.remove("section_fixed");
   }
   if(scaleY > 1957){
    sectionlist.style.top = "1166px"
   }
   else{
     sectionlist.style.top = "0px"

   }

   /////////
   //active links
   /////////

   var links = document.querySelectorAll(".sectionlist ul li");
   console.log(links[0]+'a'.textContent)
   // document.getElementsByTagName(links[1]+" a").classList.add("section_active");

 }

window.addEventListener('scroll',Scroll);
