#pragma strict
var renderizar : boolean  = false;  
var windowRect : Rect = Rect (20, 20, 1200, 200); // se mudar, verificar no Inspector
var janelaEscondida = true;

//Tempo
var time: float;

var posicaoX: float;
var posicaoY: float;

var alt: float;
var larg: float;

function Start () {
  time = 10;
}

////////

function mostraJanela(){
 renderizar = true;
}
function escondeJanela(){
 renderizar = false;
}

function OnGUI() {
 GUI.depth = 1; //layer mais baixo que 0
  
 if (GUI.Button(new Rect(Screen.width-100, Screen.height-30, 90, 20), "Help-On/Off"))
 {
	
	  if (janelaEscondida == true){
	   mostraJanela();
	   janelaEscondida = false;
	  }
	  else{
	   escondeJanela();
	   janelaEscondida  = true;
	  }
	 }
	
	 if (renderizar) {
	  windowRect = GUI.Window (1, windowRect, janela1, " ");//Titulo
	 }
}

function janela1 (windowID : int) 
{
	GUI.DragWindow (Rect (0,0, 120, 20)); //20 é altura da área de dragar bloqueia click
	var texto : String = "\t\t\t\t\t\t\t\t\t\t\tVoce Perdeu";
	GUI.TextArea(new Rect(10,25,10000,165),texto);
	
	///Tempo 

	if(time <= 1)
	{
	Application.LoadLevel("Questionario_2");
	}
	////
    
}

function Update () 
{
	alt  = 50;
	larg = 100;
	time -= Time.deltaTime;
}