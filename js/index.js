

var siteNameInput = document.getElementById('siteName');//Input kolo
var siteUrlInput = document.getElementById('siteUrl');//Input kolo
var visitBtn=document.getElementById('visitBtn');
document.getElementById("copy").innerHTML = new Date().getFullYear();
var bookContainer = [];

if(localStorage.getItem('book')!=null) {
    bookContainer=JSON.parse(localStorage.getItem('book'));
displayBook(bookContainer);

}




function validatUrl(){
    var regex=/^[www]{3,3}\.[a-zA-Z]{0,26}[@]{0,1}[a-zA-Z]{0,26}\.[com,org,net]{3,3}$/;
    return regex.test(siteUrlInput.value);
    }


function submit() {


if(validatUrl(siteUrlInput.value)){

    var book = {
        siteName: siteNameInput.value,
        siteUrl: siteUrlInput.value,
        
    }
    bookContainer.push(book);
    localStorage.setItem("book",JSON.stringify(bookContainer))
    displayBook(bookContainer);
    clearForm();



}
else{
alert('please enter url lik  www.google.com')
}

}




function clearForm(){
siteNameInput.value="";
siteUrlInput.value="";


}

function displayBook(arr){
  var cartons =``;
    for(var i=0; i<arr.length;i++){
cartons +=`
<div class="container-fluid display my-3  py-5  d-flex  ">
<h2 class="w-25">${arr[i].siteName}</h2>
<a  class="btn btn-primary me-4 " href="https://${arr[i].siteUrl}" target="_blank"  role="button" id="visitBtn">visit</a>
<button onclick="deleteBook(${i});"  class="btn btn-danger">delete</button>

</div>
`; }
document.getElementById('bookmarkList').innerHTML=cartons;

}


function deleteBook(book){
bookContainer.splice(book,1);
localStorage.setItem("book",JSON.stringify(bookContainer))

displayBook(bookContainer)
}





