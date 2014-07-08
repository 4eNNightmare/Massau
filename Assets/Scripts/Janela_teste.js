#pragma strict

var renderizar : boolean  = false;  
var janelaEscondida = true;
var windowRect : Rect = Rect (20, 20, 220, 100);


var posiX      : float;
var posiY      : float;
var altura     : float;
var largura    : float;
private var PodeApertar : boolean = true;

function Start () 
{
	
	altura  = 100;
	largura = 270;
	//Tela 1280 x 600
	posiX = Screen.width/12;// - largura/6;//posiX = Screen.width/2 - largura/2 - 450;
	posiY = Screen.height/6;// - altura/6;//posiY = Screen.width/2 - altura/2 - 500;
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
	
	GUI.Box(Rect(0,0,Screen.width/2 - largura/2-100,Screen.height/2 - altura/2+250)," ");//Criar - boxshadow fundo escuro

	GUI.depth = 1; //layer mais baixo que 0
	///
	
	if (GUI.Button(Rect(posiX,posiY,largura,altura),"Possui mancha branca na testa,\n tem uma grande calda.\n Alimenta-se de frutas, flores,\n folhas insetos e pequenos animais."))
	{
		if(PodeApertar == true){
			Application.LoadLevel("Questionario_2");
		}
	}
	
	if (GUI.Button(Rect(posiX,posiY+altura+10,largura,altura),"Atinge cerca de 90 cm de\n comprimento, apresenta cabeça de\n coloração branca e costuma viver sozinho."))
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
	if (GUI.Button(Rect(posiX,posiY+altura+120,largura,altura),"Alimenta-se apenas de frutas\n e flores, costuma viver em média\n 2 anos e possui uma grande calda."))
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
		GUI.Box(Rect(0,0,Screen.width/2 - largura/2-100,Screen.height/2 - altura/2+250)," ");//Criar - boxshadow fundo escuro
		windowRect = GUI.Window (1, windowRect, janela1, "Voce Perdeu");//Titulo
	}
	
}

function janela1 (windowID : int) 
{
	GUI.contentColor = Color.green;
	PodeApertar = false;
	if (GUI.Button(Rect(186,20,80,30),"Recomeçar"))
	{
		Application.LoadLevel("Questionario_1");
	}
}


/*
	Definiçoes inspector:
	- width: 115 | 449
	- height: 60
	- X: 160 | 0
	- Y: 430 | 230
*/
