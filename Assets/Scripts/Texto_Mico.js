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
	alt  = 350;
	larg = 1000;
}

function Update (){
	time -= Time.deltaTime;
	if(time <= 1){
		if(Input.anyKey){
			Application.LoadLevel(3);
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
	GUI.Box(Rect (posX,posY,larg,alt),"\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMICO ESTRELA\n\n\t\tO mico-estrela (Callithrix penicillata) é da classe Mammalia, ordem Primates, família Callithrichidae, uma\n espécie animal que está em extinção.\n<color=red>- Características físicas/aparência:</color> cabeça escura, com uma mancha branca na testa, atinge até 30 cm de\n comprimento com uma cauda de 35 cm que lhe dá equilíbrio nas árvores.\n<color=red>- Personalidade:</color> brincalhão, ágil e inteligente.\n<color=red>- Predadores:</color> aves de rapina, irara, entre outros.\n\t\tVivem em média 10 anos. Habitam cerradões, florestas semidecíduas, florestas secundárias e matas\n ciliares.");
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


