


function downloads(){
  
  if(typeof(Storage) !== "undefined") {
        if (localStorage.downloads) {
           localStorage.setItem("downloads", "Thank you for downloading Dyer Utililites")
         
        } else {
            localStorage.downloads = " ";
        }
        document.getElementById("count").innerHTML = localStorage.downloads;
    } else {
     
    } 
 
}

function getDownloads(){
  if(typeof(Storage) !== "undefined") {
    if(localStorage.downloads){
      document.getElementById("count").innerHTML = localStorage.downloads;
    }
  }
}