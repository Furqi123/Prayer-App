if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => {
        
        console.log("service worker registered")
        Notification.requestPermission().then(res => {
          if (Notification.permission == 'granted'){
            console.log("Granted permission")
            return
          }
          console.log(res)
        })
    })
      .catch(err => console.log("service worker not registered", err))
  })


}


let profileName =  document.getElementById('profileName');
let getdata = localStorage.getItem("userData");
getdata = JSON.parse(getdata)
profileName.innerHTML =  getdata.username;
let box1NamazName = document.getElementById('box1NamazName')
let box1NamazTime = document.getElementById('box1NamazTime')
let box2NamazName = document.getElementById('box2NamazName')
let box2NamazTime = document.getElementById('box2NamazTime')
let box3NamazName = document.getElementById('box3NamazName')
let box3NamazTime = document.getElementById('box3NamazTime')
let box4NamazName = document.getElementById('box4NamazName')
let box4NamazTime = document.getElementById('box4NamazTime')




function currentTime() {
let date = new Date(); 
 let hh = date.getHours();
 let mm = date.getMinutes();
let ss = date.getSeconds();
 let session = "AM";


  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);

  let mainPrayerName = document.getElementById('main-prayer-name');
  let mainPrayerTime = document.getElementById('main-prayer-time')

   if(hh >= 5  && session == "AM" && hh <= 11){
    mainPrayerName.innerText = "Fajar";
    mainPrayerTime.innerText = "6:20 AM";
    box1NamazName.innerText = "Zuhr"
    box1NamazTime.innerText = "1:30 PM"
    box2NamazName.innerText = "Asar"
    box2NamazTime.innerText = "4:45 PM"
    box3NamazName.innerText = "Magrib"
    box3NamazTime.innerHTML = "5:45 PM"
    box4NamazName.innerText = "Isha";
    box4NamazTime.innerText = "8:00 PM";

  

    
    navigator.serviceWorker.ready.then((swReg) => {
      var options = {
       body: "Got To Fajar Prayer",
       icon: "/assets/image/favicon/icon-48x48.png",
     link : "http://127.0.0.1:5500/mosque.html"
      };
    swReg.showNotification("Namaz Reminder",options)
     } )
 
      
    }
    else if(hh <= 12  && session == "PM" && hh < 4){
      mainPrayerName.innerText = "Zuhr";
      mainPrayerTime.innerText = "1:30 PM";
      box1NamazName.innerText = "Asar"
      box1NamazTime.innerText = "5:30 PM"
      box2NamazName.innerText = "Magrib"
      box2NamazTime.innerText = "5:45 PM"
      box3NamazName.innerText = "Isha"
      box3NamazTime.innerHTML = "8:00 PM"
      box4NamazName.innerText = "Fajar";
      box4NamazTime.innerText = "6:20 AM";

    
      if(hh == 1 && mm == 30 && ss == 0 && session == "PM"){
        navigator.serviceWorker.ready.then((swReg) => {
          var options = {
           body: "Got To Zuhr Prayer",
           icon: "/assets/image/favicon/icon-48x48.png",
         link : "http://127.0.0.1:5500/mosque.html"
          };
        swReg.showNotification("Namaz Reminder",options)
         } )
      
         
      }
  
    }
    else if(hh >= 4 && mm >= 00 && session == "PM" && hh < 5){
      mainPrayerName.innerText = "Asar";
      mainPrayerTime.innerText = "4:45 PM";
      box1NamazName.innerText = "Magrib"
      box1NamazTime.innerText = "5:45 PM"
      box2NamazName.innerText = "Isha"
      box2NamazTime.innerText = "8:00 PM"
      box3NamazName.innerText = "Fajar"
      box3NamazTime.innerHTML = "6:20 AM"
      box4NamazName.innerText = "Zuhr";
      box4NamazTime.innerText = "1:30 PM";
      
      if(hh == 4 && mm == 45 && ss == 00 && session == "PM"){
        navigator.serviceWorker.ready.then((swReg) => {
          var options = {
           body: "Got To Asar Prayer",
           icon: "/assets/image/favicon/icon-48x48.png",
         link : "http://127.0.0.1:5500/mosque.html"
          };
        swReg.showNotification("Namaz Reminder",options)
         } )
      }


    }

    else if(hh >= 5  && session == "PM" && hh <7){
      mainPrayerName.innerText = "Magrib";
      mainPrayerTime.innerText = "5:45 PM";
      box1NamazName.innerText = "Isha"
      box1NamazTime.innerText = "8:00 PM"
      box2NamazName.innerText = "Fajar"
      box2NamazTime.innerText = "6:20 AM"
      box3NamazName.innerText = "Zuhr"
      box3NamazTime.innerHTML = "1:30 PM"
      box4NamazName.innerText = "Asar";
      box4NamazTime.innerText = "4:45 PM";

      if(hh == 5 && mm == 45 && ss == 0 && session == "PM" && hh<7){
        navigator.serviceWorker.ready.then((swReg) => {
          var options = {
           body: "Got To Magrib Prayer",
           icon: "/assets/image/favicon/icon-48x48.png",
         link : "http://127.0.0.1:5500/mosque.html"
          };
        swReg.showNotification("Namaz Reminder",options)
         } )
      }
     
    }

    else if(hh >= 7  && session == "PM" ){
      mainPrayerName.innerText = "Isha";
      mainPrayerTime.innerText = "8:00 PM";
      box1NamazName.innerText = "Fajar"
      box1NamazTime.innerText = "6:20 AM"
      box2NamazName.innerText = "Zuhr"
      box2NamazTime.innerText = "1:30 PM"
      box3NamazName.innerText = "Asar"
      box3NamazTime.innerHTML = "4:45 PM"
      box4NamazName.innerText = "Magrib";
      box4NamazTime.innerText = "5:45 PM";
      
    if(hh == 8 && mm == 00 && ss == 0 && session == "PM"){
      navigator.serviceWorker.ready.then((swReg) => {
        var options = {
         body: "Go To Isha Prayer",
         icon: "/assets/image/favicon/icon-48x48.png",
       link : "http://127.0.0.1:5500/mosque.html"
        };
      swReg.showNotification("Namaz Reminder",options)
       } )
    }

    }


  }

currentTime();



