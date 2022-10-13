showDetails();
let button = document.getElementById('button');
button.addEventListener('click',function(e){
    let title=document.getElementById('title');
    let email=document.getElementById('email');
    let password= document.getElementById('password');
    let detail = localStorage.getItem('detail') ;
    if(detail== null)
    {
detailObj=[];
    }
    else{
        detailObj=JSON.parse(detail);
    }
    let myObj = {
       title:title.value,
       email:email.value,
       password:password.value
    }
    detailObj.push(myObj);
    localStorage.setItem("detail",JSON.stringify(detailObj));
    title.value="";
    email.value="";
    password.value="";
    showDetails();
})
function showDetails(){
    let detail= localStorage.getItem('detail')
    if(detail== null)
    {
detailObj=[];
    }
    else{
        detailObj=JSON.parse(detail);
    }
    let show="";
    detailObj.forEach(function(element,index){
        show+=`
         <div class="card-body">
        <h5 class="myTitle my-3"> ${element.title}</h5>
        <p class="card-text">${element.email}</p>
       <input type="password" id="myInput" value="${element.password}">
        <input type="checkbox" onclick="myFunction()">Show Password<br><br>
        <button id=${index} onclick="deleteDetails(this.id)" class="btn btn-primary">Delete</Button>
      </div>`
    })
    let detailElem =document.getElementById('detail');
    if(detailObj.length!=0)
    {
        detailElem.innerHTML=show;

    }
    else
    {
        detailElem.innerHTML=`No any detail to show`
    }

}
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function deleteDetails(index){

let detail= localStorage.getItem('detail')
    if(detail== null)
    {
detailObj=[];
    }
    else{
        detailObj=JSON.parse(detail);
    }
    detailObj.splice(index,1)
    localStorage.setItem('detail',JSON.stringify(detailObj))
    showDetails();
  }
  let search = document.getElementById('search');
  search.addEventListener('input',function(){
    let inputVal =search.value.toLowerCase();
    console.log('event fired')
    let sTitle=document.getElementsByClassName('myTitle');
    Array.from(sTitle).forEach(function(element){
        let titleTxt=element.getElementsByTagName("h5")[0].innerText;
        if(titleTxt.includes(inputVal))
        {
            element.style.display="block";
        }
        else{
            element.stye.display="none";
        }
    })
  })