
function onLoad()
{
	updatePlanet();
	updateZoneDatabase();
	updateZones(sector);
	
	if (window.screen.availWidth > 700)
	{
		onscroll = function() 
		{
			var speedratio = 16;
			var posX = (document.documentElement.scrollLeft) ? document.documentElement.scrollLeft : window.pageXOffset;
			var posY = (document.documentElement.scrollTop) ? document.documentElement.scrollTop : window.pageYOffset;
			
			var spacebg = document.getElementById('spacebg');
			var xParallax = -(posX / speedratio);
			var yParallax = -(posY / speedratio);
			spacebg.style.backgroundPosition = xParallax+ "px " + yParallax + "px"; 
		}
	}
}

function zoneClass()
{
	var label;
	var bonus;
	var owner;
	var faction;
	var image;
}

function planetClass()
{
	this.z1 = new zoneClass();
	this.z2 = new zoneClass();
	this.z3 = new zoneClass();
	this.z4 = new zoneClass();
	this.z5 = new zoneClass();
	this.z6 = new zoneClass();
	this.z7 = new zoneClass();
	
	var description;
	//this.value = new var;
}

function sectorClass()
{
	this.p1 = new planetClass();
	this.p2 = new planetClass();
	this.p3 = new planetClass();
	this.p4 = new planetClass();
	this.p5 = new planetClass();

}
var sector = new sectorClass();

function updatePlanet()
{
	document.getElementById("p1").src="BaphometArt\\baphometprime.png";
	document.getElementById("p2").src="BaphometArt\\mithras.png";
	document.getElementById("p3").src="BaphometArt\\aleister.png";
	document.getElementById("p4").src="BaphometArt\\gnost.png";
	document.getElementById("p5").src="BaphometArt\\warptear.png";

	document.getElementById("p1").title="Baphomet Prime";
	document.getElementById("p2").title="Mithras";
	document.getElementById("p3").title="Aleister";
	document.getElementById("p4").title="Gnost";
	document.getElementById("p5").title="Baphomet Rising";
}

function updateZoneDatabase()
{
	/* Planet 1 */
	sector.p1.title="Baphomet Prime";
	sector.p1.description="Once the Imperium's primary Starport in the Baphomet Sector, Baphomet Prime's thousand story Hive cities lay in ruin.<br><br>Strange arcane energies hum in the place of old Imperial power manufactorums, clear evidence that the Necron Tomb World has been re-taken by its old lords once again.";
	sector.p1.value = 3;
		
	sector.p1.z1.label="Baphomet Prime Zone 1";
	sector.p1.z1.bonus="Intelligence Agency";
	sector.p1.z1.bonusDescription="Due to careful planning and clandestine espionage, you may choose the game type, deployment type, and deployment order of this battle.<br><br>Note: The player who deployed first can still choose to take the first or second turn. This bonus does not affect either player's ability to seize the initiative.";
	sector.p1.z1.owner="Waaagh! Humungus";
	sector.p1.z1.faction="Xenos (Chaos)";
	sector.p1.z1.image="badmoon.png";
	
	sector.p1.z2.label="Baphomet Prime Zone 2";
	sector.p1.z2.bonus="Orbital Shipyard";
	sector.p1.z2.bonusDescription="Once per game, during your shooting phase, make a shooting attack with the following profile. This attack does not benefit from any model's ballistic skill.<br><br>Range: Unlimited<br> Strength: 10 <br>AP: 1 <br>Type: Ordnance 1, Barrage, Large Blast";
	sector.p1.z2.owner="Hive Fleet Morlakii";
	sector.p1.z2.faction="Xenos (Chaos)";
	sector.p1.z2.image="morlakii.png";
	
	sector.p1.z3.label="Baphomet Prime Zone 3";
	sector.p1.z3.bonus="System Governor's Estate";
	sector.p1.z3.bonusDescription="Place an additional objective marker inside a Ruin terrain piece. If you hold this objective marker at the end of the game, score an additional d3+3 Victory Points. Your opponent cannot score this objective, but may deny it from you as normal.";
	sector.p1.z3.owner="O'prah's 4th Sphere Expansion Force";
	sector.p1.z3.faction="Xenos (Order)";
	sector.p1.z3.image="oprah.png";
	
	sector.p1.z4.label="Baphomet Prime Zone 4";
	sector.p1.z4.bonus="Necron Dig Site";
	sector.p1.z4.bonusDescription="Once per game, immediately after any player attempts any dice roll, declare that you are using the Time Reverse Tesseract. All dice in that throw must be re-rolled.<br><br>Note: This includes both successful and failed results in any single roll, such as every shot fired by a single unit, every to-wound roll made at the same initiative value, or both dice in a leadership test.<br><br>Note: Remember that a single die may only ever be re-rolled once. For example, this does not enable two re-rolls with twin linked weapons."
	sector.p1.z4.owner="Sekemtar Dynasty";
	sector.p1.z4.faction="Xenos (Chaos)";
	sector.p1.z4.image="necron.png";


	/* Planet 2 */
	sector.p2.title="Mithras";
	sector.p2.description="A humid world, with an atmosphere thick enough to trouble breathing in most humanoids, Mithras is home to a spectacular variety of deadly indigenous life.<br><br>The besieged defenders must not only secure their foothold from their enemies, but also the local fauna.";
	sector.p2.value = 3;
	
	sector.p2.z1.label="Mithras Zone 1";
	sector.p2.z1.bonus="Ballistics Training";
	sector.p2.z1.bonusDescription="One unit in your army may fire twice in your Shooting phase. The second target may be different from the first target.";
	sector.p2.z1.owner="Hive Fleet Morlakii";
	sector.p2.z1.faction="Xenos (Chaos)";
	sector.p2.z1.image="morlakii.png";
	
	sector.p2.z2.label="Mithras Zone 2";
	sector.p2.z2.bonus="Fortified Garrison";
	sector.p2.z2.bonusDescription="You receive an additional 10% boost in points to use when constructing your army list.<br><br>For example: 25 extra points at 250, or 150 extra points at 1500.";
	sector.p2.z2.owner="Hive Fleet Charlene";
	sector.p2.z2.faction="Xenos (Chaos)";
	sector.p2.z2.image="tyranid.png";
	
	sector.p2.z3.label="Mithras Zone 3";
	sector.p2.z3.bonus="Venmous Wildlife";
	sector.p2.z3.bonusDescription="Using the local wildlife's natural venom, one unit in your army receives the Poisoned special rule on all equipped weapons.";
	sector.p2.z3.owner="Rauck-Chauv Waaagh!";
	sector.p2.z3.faction="Xenos (Chaos)";
	sector.p2.z3.image="ork.png";
	
	sector.p2.z4.label="Mithras Zone 4";
	sector.p2.z4.bonus="Intelligence Headquarters";
	sector.p2.z4.bonusDescription="You may select the game and deployment type, rather than roll randomly.";
	sector.p2.z4.owner="Hive Fleet Morlakii";
	sector.p2.z4.faction="Xenos (Chaos)";
	sector.p2.z4.image="morlakii.png";


	/* Planet 3 */
	sector.p3.title="Aleister";
	sector.p3.description="Once a verdant world, lush with rolling plains and vast crystal clear oceans, Aleister has recently become a fierce warzone.<br><br>Fierce inter-factional fighting with no clear winner has pockmarked the once beautiful surface with craters, black smoke chokes the air, and thick oil spills pollute the waters.";
	sector.p3.value = 3;
	
	sector.p3.z1.label="Aleister Zone 1";
	sector.p3.z1.bonus="Daemonic Influence";
	sector.p3.z1.bonusDescription="Tendrils of Baphomet are corrupting the local population, causing hideous mutations and instability in spacetime. One unit in your army gains the Daemon special rule.";
	sector.p3.z1.owner="Clan Raukaan Predators";
	sector.p3.z1.faction="Imperium (Order)";
	sector.p3.z1.image="ClanRaukaan.png";
	
	sector.p3.z2.label="Aleister Zone 2";
	sector.p3.z2.bonus="Shield Generator Manufactorum";
	sector.p3.z2.bonusDescription="Nominate one model in your army. That model, and all models within 6\", receives a 5++ invulnerable save against any shooting attacks.<br><br>If the bearer is embarked in a vehicle, then the vehicle receives a 5++ invulnerable save against any shooting attacks instead.";
	sector.p3.z2.owner="Waaagh! Humungus";
	sector.p3.z2.faction="Xenos (Orks)";
	sector.p3.z2.image="badmoon.png";
	
	sector.p3.z3.label="Aleister Zone 3";
	sector.p3.z3.bonus="Wych Cult Contacts";
	sector.p3.z3.bonusDescription="Rumors hold that the Dark Eldar have developed a new, untested, adrenal stimulant called Sadism. One non-vehicle unit in your army gains the Fearless, Rage, Rampage, and Feel No Pain special rules, but suffers d6 Wounds at the end of your turn. Armor and cover saves may not be taken against these Wounds.";
	sector.p3.z3.owner="Hive Fleet Charlene";
	sector.p3.z3.faction="Xenos (Chaos)";
	sector.p3.z3.image="tyranid.png";
	
	sector.p3.z4.label="Aleister Zone 4";
	sector.p3.z4.bonus="Ammunition Manufactorum";
	sector.p3.z4.bonusDescription="During your deployment phase, you may deploy one Manufactorum, as described on Page 185 of The Rules.";
	sector.p3.z4.owner="Crusade Castigatus";
	sector.p3.z4.faction="Imperium (Order)";
	sector.p3.z4.image="Templar.png";


	/* Planet 4 */
	sector.p4.title="Gnost";
	sector.p4.description="Gnost has seen hundreds of local fiefdoms rise and fall over the centuries, but unexplained circumstances have rendered its atmosphere arid and dehydrated.<br><br>Crusade Castigatus suffered the harsh desert to secure a foothold in the sector, but strange spores from Hive Fleet Charlene have begun to appear, threatening to bring life back to this barren wasteland.";
	sector.p4.value = 3;
	
	sector.p4.z1.label="Gnost Zone 1";
	sector.p4.z1.bonus="Arma Manufactorum";
	sector.p4.z1.bonusDescription="War materiel is in high demand from the local Manufactorums. One unit in your army gains the Master-crafted special rule on all equipped weapons.";
	sector.p4.z1.owner="Clan Raukaan Predators";
	sector.p4.z1.faction="Imperium (Order)";
	sector.p4.z1.image="ClanRaukaan.png";
	
	sector.p4.z2.label="Gnost Zone 2";
	sector.p4.z2.bonus="Satellite Control Node";
	sector.p4.z2.bonusDescription="No reserves rolls can be made this game turn (including your own).";
	sector.p4.z2.owner="Clan Raukaan Predators";
	sector.p4.z2.faction="Imperium (Order)";
	sector.p4.z2.image="ClanRaukaan.png";
	
	sector.p4.z3.label="Gnost Zone 3";
	sector.p4.z3.bonus="Promethium Pipeline";
	sector.p4.z3.bonusDescription="Due to increase promethium production in a newly discovered underground reservoir, all Template Weapons in your army gain the Master-crafted special rule.";
	sector.p4.z3.owner="Hive Fleet Morlakii";
	sector.p4.z3.faction="Xenos (Chaos)";
	sector.p4.z3.image="morlakii.png";
	
	sector.p4.z4.label="Gnost Zone 4";
	sector.p4.z4.bonus="Holographic Trenchworks";
	sector.p4.z4.bonusDescription="Immediately before either player seizes the initiative, you may add or remove up to 3 non-fortification terrain pieces to or from the table.";
	sector.p4.z4.owner="Hive Fleet Charlene";
	sector.p4.z4.faction="Xenos (Chaos)";
	sector.p4.z4.image="tyranid.png";


	/* Planet 5 */
	sector.p5.title="Baphomet Rising";
	sector.p5.description="Amid the chaos of the Baphomet Sector, a loyal Imperium Supply Ship suddenly emerges from the Immaterium, broadcasting a distress signal on all open channels.<br><br>The transmission ends abruptly as the ship is torn apart. Flashes of the Immaterium escaped into reality as the rift started to grow, its own chaotic energies helping to stabilize its presence where it decidedly does not belong.";
	sector.p5.value = 6;
	
	sector.p5.z1.label="Baphomet Rising 1";
	sector.p5.z1.bonus="Sanctic Daemonaology";
	sector.p5.z1.bonusDescription="Your Warlord becomes a Mastery Level 2 Psyker, and gains access to the Sanctic Daemonaology Psychic Discipline. <br><br>If your Warlord was already a Psyker, instead gain 2 additional Mastery Levels, and gain access to the Sanctic Daemonaology Psychic Discipline. <br><br>Ignore the increased chance to peril for this discipline, described on page 28 of the Rulebook.";
	sector.p5.z1.owner="Sekemtar Dynasty";
	sector.p5.z1.faction="Xenos (Chaos)";
	sector.p5.z1.image="necron.png";

	sector.p5.z2.label="Baphomet Rising 2";
	sector.p5.z2.bonus="Telepathy";
	sector.p5.z2.bonusDescription="Your Warlord becomes a Mastery Level 2 Psyker, and gains access to the Telepathy Psychic Discipline. <br><br>If your Warlord was already a Psyker, instead gain 2 additional Mastery Levels, and gain access to the Telepathy Psychic Discipline.";
	sector.p5.z2.owner="Hive Fleet Morlakii";
	sector.p5.z2.faction="Xenos (Chaos)";
	sector.p5.z2.image="morlakii.png";
	
	sector.p5.z3.label="Baphomet Rising 3";
	sector.p5.z3.bonus="Telekinesis";
	sector.p5.z3.bonusDescription="Your Warlord becomes a Mastery Level 2 Psyker, and gains access to the Telekinesis Psychic Discipline. <br><br>If your Warlord was already a Psyker, instead gain 2 additional Mastery Levels, and gain access to the Telekinesis Psychic Discipline.";
	sector.p5.z3.owner="Iyanden House Xe'fa";
	sector.p5.z3.faction="Xenos (Order)";
	sector.p5.z3.image="Iyanden.png";
	
	sector.p5.z4.label="Baphomet Rising 4";
	sector.p5.z4.bonus="Pyromancy";
	sector.p5.z4.bonusDescription="Your Warlord becomes a Mastery Level 2 Psyker, and gains access to the Pyromancy Psychic Discipline. <br><br>If your Warlord was already a Psyker, instead gain 2 additional Mastery Levels, and gain access to the Pyromancy Psychic Discipline.";
	sector.p5.z4.owner="Iyanden House Xe'fa";
	sector.p5.z4.faction="Xenos (Order)";
	sector.p5.z4.image="Iyanden.png";
	
	sector.p5.z5.label="Baphomet Rising 5";
	sector.p5.z5.bonus="Biomancy";
	sector.p5.z5.bonusDescription="Your Warlord becomes a Mastery Level 2 Psyker, and gains access to the Biomancy Psychic Discipline. <br><br>If your Warlord was already a Psyker, instead gain 2 additional Mastery Levels, and gain access to the Biomancy Psychic Discipline.";
	sector.p5.z5.owner="Iyanden House Xe'fa";
	sector.p5.z5.faction="Xenos (Order)";
	sector.p5.z5.image="Iyanden.png";
	
	sector.p5.z6.label="Baphomet Rising 6";
	sector.p5.z6.bonus="Divination";
	sector.p5.z6.bonusDescription="Your Warlord becomes a Mastery Level 2 Psyker, and gains access to the Divination Psychic Discipline. <br><br>If your Warlord was already a Psyker, instead gain 2 additional Mastery Levels, and gain access to the Divination Psychic Discipline.";
	sector.p5.z6.owner="Rauck-Chauv Waaagh!";
	sector.p5.z6.faction="Xenos (Chaos)";
	sector.p5.z6.image="ork.png";
	
	sector.p5.z7.label="Baphomet Rising 7";
	sector.p5.z7.bonus="Malefic";
	sector.p5.z7.bonusDescription="Your Warlord becomes a Mastery Level 2 Psyker, and gains access to the Malefic Daemonaology Psychic Discipline. <br><br>If your Warlord was already a Psyker, instead gain 2 additional Mastery Levels, and gain access to the Malefic Daemonaology Psychic Discipline. <br><br>Ignore the increased chance to peril for this discipline, described on page 28 of the Rulebook.";
	sector.p5.z7.owner="Sekemtar Dynasty";
	sector.p5.z7.faction="Xenos (Chaos)";
	sector.p5.z7.image="necron.png";
}

function updateZones(sector)
{
	// Planet 1
	document.getElementById("p1z1").title=sector.p1.z1.label + "\n | Owner: " + sector.p1.z1.owner + "\n | Faction: " + sector.p1.z1.faction + "\n | Bonus: " + sector.p1.z1.bonus;
	document.getElementById("p1z1").src=sector.p1.z1.image;

	document.getElementById("p1z2").title=sector.p1.z2.label + "\n | Owner: " + sector.p1.z2.owner + "\n | Faction: " + sector.p1.z2.faction + "\n | Bonus: " + sector.p1.z2.bonus;
	document.getElementById("p1z2").src=sector.p1.z2.image;

	document.getElementById("p1z3").title=sector.p1.z3.label + "\n | Owner: " + sector.p1.z3.owner + "\n | Faction: " + sector.p1.z3.faction + "\n | Bonus: " + sector.p1.z3.bonus;
	document.getElementById("p1z3").src=sector.p1.z3.image;

	document.getElementById("p1z4").title=sector.p1.z4.label + "\n | Owner: " + sector.p1.z4.owner + "\n | Faction: " + sector.p1.z4.faction + "\n | Bonus: " + sector.p1.z4.bonus;
	document.getElementById("p1z4").src=sector.p1.z4.image;


	// Planet 2
	document.getElementById("p2z1").title=sector.p2.z1.label + "\n | Owner: " + sector.p2.z1.owner + "\n | Faction: " + sector.p2.z1.faction + "\n | Bonus: " + sector.p2.z1.bonus;
	document.getElementById("p2z1").src=sector.p2.z1.image;

	document.getElementById("p2z2").title=sector.p2.z2.label + "\n | Owner: " + sector.p2.z2.owner + "\n | Faction: " + sector.p2.z2.faction + "\n | Bonus: " + sector.p2.z2.bonus;
	document.getElementById("p2z2").src=sector.p2.z2.image;

	document.getElementById("p2z3").title=sector.p2.z3.label + "\n | Owner: " + sector.p2.z3.owner + "\n | Faction: " + sector.p2.z3.faction + "\n | Bonus: " + sector.p2.z3.bonus;
	document.getElementById("p2z3").src=sector.p2.z3.image;

	document.getElementById("p2z4").title=sector.p2.z4.label + "\n | Owner: " + sector.p2.z4.owner + "\n | Faction: " + sector.p2.z4.faction + "\n | Bonus: " + sector.p2.z4.bonus;
	document.getElementById("p2z4").src=sector.p2.z4.image;


	// Planet 3
	document.getElementById("p3z1").title=sector.p3.z1.label + "\n | Owner: " + sector.p3.z1.owner + "\n | Faction: " + sector.p3.z1.faction + "\n | Bonus: " + sector.p3.z1.bonus;
	document.getElementById("p3z1").src=sector.p3.z1.image;

	document.getElementById("p3z2").title=sector.p3.z2.label + "\n | Owner: " + sector.p3.z2.owner + "\n | Faction: " + sector.p3.z2.faction + "\n | Bonus: " + sector.p3.z2.bonus;
	document.getElementById("p3z2").src=sector.p3.z2.image;

	document.getElementById("p3z3").title=sector.p3.z3.label + "\n | Owner: " + sector.p3.z3.owner + "\n | Faction: " + sector.p3.z3.faction + "\n | Bonus: " + sector.p3.z3.bonus;
	document.getElementById("p3z3").src=sector.p3.z3.image;

	document.getElementById("p3z4").title=sector.p3.z4.label + "\n | Owner: " + sector.p3.z4.owner + "\n | Faction: " + sector.p3.z4.faction + "\n | Bonus: " + sector.p3.z4.bonus;
	document.getElementById("p3z4").src=sector.p3.z4.image;


	// Planet 4
	document.getElementById("p4z1").title=sector.p4.z1.label + "\n | Owner: " + sector.p4.z1.owner + "\n | Faction: " + sector.p4.z1.faction + "\n | Bonus: " + sector.p4.z1.bonus;
	document.getElementById("p4z1").src=sector.p4.z1.image;

	document.getElementById("p4z2").title=sector.p4.z2.label + "\n | Owner: " + sector.p4.z2.owner + "\n | Faction: " + sector.p4.z2.faction + "\n | Bonus: " + sector.p4.z2.bonus;
	document.getElementById("p4z2").src=sector.p4.z2.image;

	document.getElementById("p4z3").title=sector.p4.z3.label + "\n | Owner: " + sector.p4.z3.owner + "\n | Faction: " + sector.p4.z3.faction + "\n | Bonus: " + sector.p4.z3.bonus;
	document.getElementById("p4z3").src=sector.p4.z3.image;

	document.getElementById("p4z4").title=sector.p4.z4.label + "\n | Owner: " + sector.p4.z4.owner + "\n | Faction: " + sector.p4.z4.faction + "\n | Bonus: " + sector.p4.z4.bonus;
	document.getElementById("p4z4").src=sector.p4.z4.image;


	// Planet 5
	document.getElementById("p5z1").title=sector.p5.z1.label + "\n | Owner: " + sector.p5.z1.owner + "\n | Faction: " + sector.p5.z1.faction + "\n | Bonus: " + sector.p5.z1.bonus;
	document.getElementById("p5z1").src=sector.p5.z1.image;

	document.getElementById("p5z2").title=sector.p5.z2.label + "\n | Owner: " + sector.p5.z2.owner + "\n | Faction: " + sector.p5.z2.faction + "\n | Bonus: " + sector.p5.z2.bonus;
	document.getElementById("p5z2").src=sector.p5.z2.image;

	document.getElementById("p5z3").title=sector.p5.z3.label + "\n | Owner: " + sector.p5.z3.owner + "\n | Faction: " + sector.p5.z3.faction + "\n | Bonus: " + sector.p5.z3.bonus;
	document.getElementById("p5z3").src=sector.p5.z3.image;

	document.getElementById("p5z4").title=sector.p5.z4.label + "\n | Owner: " + sector.p5.z4.owner + "\n | Faction: " + sector.p5.z4.faction + "\n | Bonus: " + sector.p5.z4.bonus;
	document.getElementById("p5z4").src=sector.p5.z4.image;

	document.getElementById("p5z5").title=sector.p5.z5.label + "\n | Owner: " + sector.p5.z5.owner + "\n | Faction: " + sector.p5.z5.faction + "\n | Bonus: " + sector.p5.z5.bonus;
	document.getElementById("p5z5").src=sector.p5.z5.image;

	document.getElementById("p5z6").title=sector.p5.z6.label + "\n | Owner: " + sector.p5.z6.owner + "\n | Faction: " + sector.p5.z6.faction + "\n | Bonus: " + sector.p5.z6.bonus;
	document.getElementById("p5z6").src=sector.p5.z6.image;

	document.getElementById("p5z7").title=sector.p5.z7.label + "\n | Owner: " + sector.p5.z7.owner + "\n | Faction: " + sector.p5.z7.faction + "\n | Bonus: " + sector.p5.z7.bonus;
	document.getElementById("p5z7").src=sector.p5.z7.image;
}


function customAlert()
{
	this.planetRender = function(dialog)
	{
		document.getElementById('dialogboxhead').innerHTML = dialog.title;
		document.getElementById('dialogboxbody').innerHTML = dialog.description;
		document.getElementById('dialogboxfoot').innerHTML = "Bonus victory points: " + dialog.value;
		this.render();
	}
	
	this.zoneRender = function(dialog)
	{
		document.getElementById('dialogboxhead').innerHTML = dialog.label;
		document.getElementById('dialogboxbody').innerHTML = "Owner: " + dialog.owner + "<br>Faction: " + dialog.faction + "<br>Bonus: " + dialog.bonus;
		document.getElementById('dialogboxbonusdescription').innerHTML = dialog.bonusDescription;	
		this.render();	
	}
	
	this.render = function()
	{
		document.getElementById('dialogoverlay').style.height = window.innerHeight+"px";
		document.getElementById('dialogbox').style.left = (window.innerWidth/2) - (550/2)+"px";
		document.getElementById('dialogbox').style.top = "100px";
		
		document.getElementById('dialogoverlay').style.display = "block";
		document.getElementById('dialogbox').style.display = "block";
		document.getElementById('dialogboxbonusdescription').style.display = "block";
		document.getElementById('dialogboxfoot').style.display ="block";	
	
	}
	
	this.ok = function()
	{
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
		document.getElementById('dialogboxfoot').style.display = "none";
		document.getElementById('dialogboxbonusdescription').style.display = "none";
		
		document.getElementById('dialogboxhead').innerHTML = "";
		document.getElementById('dialogboxbody').innerHTML = "";
		document.getElementById('dialogboxfoot').innerHTML = "";
		document.getElementById('dialogboxbonusdescription').innerHTML = "";	
	}
}
var Alert = new customAlert();

