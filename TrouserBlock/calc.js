function calculateArea() {
    // Get user input
    var Waist = document.getElementById("Waist").valueAsNumber;
    var Hips = document.getElementById("Hips").value;
    var Waisttohip = document.getElementById("Waisttohip").value;
    var BodyRise = document.getElementById("BodyRise").value;    
    var Waisttofloor = document.getElementById("Waisttofloor").valueAsNumber;
    var Trouserbottomwidth = document.getElementById("Trouserbottomwidth").value;
    var Waistband = document.getElementById("Waistband").value;


    // Validate input
    // if (blouseLength === "" || blouseLength === "") {
    //     alert("Please enter values for both length and width.");
    //     return;
    // }

    // Front Draft area
    var frontone = BodyRise-Waistband;
    var fronttwo = Waisttohip-Waistband;
    var frontthree = Waisttofloor-Waistband;
    var frontfour = ((frontthree-frontone)/2)-5;
    var frontfive = (Hips/12)+0.5;
    var frontseven = Hips/4;
    var frontnine = Hips/16;
    var fronteight = 1/4*Waist+2.25;
    var fronttwelve = (Trouserbottomwidth/2)-0.5;
    var frontthirteen = fronttwelve+1.5;
    


    // Display result Front Draft
    document.getElementById("frontdraft").innerHTML = "<b>Front Draft</b>";
    document.getElementById("frontresult1").innerHTML = "(0-1) body rise-waist band= " + frontone+"cm square across";
    document.getElementById("frontresult2").innerHTML = "(0-2)= waist to hip - waist band= " + fronttwo+"cm square across";
    document.getElementById("frontresult3").innerHTML = "(0-3) waist to floor- waist band= " + frontthree+"cm square across";
    document.getElementById("frontresult4").innerHTML = "(1-4) =1/2(1-3)-5cm= " + frontfour+"cm";
    document.getElementById("frontresult5").innerHTML = "(1-5) = 1/12th hip measurement+0.5cm=" + frontfive+"cm square up to 6 and 7";
    document.getElementById("frontresult6").innerHTML = "(6-8) = 1/4th hip measurement= " + frontseven+"cm";
    document.getElementById("frontresult8").innerHTML = "(5-9)= 1/16th Hip measurement = " + frontnine+"cm";
    document.getElementById("frontresult9").innerHTML = "(7-10) =1.5cm";
    document.getElementById("frontresult10").innerHTML = "Mark guide point from 5 diagonally";
    document.getElementById("frontresult11").innerHTML = "(Sizes 6-14 3cm from point (5-a)";
    document.getElementById("frontresult12").innerHTML = "Sizes 16-24 3.25cm from point (5-a))";
    document.getElementById("frontresult13").innerHTML = "Join 10-6; join 6-9 with a curve touching a guide point from 5";
    document.getElementById("frontresult14").innerHTML = "(10-11) = 1/4th waist+2.25cm ="+fronteight+"cm ";
    document.getElementById("frontresult15").innerHTML = "Construct a dart on the line from point 0 of length 7cm, width 2cm.";
    document.getElementById("frontresult16").innerHTML = "(3-12) =1/2 of trouser bottom width-0.5cm= "+fronttwelve+"cm";
    document.getElementById("frontresult17").innerHTML = "(4-13) = The measurement of (3-12)+1.5cm= "+frontthirteen+"cm";
    document.getElementById("frontresult18").innerHTML = "(Sizes 16-20 add 1.7cm, sizes 22-24 add 2cm)"
    document.getElementById("frontresult19").innerHTML = "Draw inside leg seam 9,15,14; curve 9-15 inwards 0.75cm"
    document.getElementById("frontresult30").innerHTML = "<b>Cutting Points:</b>";
    document.getElementById("frontresult31").innerHTML = "FRONT:(9-6-10-11-8-13-12-14-15-9); CUT:2Pc's"


    // Back Draft area
    var backone = frontfive*1/4;
    var backtwo = (frontnine/2)-0.5;
    var backthree = 1/4*Waist+4.25;
    var backfour = (frontnine/2)-0.5;
    var backfive = 1/4*Hips+1.5;


    // Display result Back Draft
    document.getElementById("backdraft").innerHTML = "<b>Back Draft</b>";
    document.getElementById("backresult1").innerHTML = "(5-16) = 1/4th of (1-5)= " + backone+"cm";
    document.getElementById("backresult2").innerHTML = "Square up to 17 on the hipline, 18 on the waistline";
    document.getElementById("backresult3").innerHTML = "(16-19) = 1/2 of (16-18) +0.5cm";
    document.getElementById("backresult4").innerHTML = "(18-20) = 1.5 to 2cm";
    document.getElementById("backresult5").innerHTML = "(20-21) = 1.5 to 2cm";
    document.getElementById("backresult6").innerHTML = "(21-22) = 1/4th waist+4.25cm="+backthree+"cm; join 21-22 to touch the horizontal line from 0.";
    document.getElementById("backresult7").innerHTML = "(9-23) = 1/2 of (5-9)-0.5cm="+backfour+"cm";
    document.getElementById("backresult8").innerHTML = "(23-24) = 0.5cm";
    document.getElementById("backresult9").innerHTML = "Join 21-19 and 19-24 with a curve touching a guide point from 16";
    document.getElementById("backresult10").innerHTML = "(Sizes 6 to 14 4.5cm from 16-b";
    document.getElementById("backresult11").innerHTML = "Sizes 16 to 24 4.75cm from 16-b)";
    document.getElementById("backresult12").innerHTML = "(17-25) = 1/4th Hip measurement+1.5cm ="+backfive+"cm";
    document.getElementById("backresult13").innerHTML = "(12-26)=1cm";
    document.getElementById("backresult14").innerHTML = "(13-27)=1.5cm";
    document.getElementById("backresult15").innerHTML = "Draw inside seam through points 22,25,27,26; curve hipline 0.5cm outwards";
    document.getElementById("backresult17").innerHTML = "Curve (25-27) 0.5cm inwards";
    document.getElementById("backresult18").innerHTML = "(14-28) = 1cm";
    document.getElementById("backresult19").innerHTML = "(15-29) = 1.5cm";
    document.getElementById("backresult20").innerHTML = "Draw inside leg seam 24, 29, 28, curve 24-29 inwards 1cm";
    document.getElementById("backresult21").innerHTML = "Divide the line 21-22 into three parts. Mark points 30 and 31.";
    document.getElementById("backresult22").innerHTML = "Using the line 21-22 square down from 30 and 31.";
    document.getElementById("backresult23").innerHTML = "Construct darts on these lines 2cm wide, length 10cm from point 30 and 8cm from point 31.";
    document.getElementById("backresult24").innerHTML = "<b>Cutting Points:</b>";
    document.getElementById("backresult25").innerHTML = "BACK:(24-b-19-20-21-22-25-27-26-28-29-24);CUT:2PC'S";

    
}