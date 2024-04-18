let RndN2 = 0 ;
let RndN1 = 0 ;
let IP =  "0" ;
let RndWay = 0 ;



function getIp() {
  
  RndN1 = Math.ceil(Math.random() * 345)
  RndN1 = String(RndN1)
  RndN2 = Math.ceil(Math.random() * 345)
  RndN2 = String(RndN2)
  RndWay = Math.ceil(Math.random() * 15)
  console.log("Rnd WAY = " + RndWay);

  if (RndWay === 15) {
    
    document.getElementById("sec").innerHTML = "En Danger !"
    document.getElementById("sec").style.color = "red";
    console.log("Rnd WAY = " + RndWay);

  }
 

  


  if (RndN1 < 100) {
    
    RndN1 =  "0" + RndN1
    RndN1 = String(RndN1)
    console.log(RndN1)
    assembleIp()

  }
  else if (RndN1 < 10) {
    
    RndN1 =  "00" + RndN1
    RndN1 = String(RndN1)
    console.log(RndN1)
    assembleIp()

  }

  if (RndN2 < 100) {
    
    RndN2 =  "0" + RndN2
    RndN2 = String(RndN2)
    console.log(RndN2)
    assembleIp()

  }
  else if (RndN2 < 10) {
    
    RndN2 =  "00" + RndN2
    RndN2 = String(RndN2)
    console.log(RndN2)
    assembleIp()

  }
  
}

function assembleIp() {

  IP = "192." + RndN1 + "." + RndN2 + "." + "11" 
  document.getElementById("errText").innerHTML = IP ;

}