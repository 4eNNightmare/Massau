#pragma strict
	public var skin : GUISkin;
	public var logoTexture : Texture;
	public var bgTexture : Texture;
function OnGUI(){
	GUI.skin = skin;
	GUI.DrawTexture(Rect(0,0,Screen.width,Screen.height), bgTexture, ScaleMode.ScaleAndCrop, true, 0);
	GUI.DrawTexture(Rect(Screen.width/2 - logoTexture.width/2,100,logoTexture.width,logoTexture.height), logoTexture, ScaleMode.ScaleAndCrop, true, 0);
	GUI.Label(Rect(Screen.width/2 -300,Screen.height - 100 -((20*Screen.height)/100),600, 100),"Aperte qualquer tecla para continuar...");
	GUI.skin = null;
}

function Update () {
if(Input.anyKey){

Application.LoadLevel("MenuP");

}
}