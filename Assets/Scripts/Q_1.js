#pragma strict

var posiX      : float;
var posiY      : float;
var altura     : float;
var largura    : float;
var perSkin    : GUISkin;
guiTexture.enabled = false;



function Start () 
{
	altura  = 100;
	largura = 270;
	//Tela 1280 x 600
	posiX = Screen.width/12;// - largura/6;//posiX = Screen.width/2 - largura/2 - 450;
	posiY = Screen.height/6;// - altura/6;//posiY = Screen.width/2 - altura/2 - 500;
	guiTexture.enabled = false;
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
	//Debug.Log(GUI.skin.button.hover.textColor);
	
	//GUI.skin.button.onHover.textColor = Color.blue;
	
	//GUI.backgroundColor = Color.blue;
	
	//GUI.contentColor = Color.red;
	
	//GUI.Box(Rect(0,0,Screen.width/2 - largura/2-100,Screen.height/2 - altura/2+250)," ");//Criar - boxshadow fundo escuro
	
	
	if (GUI.Button(Rect(posiX,posiY,largura,altura),"Possui mancha branca na testa,\n tem uma grande calda.\n Alimenta-se de frutas, flores,\n folhas insetos e pequenos animais."))
	{
		Application.LoadLevel("Questionario_2");
	}
	if (GUI.Button(Rect(posiX,posiY+altura+10,largura,altura),"Atinge cerca de 90 cm de\n comprimento, apresenta cabeça de\n coloração branca e costuma viver sozinho."))
	{
		Application.LoadLevel("Questionario_1");
	}
	if (GUI.Button(Rect(posiX,posiY+altura+120,largura,altura),"Alimenta-se apenas de frutas\n e flores, costuma viver em média\n 2 anos e possui uma grande calda."))
	{
		Application.LoadLevel("Questionario_1");
	}
	

}



