#pragma strict

var posiX: float;
var posiY: float;

var altura: float;
var largura: float;

var perSkin: GUISkin;

var controlePause: boolean;
function Start () {

altura = 50;
largura = 150;

posiX = Screen.width/2 - largura/2;
posiY = Screen.height/2 - altura/2;

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
	GUI.skin = null;
	if(controlePause == false){
		GUI.Box(Rect(0, 0, Screen.width, Screen.height)," ");
		
		GUI.skin = perSkin;
		GUI.Box(Rect(posiX-30, posiY-150, largura+60, altura+300),"Jogo Pausado");
		
		if(GUI.Button(Rect(posiX, posiY-110, largura, altura), "Continuar"))
		{
			Time.timeScale = 1;
			controlePause = true;
		}
		
		if(GUI.Button(Rect(posiX, posiY-55, largura, altura), "Recomeçar"))
		{
			Application.LoadLevel(Application.loadedLevel);
			Time.timeScale = 1;
			controlePause = true;
		}
		
		if(GUI.Button(Rect(posiX, posiY, largura, altura), "Seleçao de Fases")){
			Time.timeScale = 1;
			controlePause = true;
			Application.LoadLevel("SelecaoFases");
		}
		
		if(GUI.Button(Rect(posiX, posiY+55, largura, altura), "Menu")){
			Time.timeScale = 1;
			controlePause = true;
			Application.LoadLevel("MenuP");
		}
		
		if(GUI.Button(Rect(posiX, posiY+110, largura, altura), "Sair"))
		{
			Application.Quit();
			GUI.Box(Rect(posiX-30, posiY-150, largura+60, altura+300),"Deseja Sair?");
			
			if(GUI.Button(Rect(posiX, posiY+110, largura, altura), "Sim"))
			{
			
			}
			
			if(GUI.Button(Rect(posiX, posiY+110, largura, altura), "Nao"))
			{
			Time.timeScale = 0;
			}
			/*
			GUI.TextArea(Rect(posiX, posiY-75, largura, altura), "SAIR")){
			if(GUI.Button(Rect(posiX-150, posiY, largura, altura), "SIM")){
				Application.Quit();
			}if(GUI.Button(Rect(posiX, posiY, largura, altura), "NAO")){
				Application.Quit();
			}*/
		}
	}
}