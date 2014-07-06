#pragma strict

var posiX: float;
var posiY: float;

var altura: float;
var largura: float;

var perSkin: GUISkin;

var controlePause: boolean;

//Popup
private var PodeApertar : boolean = true;
var renderizar : boolean  = false; 
var renderizar1 : boolean  = false;  
var renderizar2 : boolean  = false;  
var renderizar3 : boolean  = false; 
var janelaEscondida = true;
var windowRect;
var posiXPop : float;
var posiYPop : float;
var largXPop : float;
var altYPop  : float;

var largBotaoPop : float;
var altBotaoPop  : float;


function mostraJanela()
{
	renderizar = true;
}
function escondeJanela()
{
	renderizar = true;//false
}

//popup 1
function mostraJanela1()
{
	renderizar1 = true;
}

//popup 2
function mostraJanela2()
{
	renderizar2 = true;
}

//popup 3
function mostraJanela3()
{
	renderizar3 = true;
}

//Fim popup




function Start () {

altura = 30;
largura = 90;

posiX = Screen.width/2 - largura/2;
posiY = Screen.height/2 - altura/2;

largBotaoPop = 90;
altBotaoPop  = 30;
	
largXPop = 300;
altYPop  = 100;


controlePause = true;
}
function Update () 
{
	if (Input.GetKeyDown (KeyCode.Escape)) {
		if (controlePause){
    		Time.timeScale = 0;
    		controlePause = false;
    	}
    	else {
    		Time.timeScale = 1;
    		controlePause = true;
    	}
	}
}
function OnGUI(){
	GUI.skin = perSkin;
	if(controlePause == false)
	{
		GUI.Box(Rect(0, 0, Screen.width, Screen.height)," ");
		
		GUI.Box(Rect(posiX-30, posiY-150, largura+60, altura+300),"Jogo Pausado");
		
		if(GUI.Button(Rect(posiX, posiY-110, largura, altura), "Continuar"))
		{
			if(PodeApertar == true)
			{
				Time.timeScale = 1;
				controlePause = true;
			}
		}
		
		if(GUI.Button(Rect(posiX, posiY-55, largura, altura), "Recomeçar"))
		{
				Time.timeScale = 1;
				if(controlePause == true)
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
		}
		
		if(GUI.Button(Rect(posiX, posiY, largura, altura), "Seleçao de Fases")){
			Time.timeScale = 1;
			controlePause = true;
			if (janelaEscondida == true)
			{
				mostraJanela1();
			    janelaEscondida = false;
			}
			else
			{
				escondeJanela();
				janelaEscondida  = true;
			}
		}
		
		if(GUI.Button(Rect(posiX, posiY+55, largura, altura), "Menu")){
			Time.timeScale = 1;
			controlePause = true;
			if (janelaEscondida == true)
			{
				mostraJanela2();
			    janelaEscondida = false;
			}
			else
			{
				escondeJanela();
				janelaEscondida  = true;
			}
		}
		
		if(GUI.Button(Rect(posiX, posiY+110, largura, altura), "Sair"))
		{
			Time.timeScale = 1;
			controlePause = true;
			if (janelaEscondida == true)
			{
				mostraJanela3();
			    janelaEscondida = false;
			}
			else
			{
				escondeJanela();
				janelaEscondida  = true;
			}
	
		//****************Inicio - Popup********************
		if (renderizar) 
		{			
			GUI.Box(Rect(0, 0, Screen.width, Screen.height)," ");//Criar - boxshadow fundo escuro
			windowRect = GUI.Window (1, Rect(posiX- largXPop/2,posiY - altYPop/2,largXPop,altYPop), janela1,"\b<color=green>Deseja Recomerçar?</color>");//Titulo 	
		}
		
		//1
		if (renderizar1) 
		{			
			GUI.Box(Rect(0, 0, Screen.width, Screen.height)," ");//Criar - boxshadow fundo escuro
			windowRect = GUI.Window (1, Rect(posiX - largXPop/2,posiY - altYPop/2,largXPop,altYPop), janela1,"\b<color=green>Ir para Seleçao de Fases?</color>");//Titulo 	
		}
		
		//2
		if (renderizar2) 
		{			
			GUI.Box(Rect(0, 0, Screen.width, Screen.height)," ");//Criar - boxshadow fundo escuro
			windowRect = GUI.Window (1, Rect(posiXPop - largXPop/2,posiYPop - altYPop/2,largXPop,altYPop), janela1,"\b<color=green>Ir para o Menu Principal?</color>");//Titulo 	
		}
		
		//3
		if (renderizar3) 
		{			
			GUI.Box(Rect(0, 0, Screen.width, Screen.height)," ");//Criar - boxshadow fundo escuro
			windowRect = GUI.Window (1, Rect(posiXPop - largXPop/2,posiYPop - altYPop/2,largXPop,altYPop), janela1,"\b<color=green>Deseja Sair?</color>");//Titulo 	
		}
			
		
			/*
			GUI.Box(Rect(posiX-30, posiY-150, largura+60, altura+300),"Deseja Sair?");
			
			if(GUI.Button(Rect(posiX, posiY+110, largura, altura), "Sim"))
			{
			Application.Quit();
			}
			
			if(GUI.Button(Rect(posiX, posiY+110, largura, altura), "Nao"))
			{
			Time.timeScale = 0;
			}
			*/
			/*
			GUI.TextArea(Rect(posiX, posiY-75, largura, altura), "SAIR")){
			if(GUI.Button(Rect(posiX-150, posiY, largura, altura), "SIM")){
				Application.Quit();
			}if(GUI.Button(Rect(posiX, posiY, largura, altura), "NAO")){
				Application.Quit();
			}*/
		}
	}
}//Fim OnGUI

function janela1 (windowID : int) 
{
	GUI.contentColor = Color.white;
	PodeApertar = false;

	largBotaoPop = 90;
	altBotaoPop  = 30;
	
	largXPop = 300;
	altYPop  = 100;
	
	if(renderizar)//Recomeçar
	{
	
		if (GUI.Button(Rect((largXPop/2 - largBotaoPop/2) - 50,(altYPop-altBotaoPop)-10,largBotaoPop,altBotaoPop),"Sim"))
		{
			Application.LoadLevel(Application.loadedLevel + 1);
		}
		if (GUI.Button(Rect((largXPop/2 - largBotaoPop/2) + 50,(altYPop-altBotaoPop)-10,largBotaoPop,altBotaoPop),"Nao"))
		{
			Application.LoadLevel("Pause");
		}
	}
	
	if(renderizar1)//Seleçao de Fases
	{
	
		if (GUI.Button(Rect((largXPop/2 - largBotaoPop/2) - 50,(altYPop-altBotaoPop)-10,largBotaoPop,altBotaoPop),"Sim"))
		{
			Application.LoadLevel(Application.loadedLevel);
		}
		if (GUI.Button(Rect((largXPop/2 - largBotaoPop/2) + 50,(altYPop-altBotaoPop)-10,largBotaoPop,altBotaoPop),"Nao"))
		{
			Application.LoadLevel("Pause");
		}
	}
	
	if(renderizar2)//Menu Principal
	{
	
		if (GUI.Button(Rect((largXPop/2 - largBotaoPop/2) - 50,(altYPop-altBotaoPop)-10,largBotaoPop,altBotaoPop),"Sim"))
		{
			Application.LoadLevel("MenuP");
		}
		if (GUI.Button(Rect((largXPop/2 - largBotaoPop/2) + 50,(altYPop-altBotaoPop)-10,largBotaoPop,altBotaoPop),"Nao"))
		{
			Application.LoadLevel("Pause");
		}
	}
	
	if(renderizar3)//Sair
	{
	
		if (GUI.Button(Rect((largXPop/2 - largBotaoPop/2) - 50,(altYPop-altBotaoPop)-10,largBotaoPop,altBotaoPop),"Sim"))
		{
			Application.Quit();
		}
		if (GUI.Button(Rect((largXPop/2 - largBotaoPop/2) + 50,(altYPop-altBotaoPop)-10,largBotaoPop,altBotaoPop),"Nao"))
		{
			Application.LoadLevel("Pause");
		}
	}
}//Fim Janela1