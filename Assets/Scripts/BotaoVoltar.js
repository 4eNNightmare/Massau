#pragma strict

var posiX : float;
var posiY : float;

var altura : float;
var largura : float;

var posXb : float;
var posYb : float;
var alturaB : float;
var larguraB : float;
var perSkin : GUISkin;

function Start () {
	altura = 50;
	largura = 150;
	
	alturaB = 70;
	larguraB = 1920;
	
	//fundo barra inferior
	posXb = 0;
	posYb = Screen.height - alturaB;
	
	//botao voltar
	posiX = 10;
	posiY = Screen.height - alturaB - ((altura - alturaB)/2) + 4;
}

function Update () {

}

function OnGUI(){
	GUI.skin = perSkin;
	GUI.Box(Rect(posXb, posYb, larguraB, alturaB),"");//criar - boxshadow funldo escuro
	if(GUI.Button(Rect(posiX, posiY, largura, altura), "Voltar")){
		if(Application.loadedLevelName == "MenuP"){
			Application.LoadLevel("TelaInicial");
		}
		if(Application.loadedLevelName == "SelecaoFases"){
			Application.LoadLevel("MenuP");
		}
	}
}