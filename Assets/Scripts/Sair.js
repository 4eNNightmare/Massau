#pragma strict

var posicaoX: float;
var posicaoY: float;


var alt: float;
var larg: float;


function Start () {
alt  = 40;
larg = 80;

}

function Update () {

}
function OnGUI ()
{
//GUI.Box(Rect(0,0,Screen.width/2 - larg/2-100,Screen.height/2 - alt/2+250)," ");

posicaoX = (Screen.width/2 - larg/2)-240;
posicaoY = (Screen.height/2 - alt/2)-40;
if(GUI.Button (Rect(posicaoX,posicaoY,larg,alt),"Sim"))
{
	Application.Quit();
	}

posicaoX = (Screen.width/2 - larg/2) -140;
posicaoY = (Screen.height/2 - alt/2)- 40;
if (GUI.Button (Rect(posicaoX,posicaoY,larg,alt),"Nao"))
	{
	Application.LoadLevel("MenuP");
   }
}
