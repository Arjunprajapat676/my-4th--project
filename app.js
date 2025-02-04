const Element= document.querySelector('.image');
const Sidebar= document.querySelector('.sidebar');

if(Element){
   Element.addEventListener('click', function(){
      Element.style.marginLeft="-400px";
      Sidebar.style.marginLeft="-400px";

      console.log("clicked on image");
   });
} else{
   console.error('Element not found');
}
const body=document.getElementsByTagName('body');
const All= document.querySelector('.All');
function openSidebar(){
   Sidebar.style.marginLeft="0px";
   Element.style.marginLeft="380px";
}

