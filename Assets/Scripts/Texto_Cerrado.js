#pragma strict
var time: float;

var posicaoX: float;
var posicaoY: float;
var perSkin: GUISkin;
var alt: float;
var larg: float;

var posX      : float;
var posY      : float;
var altura     : float;
var largura    : float;

var LabelSkin : GUISkin;
var bgTexture : Texture;

private var showGUI : boolean = true;

function Start () 
{
  	altura  = 100;
	largura = 200;
	alt  = 400;
	larg = 1000;
}

function Update (){
	time -= Time.deltaTime;
	if(time <= 1){
		if(Input.anyKey){
			Application.LoadLevel(5);
		}
	}
	
}
 function OnGUI ()
 {
 	GUI.DrawTexture(Rect(0,0,Screen.width,Screen.height), bgTexture, ScaleMode.ScaleAndCrop, true, 0);
	GUI.skin = perSkin;
 	posicaoX = Screen.width/2 - larg/2 - (Screen.width/2)+1550;
 	posicaoY = Screen.height/2 - alt/2 - (Screen.height/2)+700;
	
	posX = Screen.width/2 - larg/2;
	posY = Screen.height/2 - alt/2 -30;
	GUI.Box(Rect (posX,posY,larg,alt),"\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b> CERRADO</b>\n\n<b><color=red>Extensão Territorial: </color></b>  Com uma área aproximada de 2.045.064 km², representa a segunda maior formação \nvegetal do Brasil, perdendo apenas para Floresta Amazônica.\n\n<b><color=red>Características: </color></b> Vegetação típicas de locais de estações climáticas bem definidas, em que uma parte do ano \nchove com abundância e outra é marcada pela seca. Possui árvores de pequeno porte com galhos e troncos \ntortuosos, raízes profundas para extrair água no subsolo em épocas de escassez de chuva. As cascas dessas \narvores são duras e grossas, dando-lhes certa resistência as chamas, comuns na seca.Considerado as \nsavanas brasileiras, o Cerrado é composto pelos seguintes ecossistemas: Cerradão, cerrado limpo, cerrado \nsujo, campo rupestre, veredas e matas ciliares. \n\n<b><color=red>Importância: </color></b>   Estima-se que esse bioma apresente uma grande biodiversidade com espécies de vegetais, \ne com uma fauna bem distinta e exótica.\n\n<b><color=red>Devastação: </color></b> Caça predatória, comércio ilegal de animais, intensa atividade garimpeira e o desmatamento \ncom fins econômicos voltados para a pecuária e agricultura.");
	if(showGUI){
		GUI.skin = LabelSkin;
		GUI.Label(Rect(Screen.width/2 - 150, Screen.height - 50 - ((10*Screen.height)/100),300,100),"Aguarde...");
		GUI.skin = null;
	}
	/////
	if(time <= 1){
		showGUI = false; 
		GUI.skin = LabelSkin;
		GUI.Label (Rect(Screen.width/2 - 150, Screen.height - 50 - ((10*Screen.height)/100),300,100),"Aperte qualquer tecla para JOGAR!");
		GUI.skin = null;
	}
}