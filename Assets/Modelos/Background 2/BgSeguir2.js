#pragma strict

function Start () {

}

function Update () {
transform.position.x = GameObject.Find("personagem").transform.position.x/2;
}