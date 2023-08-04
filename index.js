var daysOfWeek=["Sunday","Monday","Tuesday", "Wednesday", "Thursday","Friday","Saturday"
 ];
var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"
];
var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"
];y
 
function getName(){
    var year =parseInt(document.getElementById("year").value);
    var month =parseInt(document.getElementById("month").value);
    var day =parseInt(document.getElementById("day").value);      
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var not = document.getElementById("not")
    //validation
    if(day<=0||day>31)
    alert("enter a valid day");
    else if(month<0||month>12 ||month ==2 && day>29)
    alert("enter a valid month");
    var day = new Date(year + "/" + month + "/" + day);
    var birthDay = day.getDay();
    if(male.checked==true){
       alert("You were born on " +daysOfWeek[birthDay]+ " and Your Akan name is " + maleAkanNames[birthDay])
    }
    if(female.checked==true){
       alert("You were born on " +daysOfWeek[birthDay]+ " and Your Akan name is " + femaleAkanNames[birthDay])
    }
    if(not.checked==true){
      alert("This system is only for those who proudly identifies themselves as Male or Female")
   }
    }