const buttn=document.querySelectorAll('.button');
const body=document.querySelector('body');


buttn.forEach(function(button){
    console.log(button);
    
    button.addEventListener("mouseover",function(e){
        console.log(e);
        console.log(e.target)

        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id;
        }

        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
            body.style.color='blue';
        }

        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
            body.style.color='white';
        }

        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id;
            body.style.color='black';
        }
        
        


    })
  

   
});

