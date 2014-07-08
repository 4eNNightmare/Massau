#pragma strict
///
var renderizar : boolean  = false;  
//var windowRect : Rect = Rect (20, 20, 1200, 200); // se mudar, verificar no Inspector
var janelaEscondida = true;
///
var windowRect : Rect = Rect (20, 20, 220, 100);



///inicio

function mostraJanela()
{
 renderizar = true;
}
function escondeJanela()
{
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
	  windowRect = GUI.Window (1, windowRect, janela1, "Voce Perdeu");//Titulo
	 }
}

function janela1 (windowID : int) 
{
	GUI.contentColor = Color.red;
	if (GUI.Button(Rect(20,20,80,30),"Recomeçar"))
	{
		Application.LoadLevel("Questionario_2");
	}
	
	/*
	GUI.DragWindow (Rect (0,0, 120, 20)); //20 é altura da área de dragar bloqueia click
	var texto : String = "\t\t\t\t\t\t\t\t\t\t\tVoce Perdeu";
	GUI.TextArea(new Rect(10,25,10000,165),texto); 
	*/   
}
////fim

/*
function OnGUI () 
{
	windowRect = GUI.Window (0, windowRect, DoMyWindow, "Voce Perdeu");
}

// Make the contents of the window - Adicione conteudo na janela
function DoMyWindow (windowID : int) 
{
	if (GUI.Button (Rect (10,20,100,20), "Recomeçar"))
	{
		Application.LoadLevel("Questionario_4");
		GUI.DragWindow ();
	}
	 //Inserir uma enorme área arrastando no final.
	 //Isso fica preso à janela (como todos os outros controles) para que você não pode nunca
	 //Arraste a janela do lado de fora.
		
}
*/
