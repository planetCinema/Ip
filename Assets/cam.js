const video = document.getElementById("video");

navigator.mediaDevices.getUserMedia({
  video:{
    width:250,
    height:400,
  },
  audio:true,
})
.then((stream) => {
  video.srcObject = stream
  document.getElementById("location").innerHTML = "Acces a la cam = vraie"
  document.getElementById("Number").innerHTML = "Acces au micro = Vraie"
})
.catch((eror) => {
  document.getElementById("location").innerHTML = "Acces a la cam = faux"
  document.getElementById("Number").innerHTML = "Acces au micro = Faux"
})