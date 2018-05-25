//function timer5Seconds(){
//	alert("this is 5 second timer");
//}


//setTimeout(timer5Seconds, 5000);



var myImage = document.getElementById("image");
var ArrayImage = ["images/1.jpeg","images/2.jpg","images/3.jpeg"];
var imageIndex = 0;

function changeImage(){

	myImage.setAttribute("src", ArrayImage[imageIndex]);
		imageIndex++;

		if (imageIndex >= ArrayImage.length){
			imageIndex = 0;

		}
	}
setInterval(changeImage, 3000);