const famousMosquesInPakistan = [
    {
      name: "Badshahi Mosque",
      location: "Lahore",
      capacity: "55,000",
      yearBuilt: 1673,
      src : "./img/Badshahi.jpg"
    },
    {
      name: "Faisal Mosque",
      location: "Islamabad",
      capacity: "100,000",
      yearBuilt: 1986,
      src:"./img/Faisal Mosque.jpg"
    },
    {
      name: "Lal Masjid",
      location: "Islamabad",
      capacity: "10,000",
      yearBuilt: 1965,
      src: "./img/Lal Masjid.jpg"
    },
    // Add more mosques as needed
    {
      name: "Data Ganj Bakhsh Shrine",
      location: "Lahore",
      capacity: "Unknown",
      yearBuilt: "12th century",
      src : "./img/Data Ganj Bakhsh Shrine.jpg"
    },
    {
      name: "Wazir Khan Mosque",
      location: "Lahore",
      capacity: "Unknown",
      yearBuilt: 1634,
      src : "./img/Wazir Khan Mosque.jpg"

    },
    {
      name: "Bhong Mosque",
      location: "Rahim Yar Khan",
      capacity: "Unknown",
      yearBuilt: 2001,
      src : "./img/Bhong Mosque.jpg"

    },
    {
        name: "Grand Jamia Mosque",
        location: "Lahore",
        capacity: "70,000",
        yearBuilt: 2014,
        src : "./img/Grand Jamia Mosque.jpg"
      },
      
      {
        name: "Tooba Mosque",
        location: "Karachi",
        capacity: "5,000",
        yearBuilt: 1969,
        src : "./img/Tooba Mosque.jpg"

      },
      {
        name: "Sunehri Mosque",
        location: "Peshawar",
        capacity: "5,000",
        yearBuilt: 1753,
        src : "./img/Sunehri Mosque.jpeg"

      },
      {
        name: "Hazratbal Shrine",
        location: "Muzaffarabad",
        capacity: "10,000",
        yearBuilt: 1484,
        src : "./img/Hazratbal Shrine.jpg"

      },
      {
        name: "Bilal Masjid",
        location: "Multan",
        capacity: "20,000",
        yearBuilt: 2003,
        src : "./img/Bilal Masjid.jpg"

      },
      {
        name: "Masjid e Noor",
        location: "Quetta",
        capacity: "7,000",
        yearBuilt: 1978,
        src : "./img/Masjid e Noor.jpg"

      },
      {
        name: "Cherat Mosque",
        location: "Nowshera",
        capacity: "10,000",
        yearBuilt: 1985,
        src : "./img/Cherat Mosque.jpg"

      },
      {
        name: "Shah Jahan Mosque",
        location: "Thatta",
        capacity: "50,000",
        yearBuilt: 1647,
        src : "./img/Shah Jahan Mosque.jpg"

      },
      {
        name: "Ghazi Mosque",
        location: "Mangla",
        capacity: "15,000",
        yearBuilt: 1974,
        src : "./img/Ghazi Mosque.jpg"

      },
      {
        name: "Quba Mosque",
        location: "Sialkot",
        capacity: "12,000",
        yearBuilt: 1980,
        src : "./img/Quba Mosque.jpg"

      },
      {
        name: "Ibrahim Mosque",
        location: "Hyderabad",
        capacity: "6,000",
        yearBuilt: 1999,
        src : "./img/Ibrahim Mosque.jpg"

      },
      {
        name: "Ahmed Raza Mosque",
        location: "Gujranwala",
        capacity: "8,000",
        yearBuilt: 2005,
        src : "./img/Ahmed Raza Mosque.jpeg"

      },
      {
        name: "Siri Paye Mosque",
        location: "Kaghan Valley",
        capacity: "1,000",
        yearBuilt: 2017,
        src : "./img/Siri Paye Mosque.jpg"

      },
  
  ];
  
var main = document.getElementById('main')
console.log(main.innerHTML)

for(var i =0;i<famousMosquesInPakistan.length;i++){
main.innerHTML += `
<div class="card mb-3  animate__animated animate__fadeInLeft" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-sm-5 col-md-5">
    <img src="${famousMosquesInPakistan[i].src}" class="img-fluid rounded-start mosque-img" alt="...">
    </div>
    <div class=" col-sm-6 col-md-6">
      <div class="card-body">
        <h5 class="card-title"><span> Name: </span> ${famousMosquesInPakistan[i].name}</h5>
        <p class="card-text"><span>Location: </span> ${famousMosquesInPakistan[i].location}</p>
        <p class="card-text"><span>Capacity: </span> ${famousMosquesInPakistan[i].capacity}</p>
        <p class="card-text"><span>Built Year: </span> ${famousMosquesInPakistan[i].yearBuilt}</p>
      </div>
    </div>
  </div>
</div>
`
}

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

function logOut(){
  localStorage.clear();
 
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Log Out Succesfully",
  showConfirmButton: false,
  timer: 1500
});
  setTimeout(function(){
 window.open("/index.html")
  },1500)

  
}


let profileName =  document.getElementById('profileName');
let getdata = localStorage.getItem("userData");
getdata = JSON.parse(getdata)
profileName.innerHTML =  getdata.username;