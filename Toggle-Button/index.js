
var click1 = document.getElementById("inner");
var count = 0;
click1.addEventListener("click", function () {
  if (count % 2 === 0) {
    
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
    document.getElementsByTagName("h1")[0].style.color = "white";
    document.getElementById("toggler").style.float = "right";
    document.getElementById("inner").style.backgroundColor="blue";
    count++;
  }
    else{
      document.getElementsByTagName("body")[0].style.backgroundColor = "white";
      document.getElementsByTagName("h1")[0].style.color = "black";
      document.getElementById("toggler").style.float = "left";
      document.getElementById("inner").style.backgroundColor="grey";
      count++;

    }
  }
);
