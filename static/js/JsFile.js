const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    console.log(activePage);
    link.classList.add('active');

  }
})
const ColorChange=document.getElementById("logo1");

/*change the headeline backgroudn in bothpages*/
ColorChange.addEventListener("mouseover",function(){
  logo1.style.backgroundColor="Black";
  logo1.style.backgroundColor
  
},true);

ColorChange.addEventListener("mouseleave",function(){
  logo1.style.backgroundColor="#0082e6";
  
},true);


