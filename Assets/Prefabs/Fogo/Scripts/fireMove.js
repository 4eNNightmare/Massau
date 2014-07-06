#pragma strict

public var velocidade : float;
public var mov : boolean = false;
var GameOver : boolean = false;
var aTexture : Texture;
var buttonSkin : GUISkin;

function Start () {

}

function Update () {
	if(mov == false){
		if(Input.GetButtonDown ("Horizontal")){
 			mov = true;
 		}
 	}
 		if(mov == true){
			transform.position.x -= velocidade * Time.deltaTime;
			//transform.position.y = GameObject.Find("personagem").transform.position.y;
		}
}

function OnTriggerEnter( other : Collider ){
	if ( other.gameObject.name == "personagem" ){
		Time.timeScale = 0;
		GameOver = true;
		AudioListener.pause = true;
	}
}

function OnGUI() {
	if(!aTexture){
		Debug.LogError("Assign a Texture in the inspector.");
		return;
	}
	if(GameOver){
		GUI.Box(Rect(0,0,Screen.width,Screen.height),"");
		GUI.DrawTexture(Rect(Screen.width/2-(448/2),Screen.height/2-(100/2)-210,448,100), aTexture);
		GUI.skin = buttonSkin;
		if(GUI.Button(Rect(Screen.width/2-(150/2),Screen.height/2-(50/2)-110,150,50),"Recomeçar")){
			Time.timeScale = 1;
			GameOver = false;
			AudioListener.pause = false;
			Application.LoadLevel(Application.loadedLevel);
		}
		if(GUI.Button(Rect(Screen.width/2-(150/2),Screen.height/2-(50/2)-55,150,50),"Seleçao de fases")){
			Time.timeScale = 1;
			AudioListener.pause = false;
			Application.LoadLevel("SelecaoFases");
		}
		if(GUI.Button(Rect(Screen.width/2-(150/2),Screen.height/2-(50/2),150,50),"Menu")){
			Time.timeScale = 1;
			AudioListener.pause = false;
			Application.LoadLevel("MenuP");
		}
		if(GUI.Button(Rect(Screen.width/2-(150/2),Screen.height/2-(50/2)+55,150,50),"Sair")){
			Application.Quit();
		}

		
	}
}