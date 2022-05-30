// getting element by id
let no_of_order=document.getElementById('no_of_order');


// adding event listener to the funcation



// decalearing select_order funcatoin
let count=0;
function select_order(element) {
    if(element.classList!="card  m-auto my-3 border border-success border-5"){

        element.classList="card  m-auto my-3 border border-success border-5";
        no_of_order.innerHTML=`(${++count})`; 
        element.firstElementChild.innerHTML=`<img src="/asset/tick-removebg-preview.png" class="border border-top-0 border-end-0 border-success radius-circle" style="width: 2rem;" alt=""></img>`;
        console.log(element.firstElementChild);
    }
    else{
        no_of_order.innerHTML=`(${--count})`; 
        if(count==0){
            no_of_order.innerHTML="";
        }
        element.classList="card  m-auto my-3";
        element.firstElementChild.innerHTML="";
    }
        
    
    
    
}