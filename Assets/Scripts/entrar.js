#pragma strict

public var skin : GUISkin;
public var logoTexture : Texture;
public var bgTexture : Texture;
function OnGUI(){
	GUI.skin = skin; 
	//Determina qual sera a GUI.skin nas linhas abaixo, no caso, para a frase do GUI.Label.
	GUI.DrawTexture(Rect(0,0,Screen.width,Screen.height), bgTexture, ScaleMode.ScaleAndCrop, true, 0); 
	//Desenha o background cobrindo toda a tela, caso o aspect ratio da resoluçao nao for compativel, a imagem sera cortada.
	GUI.DrawTexture(Rect(Screen.width/2 - logoTexture.width/2,100,logoTexture.width,logoTexture.height), logoTexture, ScaleMode.ScaleAndCrop, true, 0);
	//Desenha o Logo (Titulo do Jogo).
	GUI.Label(Rect(Screen.width/2 -300,Screen.height - 100 -((20*Screen.height)/100),600, 100),"Aperte qualquer tecla para continuar...");
	//Escreve a frase "Aperte qualquer tecla para continuar..." na tela.
	GUI.skin = null;
	//Retorna o GUI.skin para Default.
}

function Update () {
	if(Input.anyKey){ //Checa se uma tecla foi precionada.
		Application.LoadLevel("MenuP"); //Carrega a Cena do Menu Principal.
	}
}