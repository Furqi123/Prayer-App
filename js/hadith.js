const hadiths = [
    {
      id: 1,
      text: "The deeds most loved by Allah are those done regularly, even if they are small.",
      source: "Sahih Muslim",
      arabic: "أحب الأعمال إلى الله أدومها وإن قلَّ."
    },
    {
      id: 2,
      text: "Kindness is a mark of faith, and whoever is not kind has no faith.",
      source: "Sahih Muslim",
      arabic: "الرِّفقُ وَالْمَوَدَّةُ مِنَ الإِيمَانِ، وَمَنْ لاَ يَرْفَقُ وَلَا يُوَدِّ لَيْسَ مِنَّا."
    },
    {
      id: 3,
      text: "He who believes in Allah and the Last Day should be generous to his neighbor.",
      source: "Sahih Bukhari",
      arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيُحْسِنْ إِلَى جَارِهِ."
    },
    {
        id: 21,
        text: "The Messenger of Allah (ﷺ) said: 'None of you will have faith until he loves for his brother what he loves for himself.'",
        source: "Sahih al-Bukhari",
        arabic: "لا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ."
      },
      {
        id: 22,
        text: "The strong believer is better and more beloved to Allah than the weak believer, while there is good in both.",
        source: "Sahih Muslim",
        arabic: "الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ وَفِي كُلٍّ خَيْرٌ."
      },
      {
        id: 23,
        text: "A Muslim is one who avoids harming Muslims with his tongue and hands.",
        source: "Sahih al-Bukhari",
        arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ."
      },
      {
        id: 24,
        text: "The best of you are those who are best to their families, and I am the best among you to my family.",
        source: "Tirmidhi",
        arabic: "خَيْرُكُمْ خَيْرُكُمْ لأَهْلِهِ، وَأَنَا خَيْرُكُمْ لأَهْلِي."
      },
      {
        id: 25,
        text: "Whoever is not thankful for a small blessing cannot be thankful for a large blessing.",
        source: "Ibn Majah",
        arabic: "مَنْ لَا يَشْكُرِ النَّاسَ لَا يَشْكُرُ اللَّهَ."
      },
      {
        id: 26,
        text: "Take account of yourselves before you are taken to account.",
        source: "Tirmidhi",
        arabic: "حَاسِبُوا أَنْفُسَكُمْ قَبْلَ أَنْ تُحَاسَبُوا."
      },
      {
        id: 27,
        text: "Do not be people without minds of your own, saying that if others treat you well, you will treat them well, and that if they do wrong, you will do wrong. But (instead) accustom yourselves to do good if people do good, and not to do wrong if they do evil.",
        source: "Al-Tirmidhi",
        arabic: "لا تكونوا عبدة للأهواء، قائلين إن أحسنوا إلينا أحسنا، وإن أساءوا إلينا أسأنا، ولكن كونوا عبادا لله إخوانا."
      },
      {
        id: 28,
        text: "The strong person is not the good wrestler. Rather, the strong person is the one who controls himself when he is angry.",
        source: "Sahih al-Bukhari",
        arabic: "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ."
      },
      {
        id: 29,
        text: "The reward of deeds depends upon the intentions, and every person will get the reward according to what he has intended.",
        source: "Sahih al-Bukhari",
        arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَّا نَوَى."
      },
      {
        id: 30,
        text: "Verily, the believer is like a mirror to his brother. He protects him from calamities and defends him behind his back.",
        source: "Abu Dawood",
        arabic: "إِنَّمَا الْمُؤْمِنُ كَمَثَلِ الزُّرَاعَةِ، يُفِيءُ بَعْضُهُ بَعْضًا، وَيُكَوِّنُ بَعْضُهُ بَعْضًا."
      },
      {
        id: 31,
        text: "The best charity is that given in Ramadan.",
        source: "At-Tirmidhi",
        arabic: "أَفْضَلُ الصَّدَقَةِ صَدَقَةُ رَمَضَانَ."
      },
      {
        id: 32,
        text: "The strong is not the one who overcomes the people by his strength, but the strong is the one who controls himself while in anger.",
        source: "Sahih al-Bukhari",
        arabic: "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ."
      },
     
  ];


    


var index = 0;
let main  = document.getElementById('main')

function hadith(){
    index++
    if(!hadiths[index]){
        index = 0;
    }

main.innerHTML = `
<h2 class="hadith animate__animated animate__fadeInDown">Hadith</h2>
<div class="card animate__animated animate__fadeInUp" width="400">
<div class="card-header">
 Hadith no: ${hadiths[index].id}
</div>
<div class="card-body">
 <blockquote class="blockquote mb-0">
 <h5>${hadiths[index].source}</h5>
 <p>${hadiths[index].arabic}</p>
   <footer class="blockquote-footer">${hadiths[index].text}</footer>
 </blockquote>
</div>
</div>
`


}
hadith();


  setInterval(function(){

  hadith()
  },4000)

 

  let profileName =  document.getElementById('profileName');
let getdata = localStorage.getItem("userData");
getdata = JSON.parse(getdata)
profileName.innerHTML =  getdata.username;