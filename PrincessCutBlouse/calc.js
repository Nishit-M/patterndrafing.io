function calculateArea() {
    // Get user input
    var blouseLength = document.getElementById("Blouselength").valueAsNumber;
    var shoulder = document.getElementById("Shoulder").value;
    var bustRound = document.getElementById("BustRound").value;
    var empireRound = document.getElementById("Empire-Round").value;    
    var sleeveLength = document.getElementById("SleeveLength").valueAsNumber;
    var apexLevel = document.getElementById("ApexLevel").value;
    var frontNeckDepth = document.getElementById("FrontNeckDepth").value;
    var backNeckDepth = document.getElementById("BackNeckDepth").value;
    var sleeveRound = document.getElementById("SleeveRound").value;


    // Validate input
    // if (blouseLength === "" || blouseLength === "") {
    //     alert("Please enter values for both length and width.");
    //     return;
    // }

    // Back Draft area
    var backone = blouseLength;
    var backtwo = 1/2*shoulder-4;
    var backthree = 1/6*bustRound;
    var backfour = 1/4*bustRound;
    var backfive = 1/4*empireRound+2.5;
    var backseven = 1/12*bustRound+1;
    var backeight = backNeckDepth;
    var backtwelve = 1/12*bustRound+1;




   
    




    // Display result Back Draft
    document.getElementById("backdraft").innerHTML = "<b>Back Draft</b>";
    document.getElementById("backresult1").innerHTML = "(0-1) Full Length is : " + backone+"cm";
    document.getElementById("backresult2").innerHTML = "(0-2) 1/2*shoulder-4 =  " + backtwo+"cm";
    document.getElementById("backresult3").innerHTML = "(0-3) 1/6*bustRound =  " + backthree+"cm";
    document.getElementById("backresult4").innerHTML = "(3-4) 1/4*bustRound =  " + backfour+"cm";
    document.getElementById("backresult5").innerHTML = "(1-5) 1/4*empireRound+2.5 =  " + backfive+"cm";
    document.getElementById("backresult6").innerHTML = "Join '4' and '5' with a straing line";
    document.getElementById("backresult7").innerHTML = "Square down from '2' to '6'";
    document.getElementById("backresult8").innerHTML = "(0-7) 1/12*bustRound+1 = " + backseven+"cm";
    document.getElementById("backresult9").innerHTML = "(0-8) Back Neck Depth : " + backeight +" or as desired and shape neckline curve ";
    document.getElementById("backresult10").innerHTML = "(2-9) = Shoulder Slope = 0.5cm";
    document.getElementById("backresult11").innerHTML = "10 is mid-point of 9 and 6";
    document.getElementById("backresult12").innerHTML = "(6-11) = 2.5cm and Shape of armhole curve";
    document.getElementById("backresult13").innerHTML = "(1-12) 1/12*bustRound+1 = " + backtwelve+"cm";
    document.getElementById("backresult14").innerHTML = "(12-13) 8 to 10cms";
    document.getElementById("backresult15").innerHTML = "(12-13) 8 to 10cms";
    document.getElementById("backresult16").innerHTML = "(12-a) = (12-b) = 1.25cm and Join (13-a) and (13-b)";
    document.getElementById("backresult17").innerHTML = "<b>Cutting Points:</b>";
    document.getElementById("backresult18").innerHTML = "Back Draft:(8-7-9-10-11-4-5-1)  ON-FOLD:(0-1) Cut:1PC";


    // Front Draft area
    var frontone = blouseLength+2.0;
    var fronttwo = 1/2*shoulder-4;
    var frontthree = 1/6*bustRound;
    var frontfour = 1/4*bustRound+1;
    var frontfive = 1/4*empireRound+5;
    var frontseven = 1/12*bustRound+1;
    var fronteight = 1/12*bustRound;
    var fronttwelve = fronteight-1.5;
    var frontthirteen = 1/4*empireRound;
    var fronttwelve = fronteight-1.5;
    var frontfourteen = apexLevel;
    var front15 = 1/12*bustRound+1;

    // Display result Front Draft
    document.getElementById("frontdraft").innerHTML = "<b>Front Draft</b>";
    document.getElementById("frontresult1").innerHTML = "(0-1) Full Length +2cm = " + frontone+"cm";
    document.getElementById("frontresult2").innerHTML = "(0-2) 1/2*shoulder-4 =  " + fronttwo+"cm";
    document.getElementById("frontresult3").innerHTML = "(0-3) 1/6*bustRound =  " + frontthree+"cm";
    document.getElementById("frontresult4").innerHTML = "(3-4) 1/4*bustRound + 1cm=  " + frontfour+"cm";
    document.getElementById("frontresult5").innerHTML = "(1-5) 1/4*empireRound+5cm(dart) =  " + frontfive+"cm";
    document.getElementById("frontresult6").innerHTML = "Join '4' and '5'";
    document.getElementById("frontresult7").innerHTML = "Square down from '2' to '6'";
    document.getElementById("frontresult8").innerHTML = "(0-7) 1/12*bustRound+1 = " + frontseven+"cm";
    document.getElementById("frontresult9").innerHTML = "(0-8) Back Neck Depth = 15cm and Shape neckline curve ";
    document.getElementById("frontresult10").innerHTML = "(2-9) = Shoulder Slope = 0.5cm";
    document.getElementById("frontresult11").innerHTML = "(6-10) = 1cm and Join 2 to 10 with a straight line";
    document.getElementById("frontresult12").innerHTML = "(10-11) = 2cm and join (9-11-4) with a curve";
    document.getElementById("frontresult13").innerHTML = "(1-12) = 2cm, join (1-12) with a smooth curve";
    document.getElementById("frontresult16").innerHTML = "(0-13) = Apex Level = "+frontfourteen+"cm";
    document.getElementById("frontresult17").innerHTML = "(13-14) = 1/12 Bust Round + 1cm = "+front15+"cm";
    document.getElementById("frontresult18").innerHTML = "Square down from 14 and mark 15 on to (12-5) curve."
    document.getElementById("frontresult19").innerHTML = "(15-a)=(15-b) = 2.5cm Join (a-14-b)"
    document.getElementById("frontresult20").innerHTML = "Join (11-14) with a smooth curve"
    document.getElementById("frontresult21").innerHTML = "(11-16) = 7cms on (11-14) line"
    document.getElementById("frontresult22").innerHTML = "(11-c)=(11-d)=0.5cms"
    document.getElementById("frontresult23").innerHTML = "Join (c-16) with a smooth curve (center panel style line)"
    document.getElementById("frontresult24").innerHTML = "Join (d-16) with a smooth curve (side panel style line)"
    document.getElementById("frontresult30").innerHTML = "<b>Cutting Points:</b>";
    document.getElementById("frontresult31").innerHTML = "Center Front Panel: (8-7-9-c-16-14-a-12) On-Fold:(8-12) Cut: 1pc"
    document.getElementById("frontresult32").innerHTML = "Side Panel : (d-16-14-b-5-4-d) Cut: 2pcs"


    // Sleeve Draft area
    var sleeveone = sleeveLength;
    var sleevetwo = 1/5*bustRound+1.5;
    var sleevethree = 1/12*bustRound+1;
    var sleevefour = 1/2*sleeveRound;
    var sleevefive = sleevefour+1.5;


    
    // Display result Sleeve Draft
    document.getElementById("sleevedraft").innerHTML = "<b>Sleeve Draft</b>";
    document.getElementById("sleeveresult1").innerHTML = "(0-1) Sleeve Length is : " + sleeveone+"cm";
    document.getElementById("sleeveresult2").innerHTML = "(0-2) 1/5*Bust Round+1.5cm =  " + sleevetwo+"cm";
    document.getElementById("sleeveresult3").innerHTML = "(2-3) 1/12*bustRound+1cm =  " + sleevethree+"cm";
    document.getElementById("sleeveresult4").innerHTML = "(1-4)=1/2 sleeve round =  " + sleevefour+"cm";
    document.getElementById("sleeveresult5").innerHTML = "Join 3-4 with a straing line";
    document.getElementById("sleeveresult6").innerHTML = "Divide 0 to 3 into 4 equal parts and mark it as '5','6', and '7' respectiverly";
    document.getElementById("sleeveresult7").innerHTML = "Mark (5-a) = 1.5cm, (6-b)=1.25cm, (7-c), (7-c`) = 0.5cm";
    document.getElementById("sleeveresult8").innerHTML = "Join 0-a-b-c-3 with smooth curve for back sleeve cap and 0-6-c`-3 with a smooth curve for front sleeve cap";
    document.getElementById("sleeveresult9").innerHTML = "(1-x) = 2cm fro hem fold.";
    document.getElementById("sleeveresult10").innerHTML = "(x-y) = (1-4) + 1.5cm ="+sleevefive+"cm";
    document.getElementById("sleeveresult11").innerHTML = "<b>Cutting Points:</b>";
    document.getElementById("sleeveresult12").innerHTML = "Sleeve: (0-a-b-c-3-4-y-x)  ON-FOLD:(0-1) CUT:2pcs";










}