#pragma strict
var time: float;

var posicaoX: float;
var posicaoY: float;

var alt: float;
var larg: float;

function Start () {
  time = 10;
}

function Update () {
alt  = 50;
larg = 100;
time -= Time.deltaTime;
if(time <= 1)
{
Application.LoadLevel("Questionario_4");
}
}
