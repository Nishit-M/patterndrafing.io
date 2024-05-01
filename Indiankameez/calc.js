function calculateArea() {
    // Get user input
    var Kameezlength = document.getElementById("Kameezlength").valueAsNumber;
    var Shoulder = document.getElementById("Shoulder").value;
    var Waisttohip = document.getElementById("Waisttohip").value;
    var BustRound = document.getElementById("BustRound").value;    
    var WaistRound = document.getElementById("WaistRound").valueAsNumber;
    var Backneckdepth = document.getElementById("Backneckdepth").value;
    var Waistlength = document.getElementById("Waistlength").value;
    var HipRound = document.getElementById("HipRound").value;
    var Frontneckdepth = document.getElementById("Frontneckdepth").value;


    // Validate input
    // if (blouseLength === "" || blouseLength === "") {
    //     alert("Please enter values for both length and width.");
    //     return;
    // }

    // Front Draft area
    var frontone = Kameezlength;
    var fronttwo = Shoulder/2;
    var frontthree = (BustRound/6)+1.5;
    var frontfour = (BustRound/4)+2.5;
    var frontfive = (WaistRound/4)+1.5;
    var frontsix = (HipRound/4)+2;
    var frontseven = (BustRound/12)+1;

    


    // Display result Front Draft
    document.getElementById("frontdraft").innerHTML = "<b>Front Draft</b>";
    document.getElementById("frontresult1").innerHTML = "(0-1) = Kameez length =" + frontone+"cm";
    document.getElementById("frontresult2").innerHTML = "(0-2) = ½ of Shoulder =" + fronttwo+"cm";
    document.getElementById("frontresult3").innerHTML = "(0-3) = 1/6th of Bust round + 1.5 cm (ease) =" + frontthree+"cm";
    document.getElementById("frontresult4").innerHTML = "(3-4) = 1/4th of Bust round + 2.5cm (ease) =" + frontfour+"cm";
    document.getElementById("frontresult5").innerHTML = "Square down from 2 onto (3-4) line and mark 5";
    document.getElementById("frontresult6").innerHTML = "(0-6) = Waist length = "+Waistlength+"cm";
    document.getElementById("frontresult8").innerHTML = "(6-7) = 1/4th of Waist round + 1.5 cm (ease) =" + frontfive+"cm";
    document.getElementById("frontresult9").innerHTML = "Join (4-7) with a straight line";
    document.getElementById("frontresult10").innerHTML = "(6-8) = Waist to hip ="+Waisttohip+"cm";
    document.getElementById("frontresult11").innerHTML = "(8-9) = 1/4th of Hip round + 2cm (ease) ="+frontsix+"cm";
    document.getElementById("frontresult12").innerHTML = "Join (7-9) with a smooth curve for waist to hip curve";
    document.getElementById("frontresult13").innerHTML = "Square across from 1 and square down from 9 and mark 10";
    document.getElementById("frontresult14").innerHTML = "(9-9a) = 5cm (for slits marking)";
    document.getElementById("frontresult15").innerHTML = "Join (9a-10) with a straight line";
    document.getElementById("frontresult16").innerHTML = "(0-11) = Front neck width = 1/12th of Bust round + 1 cm (ease) = "+frontseven+"cm";
    document.getElementById("frontresult17").innerHTML = "(0-12) = Front neck depth ="+Frontneckdepth+"cm";
    document.getElementById("frontresult18").innerHTML = "Join (11-12) with a smooth curve for front neck line"
    document.getElementById("frontresult19").innerHTML = "(2-13) = Shoulder slope = 1.5 cm"
    document.getElementById("frontresult20").innerHTML = "Join (11-13) with a straight line"
    document.getElementById("frontresult21").innerHTML = "(5-14) = 1cm"
    document.getElementById("frontresult22").innerHTML = "Join (13-14) with a dotted line"
    document.getElementById("frontresult23").innerHTML = "(14-x) = 2cm"
    document.getElementById("frontresult24").innerHTML = "Join (13-x-4) with a smooth curve for front armhole curve"
    document.getElementById("frontresult25").innerHTML = "(10-15)=10cm(flare)"
    document.getElementById("frontresult26").innerHTML = "From 15 join gradually to waist to hip curve with a straight line."
    document.getElementById("frontresult27").innerHTML = "(15-15a)=2.5cm"
    document.getElementById("frontresult28").innerHTML = "From 15a shape hem line."
    document.getElementById("frontresult29").innerHTML = "<b>Cutting Points:</b>"
    document.getElementById("frontresult30").innerHTML = "<b>KAMEEZ WITH SLITS:</b>";
    document.getElementById("frontresult31").innerHTML = "FRONT DRAFT : (12-11-13-x-4-7-9a-10-1) ON-FOLD:(0-1) CUT : 1Pc"
    document.getElementById("frontresult32").innerHTML = "<b>A-LINE KAMEEZ:</b>"
    document.getElementById("frontresult33").innerHTML = "FRONT DRAFT : (12-11-13-x-4-7-15a-1) ON-FOLD:(0-1) CUT : 1Pc"


    // Back Draft area
    var backone = Shoulder*1/2;
    var backtwo = frontthree;
    var backthree = frontfour;
    var backfour = (WaistRound/4)+1.5;
    var backfive = (1/4*HipRound)+2;
    var backsix = frontseven;
    var backfive = (1/4*HipRound)+2;



    // Display result Back Draft
    document.getElementById("backdraft").innerHTML = "<b>Back Draft</b>";
    document.getElementById("backresult1").innerHTML = "(0-1) = Kameez length =" + frontone+"cm";
    document.getElementById("backresult2").innerHTML = "(0-2) = ½ of Shoulder ="+backone+"cm";
    document.getElementById("backresult3").innerHTML = "(0-3) = 1/6th of Bust round + 1.5 cm (ease) ="+backtwo+"cm";
    document.getElementById("backresult4").innerHTML = "(3-4) = 1/4th of Bust round + 2.5cm (ease) ="+backthree+"cm";
    document.getElementById("backresult5").innerHTML = "Square down from 2 onto (3-4) line and mark 5";
    document.getElementById("backresult6").innerHTML = "(0-6) = Waist length ="+Waistlength+"cm";
    document.getElementById("backresult7").innerHTML = "(6-7) = 1/4th of Waist round + 1.5 cm (ease) ="+backfour+"cm";
    document.getElementById("backresult8").innerHTML = "Join (4-7) with a straight line";
    document.getElementById("backresult9").innerHTML = "(6-8) = Waist to hip ="+Waisttohip+"cm";
    document.getElementById("backresult10").innerHTML = "(8-9) = 1/4th of Hip round + 2 cm (ease) ="+backfive+"cm";
    document.getElementById("backresult31").innerHTML = "Join (7-9) with a smooth curve for waist to hip curve";
    document.getElementById("backresult11").innerHTML = "Square across from 1 and square down from 9 and mark 10";
    document.getElementById("backresult12").innerHTML = "(9-9a) = 5cm (for slits marking)";
    document.getElementById("backresult13").innerHTML = "Join (9a-10) with a straight line";
    document.getElementById("backresult14").innerHTML = "(0-11) = Back neck width = 1/12th of Bust round + 1 cm (ease) ="+backsix+"cm";
    document.getElementById("backresult15").innerHTML = "(0-12) = Back neck depth ="+Backneckdepth+"cm";
    document.getElementById("backresult17").innerHTML = "Join (11-12) with a smooth curve for back neck line";
    document.getElementById("backresult18").innerHTML = "(2-13) = Shoulder slope = 1.5cm";
    document.getElementById("backresult19").innerHTML = "Join (11-13) with a straight line";
    document.getElementById("backresult20").innerHTML = "14 is the midpoint of (5-13)";
    document.getElementById("backresult21").innerHTML = "(5-x) = 2.5cm";
    document.getElementById("backresult22").innerHTML = "Join (13-14-x-4) with a smooth curve for back armhole curve";
    document.getElementById("backresult23").innerHTML = "(10-15)=10cm(flare)";
    document.getElementById("backresult24").innerHTML = "From 15 join gradually to waist to hip curve with a straight line.";
    document.getElementById("backresult25").innerHTML = "(15-15a)=2.5cm";
    document.getElementById("backresult26").innerHTML = "From 15a shape hem line.";
    document.getElementById("backresult27").innerHTML = "<b>Cutting Points:</b>";
    document.getElementById("backresult27").innerHTML = "<b>KAMEEZ WITH SLITS:</b>";
    document.getElementById("backresult28").innerHTML = "BACK DRAFT : (12-11-13-14-x-4-7-9a-10-1) ON-FOLD:(0-1) CUT : 1Pc";
    document.getElementById("backresult29").innerHTML = "<b>A-LINE KAMEEZ:</b>";
    document.getElementById("backresult30").innerHTML = "BACK DRAFT : (12-11-13-14-x-4-7-15a-1) ON-FOLD:(0-1) CUT : 1Pc";

    
}