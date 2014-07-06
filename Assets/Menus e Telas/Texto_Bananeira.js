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
	alt  = 200;
	larg = 1000;
}

function Update (){
	time -= Time.deltaTime;
	if(time <= 1){
		if(Input.anyKey){
			Application.LoadLevel(7);
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
	GUI.Box(Rect (posX,posY,larg,alt),"\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<b>BANANEIRA</b>\n\nBananeira, nome popular de uma erva tropical que provavelmente tenha vindo do Oriente, sul da china ou \nindonésia. De tamanho comparável à arvores, podendo atingir de 3 a 12 metros de altura, com folhas largas \ne ovais que atingem até 3 metros de comprimento. Produz bananas, frutas com alto valor nutritivo, que \nnascem em forma de cacho.\n\n<b><color=red>Clasificação científica:</color></b>   gênero Musa, família das Musáceas. Nome científico: Musa paradisiaca.");
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


