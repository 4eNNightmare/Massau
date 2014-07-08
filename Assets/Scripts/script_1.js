
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
	posiX = Screen.width/44;//12// - largura/6;//posiX = Screen.width/2 - largura/2 - 450;
	posiY = Screen.height/4;//6// - altura/6;//posiY = Screen.width/2 - altura/2 - 500;
	
	larguraB = 410;//500
	alturaB = 600;//400
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


	GUI.depth = 1; //layer mais baixo que 0
	///Font size texto
	var myStyl = new GUIStyle(); 
	myStyl.normal.textColor = GUI.skin.label.normal.textColor; 
	myStyl.fontSize = 20; 
	
	GUILayout.Label("\n\n\n\n\t\tSão características do Mico-Estrela:", myStyl);
	//
	//GUI.Label(new Rect (100,40, 300, 100),"1 - São características do Mico-Estrela:");
	if (GUI.Button(Rect(posiX,posiY,largura,altura),"Possui mancha branca na testa, tem uma grande\n calda. Alimenta-se de frutas, flores, folhas insetos e\n pequenos animais."))
	{
		if(PodeApertar == true){
			Application.LoadLevel("Q2");
		}
	}
	
	if (GUI.Button(Rect(posiX,posiY+altura+10,largura,altura),"Atinge cerca de 90 cm de comprimento, apresenta\n cabeça de coloração branca e costuma viver sozinho."))
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
	if (GUI.Button(Rect(posiX,posiY+altura+90,largura,altura),"Alimenta-se apenas de frutas e flores, costuma viver\n em média 2 anos e possui uma grande calda."))
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
		

		
		windowRect = GUI.Window (1, Rect (35,200,347,130),  janela1,"\n\b<color=red>VOCE PERDEU!</color>" + "\n*Esta alternativa nao e caracteristica do Mico-Estrela.");//Titulo 
		//Rect (35,200,347,100),    windowRect = GUI.Window (1, windowRect, janela1,"\n\b<color=red>VOCE PERDEU!</color>" + "\n*Esta alternativa nao e caracteristica do Mico-Estrela.");//Titulo 
	}
	
}

function janela1 (windowID : int) 
{
	GUI.contentColor = Color.white;
	PodeApertar = false;
	if (GUI.Button(Rect(135,80,90,30),"Recomeçar"))
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
