const toggle = document.getElementById('toggle');
const navItems = document.getElementById('navItems');
const menu = document.getElementById('menu');
toggle.addEventListener('click',Toggle);

function Toggle(){
   if (navItems.classList.contains('hidden')) {
         navItems.classList.remove('hidden');
         menu.classList.remove('fa-bars');
         menu.classList.add('fa-times');
   }
   else{
         navItems.classList.add('hidden');
         menu.classList.add('fa-bars');
         menu.classList.remove('fa-times');
        }
}


const openToggle = document.getElementById('dashboardToggle1');
const closeToggle = document.getElementById('dashboardToggle2');
const dashboard = document.getElementById('dashboard');
const mainDashboard = document.getElementById('mainDashboard');

function toggleDashboard(){
    if (dashboard.classList.contains('hide')) {
          dashboard.classList.remove('hide');
          dashboard.classList.remove('invisible');
          mainDashboard.classList.add('appear');
          mainDashboard.classList.add('z-10');
    }
    else{
          dashboard.classList.add('hide');
          mainDashboard.classList.remove('appear');          
          mainDashboard.classList.remove('z-10');
          dashboard.classList.add('invisible');
    }
 }
 
 function onFileSelected(event){
     var selectedFile = event.target.files[0];
     var reader = new FileReader();
     var pixTag = document.getElementById("profilePix");
     var pixTag2 = document.getElementById("profilePix2");     
     reader.onload = function(event){
         pixTag.src = event.target.result;
         pixTag2.src = event.target.result;
     };
     reader.readAsDataURL(selectedFile);
 }

 function performClick(){
     document.getElementById("file").click();
 }