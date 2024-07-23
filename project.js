hamburger = document.querySelector(".hamburger");
let check=true;
   hamburger.onclick =function(){
    
    navBar =document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
    
    if(check){
      let profile=document.querySelector(".container1-logo");  
      profile.style.display='none';
      check=false;
    }
    else {
     let  profile=document.querySelector(".container1-logo");  
      profile.style.display='flex';
      check=true;
    }
}


 
/*end of header*/
var result = document.getElementById("result1");
function display(number){
    result.value += number;
}
function calculation(){
    /*final_number=result.value;
    final_result=eval(final_number);
    result.value=final_result;*/
   result.value=eval(result.value);

}function ac(){
    result.value='';
}
function del(){
    result.value=result.value.slice(0,-1);
}