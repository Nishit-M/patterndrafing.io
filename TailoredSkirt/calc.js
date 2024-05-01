function calculateArea() {
    // Get user input
    var Skirtlength = document.getElementById("Skirtlength").valueAsNumber;
    var Waisttohip = document.getElementById("Waisttohip").value;
    var Waistround = document.getElementById("Waistround").value;
    var Hipround = document.getElementById("Hipround").value;    



    // Validate input
    // if (blouseLength === "" || blouseLength === "") {
    //     alert("Please enter values for both length and width.");
    //     return;
    // }

    // Back Draft area
    var skirtlength = Skirtlength-3;
    var backtwo = 1/2*Hipround+1.5;
    var backthree = Waisttohip-3;
    var backfour = 1/4*Hipround+1.5;
    var backfive = 1/4*Waistround+4+0.25;
    var backseven = 1/4*Waistround+2+0.25;
    var backeight = 1/2*Waistround+0.5;


    // Display result Back Draft
    document.getElementById("backdraft").innerHTML = "<b>Skirt</b>";
    document.getElementById("backresult1").innerHTML = "Square down and square across fomr 1";
    document.getElementById("backresult2").innerHTML = "(1-2) skirt length -  Belt Width =  " + skirtlength+"cm";
    document.getElementById("backresult3").innerHTML = "(1-3) 1/2*HipRound +1.5cm ease =  " + backtwo+"cm";
    document.getElementById("backresult4").innerHTML = "Square down from  amd square across from 2, mark '4'";
    document.getElementById("backresult5").innerHTML = "(1-5) = Waist to hip - Belt width" + backthree+"cm";
    document.getElementById("backresult6").innerHTML = "Square across from 5 to 6";
    document.getElementById("backresult7").innerHTML = "(5-7) = 1/4* Hip Round +1.5cm"+backfour+"cm";
    document.getElementById("backresult8").innerHTML = "Square down from 7 to 8";
    document.getElementById("backresult9").innerHTML = "(1-9) = 1/4* Waist+ 4cm(dart)+0.25cm(ease)" + backfive;
    document.getElementById("backresult10").innerHTML = "(9-10) = 1cm; join 10 to 1 witha a slight curve";
    document.getElementById("backresult11").innerHTML = "Divide line (1-10) into 3 equal parts. Marks 11 and 12";
    document.getElementById("backresult12").innerHTML = "Using line (1-10) square down from 11 and 12 with a dotted line.";
    document.getElementById("backresult13").innerHTML = "(11-13)= 13cm and 12-14 = 12cm";
    document.getElementById("backresult14").innerHTML = "(11-a)= (11-b) = 1cm and (12-c) = (12-d)= 1cm";
    document.getElementById("backresult15").innerHTML = "Join (10-7) with a straight dotted line.";
    document.getElementById("backresult16").innerHTML = "Shape waistline with a slight curve and side seam curving outwards 0.5cm";
    document.getElementById("backresult17").innerHTML = "(3-15) = 1/4*waist + 2cm for darts +0.25cm (ease)"+backseven+"cm";
    document.getElementById("backresult18").innerHTML = "(15-16) = 1cm; join 3-16 with a slight curve";
    document.getElementById("backresult19").innerHTML = "(16-17) = 1/3 of (3-16)";
    document.getElementById("backresult20").innerHTML = "Using line (3-16) square down from 17 with a dotted line.";
    document.getElementById("backresult21").innerHTML = "(17-18) = 10cm";
    document.getElementById("backresult22").innerHTML = "(17-e)=(17-f ) = 1cm, join e and f to 18";
    document.getElementById("backresult23").innerHTML = "Shape waistline curve and side seam curving outwards 0.5cm";
    document.getElementById("backresult24").innerHTML = "<b>Cutting Points:</b>";
    document.getElementById("backresult25").innerHTML = "BACK: (1-10-7-8-2) ; ON-FOLD:(1-2); CUT :1PC";
    document.getElementById("backresult26").innerHTML = "FRONT: (3-16-8-4) ; ON FOLD:(3-4); CUT :1PC";
    document.getElementById("backresult27").innerHTML = "<b>WAIST BAND:</b>";
    document.getElementById("backresult28").innerHTML = "(0-1) = Band width = 3cm";
    document.getElementById("backresult29").innerHTML = "(0-2) = 1/2 Waist Round +0.5cm="+backeight+"cm";
    document.getElementById("backresult30").innerHTML = "(2-a) = (3-b) = 3cm for buttons";
    document.getElementById("backresult31").innerHTML = "<b>Cutting Points:</b>";
    document.getElementById("backresult31").innerHTML = "WAIST BAND: (0-a-B-1)  ON-FOLD:(1-2) CUT :2PC ";

}