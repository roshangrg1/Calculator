
function insert(val){
  
 document.querySelector(".textview").value+=val
 }
  
  function equals(){
    let x= document.querySelector(".textview").value
    let y= eval(x)
    document.querySelector(".textview").value=y
  }
  
  function clean(){
    document.querySelector(".textview").value=""
  }
  
  function back(){
    let back=document.querySelector(".textview").value
    document.querySelector(".textview").value = back.substr(0, back.length - 1);
   
  }

  
