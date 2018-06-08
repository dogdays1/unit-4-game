// javascript

$(document).ready(function () {

    var wins = 0;
    var loss = 0;
    var score = 0;
    var hidden = random(20, 121);
    var rubyVal = random(2, 13);
    var emeraldVal = random(2, 13);
    var diamondVal = random(2, 13);
    var sapphireVal = random(2, 13);

    function random(y, z) {
        return (Math.floor(Math.random() * (z - y)) + y);
    };
    randNum ();
    tally ();
    console.log(hidden);
    console.log(rubyVal);
    console.log(emeraldVal);
    console.log(diamondVal);
    console.log(sapphireVal);
    function winLoss() {
        if (score < hidden) {
            console.log("keep going");
            tally ();
        }
        else if (score === hidden) {
            wins++;
            reset();
            tally();
            setTimeout(function () {
                alert("You win!!  I've given you a new target.  Click any Crystal to begin again");
              }, 1000)
            //figure out why alert showing before tally and reset run, async problem? need timer??
        }
        else {
            loss++;
            reset();
            tally();
            setTimeout(function () {
                alert("You went over and lost! I've given you a new target.  Click any Crystal to begin again.");
              }, 1000)           
         //   alert("You lose!! Click any Crystal to begin again");
        }
    }


    $("#ruby").on("click", function () {
        score = score + rubyVal;
        // alert(score);
        winLoss();
    })
    $("#emerald").on("click", function () {
        //   alert("You clicked the Emerald");
        score = score + emeraldVal;
        // alert(score);
        winLoss();
    })
    $("#diamond").on("click", function () {
        // alert("You clicked the Diamond");
        score = score + diamondVal;
        // alert(score);
        winLoss();
    })
    $("#sapphire").on("click", function () {
        // alert("You clicked the Sapphire");
        score = score + sapphireVal;
        // alert(score);
        winLoss();
    })
    function tally() {
        $(".myScore").html("<p>Points: " + score + "</p><p>Wins: " + wins +
            "</p><p>Losses: " + loss + "</p>");
    }
    function randNum () {
        $(".randNum").html(hidden);
    }
    function reset() {
        score = 0;
        hidden = random(20, 121);
        rubyVal = random(2, 13);
        emeraldVal = random(2, 13);
        diamondVal = random(2, 13);
        sapphireVal = random(2, 13);
        randNum ();
        console.log(hidden);
        console.log(rubyVal);
        console.log(emeraldVal);
        console.log(diamondVal);
        console.log(sapphireVal);
        //ask a TA why "var" messed it up
    };


});


