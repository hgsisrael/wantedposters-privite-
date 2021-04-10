function changeHeading(imgElement){
  var geniusName = imgElement.getAttribute('alt');
  var newHeadingVal = geniusName + " Is The Most Wanted Genius!";
  document.getElementById("mainHeading").innerHTML = newHeadingVal;

}

function changeColor(imgElement){
  var geniusName = imgElement.getAttribute('alt');
 
  if(geniusName =="Zander Jimenez"){
    document.getElementsByTagName("body")[0].style.color= 'blue';
  }
  else if(geniusName =="Keion Sellers"){
     document.getElementsByTagName("body")[0].style.color="green";
  }else if(geniusName =="Israel Fleetwood "){
     document.getElementsByTagName("body")[0].style.color="red";
  }else{
    document.getElementsByTagName("body")[0].style.color="white";
  }

}