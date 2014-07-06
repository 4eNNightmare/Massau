#pragma strict

var posiX   : float;
var posiY   : float;
var altura  : float;
var largura : float;


function Start () 
{
	altura  = 100;
	largura = 200;
	
	posiX = Screen.width/2 - largura/2 - 450;
	posiY = Screen.width/2 - altura/2 - 500;
	/*
	posiX = Screen.width/2 - largura/2 - (Screen.width/2-50);
	posiY = Screen.width/2 - altura/2 - (Screen.height/2-50);
	*/
}

function Update () {

}

function OnGUI()
{
	/*
	posiX = Screen.width/2 - largura/2 - (Screen.width/2-50);
	posiY = Screen.width/2 - altura/2 - (Screen.height/2-50);
	*/
	GUI.Box(Rect(0,0,Screen.width/2 - largura/2-100,Screen.height/2 - altura/2+250)," ");//Criar - boxshadow fundo escuro
	
	if (GUI.Button(Rect(posiX,posiY,largura,altura),"Mata Ciliar e Campo rupestre;"))
	{
		Application.LoadLevel("Questionario_1");
	}
	if (GUI.Button(Rect(posiX,posiY+altura+10,largura,altura),"Cerradão e Campo rupestre;"))
	{
		Application.LoadLevel("Questionario_1");
	}
	if (GUI.Button(Rect(posiX,posiY+altura+120,largura,altura),"Cerradão e Mata Ciliar."))
	{
		Application.LoadLevel("Questionario_3");
	}
}