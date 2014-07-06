#pragma strict
var normalTex : Texture2D;
var hoverTex  : Texture2D;

function OnMouseEnter(){

	guiTexture.texture = hoverTex;
}
function OnMouseExit(){

	guiTexture.texture = normalTex;
}
function OnMouseDown(){

	Debug.Log("Clique no botao");
}
function Start () {

}

function Update () {

}
function OnGUI() {
	GUILayout.Label("\n\t\t\t1 - São características do Mico-Estrela:");
}