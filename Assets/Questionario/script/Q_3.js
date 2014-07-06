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
	
	if (GUI.Button(Rect(posiX,posiY,largura,altura),"Caça predatória e comércio \nilegal de animais;"))
	{
		Application.LoadLevel("Questionario_1");
	}
	if (GUI.Button(Rect(posiX,posiY+altura+10,largura,altura),"Diminuição de queimadas e \natividade madeireira;"))
	{
		Application.LoadLevel("Questionario_4");
	}
	if (GUI.Button(Rect(posiX,posiY+altura+120,largura,altura),"Intensa atividade garimpeira e \ndesmatamento com a finalidade para a \npecuária e agricultura."))
	{
		Application.LoadLevel("Questionario_1");
	}
}