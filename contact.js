hamburger = document.querySelector(".hamburger");
let check=true;
   hamburger.onclick =function(){
    
    navBar =document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
    
    if(check){
      let profile=document.querySelector(".allbox");  
      profile.style.visibility='hidden';
      check=false;
    }
    else{
     let  profile=document.querySelector(".allbox");  
      profile.style.visibility='visible';
      check=true;
    }
}