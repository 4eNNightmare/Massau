#pragma strict

var posicaoX: float;
var posicaoY: float;

var cont : int;
var renderizar : boolean  = false;  
var renderizar2 : boolean  = false;
var windowRect : Rect = Rect (20, 20, 120, 200); // se mudar, verificar no Inspector
var windowRect2 : Rect = Rect (20, 20, 120, 200); // se mudar, verificar no Inspector

var janelaEscondida = true;
var janelaEscondida2 = true;

var alt: float;
var larg: float;
var perSkin: GUISkin;
var popUpSkin: GUISkin;


var posXb      : float;
var posYb      : float;
var alturaB     : float;
var larguraB    : float;

static public var faseAtualNumber : int;

public var logoTexture : Texture;
private var PodeApertar : boolean = true;
private var PodeApertar2 : boolean = true;

var a: float;
var l: float;

//Popup
var posiXPop : float;
var posiYPop : float;
var largXPop : float;
var altYPop  : float;

var largBotaoPop : float;
var altBotaoPop  : float;

function Start () 
{
	alt  = 50;
	larg = 150;
	cont = 0;
	
	larguraB = 200;//500
	alturaB = 100;//400
	posXb = Screen.width/2 - larguraB/2;
	posYb = Screen.height/2 - alturaB/2 +30;
	
	
	a  = 40;
	l  = 80;
	
	//Popup
	posiXPop = (Screen.width - largXPop)/2;
	posiYPop = (Screen.height - altYPop)/2;
	
	largXPop = 300;
	altYPop  = 100;
}

 function mostraJanela()
 { // abrir janela
 	renderizar = true;
}
 function escondeJanela(){
 	renderizar = true;
}
//fim função abrir janela

 function mostraJanela2()
 { // abrir janela
 	renderizar2 = true;
}
 function escondeJanela2(){
 	renderizar2 = true;
}
//fim função abrir janela

function Update () {

}

function OnGUI ()
{
	GUI.DrawTexture(Rect(Screen.width/2 - logoTexture.width/2,posicaoY - 300,logoTexture.width,logoTexture.height), logoTexture, ScaleMode.ScaleAndCrop, true, 0);
	GUI.skin = perSkin;
	
	
	posicaoX = Screen.width/2 - larg/2;
	posicaoY = Screen.height/2 - alt/2 - 100;
	if (GUI.Button(Rect(posicaoX,posicaoY,larg,alt),"Continuar"))
	{
		if(PodeApertar == true){
			if(faseAtualNumber > 0){
				Application.LoadLevel(faseAtualNumber);
			}
		}
	}
	
	
	posicaoX = Screen.width/2 - larg/2;
	posicaoY = Screen.height/2 - alturaB/2 -10;
	if(GUI.Button (Rect(posicaoX,posicaoY,larg,alt),"Novo Jogo"))
	{
		//cont = 1;
		if(PodeApertar == true){
			//Application.LoadLevelAdditive("OpcaoNewGame");
			if (janelaEscondida2 == true)
			{
	   		mostraJanela2();
	   		janelaEscondida2 = false;
	 		}
		  	else
		  	{
		   		escondeJanela2();
		   		janelaEscondida2  = true;
		  	}
		}
		PodeApertar2 = false;
	}

	posicaoX = Screen.width/2 - larg/2;
	posicaoY = Screen.height/2 - alt/2 +30;
	
	if (GUI.Button (Rect(posicaoX,posicaoY,larg,alt),"Sair"))
	{
	  	//cont = 1;
	  	if(PodeApertar2 == true){
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

	      //Application.LoadLevelAdditive("OpcaoSair");
	}
	
	
	if (renderizar) 
	{
		larguraB = 200;
		alturaB = 100;
		
		posXb = Screen.width/2 - larguraB/2;
		posYb = Screen.height/2 - alturaB/2 -60;
		
		GUI.Box(Rect(0,0, Screen.width, Screen.height)," ");//Criar - boxshadow fundo escuro - tela cheia
		GUI.skin = popUpSkin;
		windowRect = GUI.Window (1, Rect (posiXPop - largXPop/2,posiYPop - altYPop/2,largXPop,altYPop), janela1, "\n\nDeseja Sair?");//Titulo
		GUI.skin = perSkin;
	} 
	if (renderizar2) 
	{
		larguraB = 200;//500
		alturaB = 100;//400
		posXb = Screen.width/2 - larguraB/2;
		posYb = Screen.height/2 - alturaB/2 -60;
		
		GUI.Box(Rect(0,0, Screen.width, Screen.height)," ");//Criar - boxshadow fundo escuro - tela cheia
		GUI.skin = popUpSkin;
		windowRect2 = GUI.Window (1, Rect (posiXPop - largXPop/2,posiYPop - altYPop/2,largXPop,altYPop), janela2, "\n\nIniciar Novo Jogo?");//Titulo
		GUI.skin = perSkin;
	} 

}


function janela1 (windowID : int) 
{
	PodeApertar = false;
	//GUI.DragWindow (Rect (0,0, 120, 20)); //20 é altura da área de dragar bloqueia click
	largBotaoPop = 90;
	altBotaoPop  = 30;
	
	largXPop = 300;
	altYPop  = 100;
   	
	if(GUI.Button (Rect((largXPop/2 - largBotaoPop/2) - 50,(altYPop-altBotaoPop)-10,largBotaoPop,altBotaoPop),"Sim"))
	{
		Application.Quit();
	}

	if (GUI.Button (Rect((largXPop/2 - largBotaoPop/2) + 50,(altYPop-altBotaoPop)-10,largBotaoPop,altBotaoPop),"Nao"))
	{
		Application.LoadLevel("MenuP");
   } 
}

function janela2 (windowID : int) 
{
	PodeApertar = false;
	largBotaoPop = 90;
	altBotaoPop  = 30;
	
	largXPop = 300;
	altYPop  = 100;
	
	if(GUI.Button (Rect((largXPop/2 - largBotaoPop/2) - 50,(altYPop-altBotaoPop)-10,largBotaoPop,altBotaoPop),"Sim"))
	{
		
		Application.LoadLevel(2);
		faseAtualNumber = 2;
	}
	
	if (GUI.Button (Rect((largXPop/2 - largBotaoPop/2) + 50,(altYPop-altBotaoPop)-10,largBotaoPop,altBotaoPop),"Nao"))
	{
		Application.LoadLevel("MenuP");
	}
}
