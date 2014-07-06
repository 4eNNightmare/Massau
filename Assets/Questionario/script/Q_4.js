#pragma strict

var posiX      : float;
var posiY      : float;
var altura     : float;
var largura    : float;
var perSkin    : GUISkin;


function Start () 
{
	altura  = 100;
	largura = 250;
	
	posiX = Screen.width/2 - largura/2 - 450;
	posiY = Screen.width/2 - altura/2 - 500;
	
	
}

function Update () {

}

function OnGUI()
{
	/*
	posiX = Screen.width/2 - largura/2 - (Screen.width/2-50);
	posiY = Screen.width/2 - altura/2 - (Screen.height/2-50);
	*/
	GUI.skin = perSkin;
	
	GUI.Box(Rect(0,0,Screen.width/2 - largura/2-100,Screen.height/2 - altura/2+250)," ");//Criar - boxshadow fundo escuro
	
	if (GUI.Button(Rect(posiX,posiY,largura,altura),"Conhecida como mata rala e \nfraca, onde possui árvores que \npodem chegar de 8 a 15 metros \nde altura que favorece luminosidade."))
	{
		Application.LoadLevel("Terreno_1");
	}
	if (GUI.Button(Rect(posiX,posiY+altura+10,largura,altura),"Formação florestal sem resistência \na seca apresenta apenas espécies \nde grande porte."))
	{
		Application.LoadLevel("Questionario_1");
	}
	if (GUI.Button(Rect(posiX,posiY+altura+120,largura,altura),"Fertilidade do solo pobre,\n e possui apenas espécies arbustiva\n na sua formação vegetal.  "))
	{
		Application.LoadLevel("Questionario_1");
	}
}