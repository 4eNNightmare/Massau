
public static var caiu : boolean = false;
var GameOver : boolean = false;
var aTexture : Texture;
var buttonSkin : GUISkin;

function OnTriggerEnter( other : Collider ){
	if ( other.gameObject.name == "personagem" ){
		caiu = true;
		yield WaitForSeconds(0.25);
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
			caiu = false;
			Time.timeScale = 1;
			GameOver = false;
			AudioListener.pause = false;
			Application.LoadLevel(Application.loadedLevel);
		}
		if(GUI.Button(Rect(Screen.width/2-(150/2),Screen.height/2-(50/2)-55,150,50),"Seleçao de fases")){
			caiu = false;
			Time.timeScale = 1;
			AudioListener.pause = false;
			Application.LoadLevel("SelecaoFases");
		}
		if(GUI.Button(Rect(Screen.width/2-(150/2),Screen.height/2-(50/2),150,50),"Menu")){
			caiu = false;
			Time.timeScale = 1;
			AudioListener.pause = false;
			Application.LoadLevel("MenuP");
		}
		if(GUI.Button(Rect(Screen.width/2-(150/2),Screen.height/2-(50/2)+55,150,50),"Sair")){
			Application.Quit();
		}

		
	}
}
