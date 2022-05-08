console.log("Hey there is a secret final level here!")

var idBtn = document .querySelector("#btn");

idBtn.addEventListener("click", function() {
    console.log("Hello, Kirby, Mario, and Sonic's friends!")
    alert("You can humbly watch Rainimator, eat some snacks, and play some disgustingly horrible murderously games!")
}); 
idBtn.addEventListener("click", function () {
    var royHamster = confirm("Is roy a hamster?");
    var ryanLizard = confirm("Is ryan a lizard?");
    var davePig = confirm("Is Dave a pig?")
    console.log("royHamster", royHamster);
    console.log("ryanLizard", ryanLizard);
    if (royHamster === true && ryanLizard === true) {
      alert("Holly molly Roy is a hamster!!!! and Ryan is a wild lizard that someday, its destiny became a monstrous, huge, evil dragon where it had wings, spitted blue fire and poison, and it had impenetrable skin! Then Dave became a pig that cracked from an egg and evolved until it became the most powerful pig every Minecraft player knows: Technoblade!");
      alert("Holly molly Ryan is eating Roy! Roy dies to his death, but he became a hamster skeleton, which bites Ryan, and he turned into a skeleton and he fell to the lava, ending his second life!");
      alert("Ryan came out of the egg kindly. He was friends with Technoblade, until he accidentally did a lot of damage to Ryan. Angry, he became a full time dragon and tried to kill Dave the Pig!")
    } else if (royHamster === true) {
      alert("Ryan sold the hamster! The poor hamster got dead, never to be seen again!");
    } else if (ryanLizard === true) {
      alert("Roy eventually became a kirby, and that he swallowed Ryan Park! Happy Ending!");
    }
    else if (DavePig === true) {
         alert("Dave became friends with Dream, and together they beat the smart, powerful, big bad ender lizard, Ryan!")
     }
  });
