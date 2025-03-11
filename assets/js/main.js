const form =document.querySelector("form#greeterName")
 form.addEventListener('submit',(e)=>{
     e.preventDefault();
    //Form validations
    const  greeterName= e.target[0].value;
    
    window.location.href=`http://127.0.0.1:5500/greeting.html?name= ${greeterName}`;  
    console.log();
    
    
 })