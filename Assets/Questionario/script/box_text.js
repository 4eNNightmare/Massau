#pragma strict

var posiX      : float;
var posiY      : float;
var altura     : float;
var largura    : float;
var perSkin    : GUISkin;

function Start () {

	altura  = 100;
	largura = 270;
	//Tela 1280 x 600
	posiX = Screen.width/2 - largura/2 - 450;//posiX = Screen.width/2 - largura/2 - 450;
	posiY = Screen.width/2 - altura/2 - 500;//posiY = Screen.width/2 - altura/2 - 500;

}

function Update () {

}
function OnGUI()
{

	
	//GUI.backgroundColor = Color.blue;
	
	//GUI.contentColor = Color.red;
	
	GUI.Box(Rect(0,0,Screen.width/2 - largura/2-100,Screen.height/2 - altura/2+250)," ");//Criar - boxshadow fundo escuro
	

}