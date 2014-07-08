#pragma strict

var renderizar : boolean  = false;  
var janelaEscondida = true;
var windowRect : Rect = Rect (20, 20, 220, 100);
var perSkin    : GUISkin;

var posiX      : float;
var posiY      : float;
var altura     : float;
var largura    : float;
private var PodeApertar : boolean = true;

var posXb      : float;
var posYb      : float;
var alturaB     : float;
var larguraB    : float;

function Start () 
{
	
	altura  = 70;
	largura = 350;
	//Tela 1280 x 600
	posiX = Screen.width/44;// - largura/6;//posiX = Screen.width/2 - largura/2 - 450;
	posiY = Screen.height/4;// - altura/6;//posiY = Screen.width/2 - altura/2 - 500;
	
	larguraB = 410;
	alturaB = 600;
	posXb = Screen.width/600;
	posYb = Screen.height/500;
}


///inicio
function mostraJanela()
{
	renderizar = true;
}
function escondeJanela()
{
	renderizar = true;//false
}

function OnGUI() {

	GUI.skin = perSkin;
	
	GUI.Box(Rect(posXb,posYb,larguraB,alturaB)," ");//Criar - boxshadow fundo escuro
	
	
	//GUI.Box(Rect(0,0,Screen.width/2 - largura/2-100,Screen.height/2 - altura/2+250)," ");//Criar - boxshadow fundo escuro

	GUI.depth = 1; //layer mais baixo que 0
	///
	///Font size texto
	var myStyl = new GUIStyle(); 
	myStyl.normal.textColor = GUI.skin.label.normal.textColor; 
	myStyl.fontSize = 20; 
	
	GUILayout.Label("\n\n\n\n\t\t\tSão características do cerradão:", myStyl);
	//
	if (GUI.Button(Rect(posiX,posiY,largura,altura),"Segunda maior formação vegetal do Brasil.\n Composta por árvores altas, baixas e retorcidas.\n Possui uma vegetação com maior biodiversidade\n do planeta."))
	{
		if(PodeApertar == true){
			newMovimentar.poder_correr = true;
			Application.LoadLevel(Application.loadedLevel + 1);
		}
	}
	
	if (GUI.Button(Rect(posiX,posiY+altura+10,largura,altura),"Formação florestal sem resistência a seca.\n Apresenta apenas espécies vegetais de grande porte."))
	{
		if (janelaEscondida == true)
		{
			mostraJanela();
		    janelaEscondida = false;
		}
		else
		{
			escondeJanela();
			janelaEscondida  = true;
		}
		
	}
	if (GUI.Button(Rect(posiX,posiY+altura+90,largura,altura),"Fertilidade do solo pobre, possuindo apenas\n espécies de plantas espinhosas."))
	{
		if (janelaEscondida == true)
		{
			mostraJanela();
		    janelaEscondida = false;
		}
		else
		{
			escondeJanela();
			janelaEscondida  = true;
		}

	}
	
	
    ////
    if (renderizar) 
	{
		GUI.Box(Rect(posXb,posYb,larguraB,alturaB)," ");//Criar - boxshadow fundo escuro
		windowRect = GUI.Window (1, Rect (35,200,347,130), janela1, "\n\b<color=red>VOCE PERDEU!</color>" + "\n*Esta alternativa nao e caracteristica do cerradao.");//Titulo 
	}
	//GUI.Label(new Rect (200, 230, 300, 100),"*Esta alternativa nao e caracteristica do cerradao.");
}

function janela1 (windowID : int) 
{
	GUI.contentColor = Color.white;
	PodeApertar = false;
	if (GUI.Button(Rect(135,80,80,30),"Recomeçar"))
	{
		Application.LoadLevel("Q1");
	}
}


/*
	Definiçoes inspector:
	- width: 115 | 449
	- height: 60
	- X: 160 | 0
	- Y: 430 | 230
*/
