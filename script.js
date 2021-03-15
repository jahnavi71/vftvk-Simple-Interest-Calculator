function compute(){
    var principal=document.getElementById("principal");
    var rate = document.getElementById("rate");
    var years = document.getElementById("years");
    var intrest = principal * years * rate / 100;
    var newyear = new Date().getFullYear() + years;
    
    
    document.getElementById("result").innerHTML=
        "If you deposit " +principal+
                "at an intrest of " +rate+
                "You will recieve an amount of "+intrest+
                "in the year "+newyear;

}
