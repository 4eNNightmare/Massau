#pragma strict

var posicaoX: float;
var posicaoY: float;

var alt: float;
var larg: float;

var perSkin: GUISkin;

private var PodeApertar : boolean = true;

var posXb      : float;
var posYb      : float;
var alturaB     : float;
var larguraB    : float;

function Start () 
{
	alt  = 40;
	larg = 80;

	larguraB = 200;//500
	alturaB = 100;//400
	posXb = Screen.width/2 - larguraB/2;
	posYb = Screen.height/2 - alturaB/2 +30;

}



function Update () {

}
function OnGUI ()
{
	
	GUI.Box(Rect(posXb,posYb,larguraB,alturaB)," ");//Criar - boxshadow fundo escuro
	GUI.Box(Rect(0,0, Screen.width, Screen.height)," ");//Criar - boxshadow fundo escuro - tela cheia
	GUI.skin = perSkin;
	
	
	posicaoX = (Screen.width/2 - larg/2)-50;
	posicaoY = (Screen.height/2 - alt/2)-(-30);
	
	if(GUI.Button (Rect(posicaoX,posicaoY,larg,alt),"Sim"))
	{
		
		Application.LoadLevel("MenuP");
	}
	
	
	posicaoX = (Screen.width/2 - larg/2) +50;
	posicaoY = (Screen.height/2 - alt/2)-(-30);
	
	if (GUI.Button (Rect(posicaoX,posicaoY,larg,alt),"Nao"))
	{
		Application.LoadLevel("MenuP");
	}
}