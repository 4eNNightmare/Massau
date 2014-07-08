#pragma strict
var mouseover: String;

public var intro_texture: Texture2D;
public var capI_texture: Texture2D;

var posicaoX: float;
var posicaoY: float;

var cont : int;
var renderizar : boolean  = false;  
var renderizar1 : boolean  = false;  
var renderizar2 : boolean  = false;
var renderizar3 : boolean  = false;
var windowRect : Rect = Rect (20, 20, 120, 200); // se mudar, verificar no Inspector
var windowRect2 : Rect = Rect (20, 20, 120, 200); // se mudar, verificar no Inspector

var janelaEscondida = true;
var janelaEscondida2 = true;

var altura: float;
var largura: float;
var perSkin: GUISkin;


var posXb      : float;
var posYb      : float;
var alturaB     : float;
var larguraB    : float;

public var logoTexture : Texture;
private var PodeApertar : boolean = true;
private var PodeApertar2 : boolean = true;
private var PodeApertar3 : boolean = true;

var a: float;
var l: float;

//Popup
var posiXPop : float;
var posiYPop : float;
var largXPop : float;
var altYPop  : float;

var largBotaoPop : float;
var altBotaoPop  : float;

function Start () 
{
	altura  = 50;
	largura = 150;
	cont = 0;
	
	largXPop = 180;
	altYPop  = 300;
	
}
function mostraJanela()
 { // abrir janela
 	renderizar = true;
}
 function escondeJanela(){
 	renderizar = true;
}
 function mostraJanela1()
 { // abrir janela
 	renderizar1 = true;
}
//fim função abrir janela

function mostraJanela2()
 { // abrir janela
 	renderizar2 = true;
}

//fim função abrir janela
 function mostraJanela3()
 { // abrir janela
 	renderizar3 = true;
}

//fim função abrir janela

function OnGUI ()
{
	GUI.skin = perSkin;
	GUI.Box(Rect(0,80, 190, (altura*4)+40),"");
	posicaoX = Screen.width/2 - largura/2;
 	posicaoY = Screen.height/2 - altura/2;
	if(GUI.Button(Rect(10,100,150,altura),"Introduçao"))
	{
			if(PodeApertar == true){
			
			GameObject.Find("intro_texture").guiTexture.texture = capI_texture;
			if (janelaEscondida == true)
			{
			//GUI.DrawTexture(new Rect(0, 0, Screen.width, Screen.height), intro_texture, ScaleMode.ScaleToFit, true);
			renderizar = true;
	   		mostraJanela();
	   		janelaEscondida = false;
	 		}
		  	else
		  	{
		   		escondeJanela();
		   		janelaEscondida = true;
		  	}
		}
		PodeApertar2 = false;
	}
	
	
	
	posicaoX = Screen.width/2 - largura/2;
    posicaoY = Screen.height/2 - altura/2;
  		if(GUI.Button (Rect(10,150,150,altura),"Capitulo 1"))
	{
		
	//GUI.DrawTexture(new Rect(0, 0, Screen.width, Screen.height), capI_texture, ScaleMode.ScaleToFit, true);
			if(PodeApertar == true){
			GameObject.Find("intro_texture").guiTexture.texture = capI_texture;
			if (janelaEscondida == true)
			{
			renderizar1 = true;
	   		mostraJanela1();
	   		janelaEscondida = false;
	 		}
		  	else
		  	{
		   		escondeJanela();
		   		janelaEscondida = true;
		  	}
		}
		PodeApertar2 = false;
	}
	
	
	
	posicaoX = Screen.width/2 - largura/2;
	posicaoY = Screen.height/2 - altura/2;
	if (GUI.Button (Rect(10,200,150,altura),"Capitulo 2"))
	{
		
		if(PodeApertar == true){
			
			if (janelaEscondida == true)
			{
			renderizar2 = true;
	   		mostraJanela2();
	   		janelaEscondida = false;
	 		}
		  	else
		  	{
		   		escondeJanela();
		   		janelaEscondida  = true;
		  	}
		}
		PodeApertar2 = false;
	}

		posicaoX = Screen.width/2 - largura/2;
		posicaoY = Screen.height/2 - altura/2 +30;
	
		posicaoX = Screen.width/2 - largura/2;
		posicaoY = Screen.height/2 - altura/2;
		if(GUI.Button (Rect(10,250,150,altura),"Capitulo 3"))
	{
	  	
	  	if(PodeApertar == true){
		if (janelaEscondida == true)
		{
		renderizar3 = true;
   		mostraJanela3();
   		janelaEscondida = false;
 		}
	  	else
	  	{
	   		escondeJanela();
	   		janelaEscondida  = true;
	  	}
	  	}

	 PodeApertar2 = false;
	}
	
	if (renderizar) 
	{
		larguraB = 200;
		alturaB = 100;
		
		posXb = Screen.width/2 - larguraB/2;
		posYb = Screen.height/2 - alturaB/2 -60;
		
		GUI.skin = null;
		
		GUI.Box(Rect(0,0, Screen.width, Screen.height)," ");//Criar - boxshadow fundo escuro - tela cheia
		windowRect = GUI.Window (1, Rect (180,100,largXPop+500,altYPop-80), janela, "");//Titulo
		
	}
	
	if (renderizar1) 
	{
		larguraB = 200;
		alturaB = 100;
		
		posXb = Screen.width/2 - larguraB/2;
		posYb = Screen.height/2 - alturaB/2 -60;
		
		GUI.skin = null;
		GUI.Box(Rect(0,0, Screen.width, Screen.height)," ");//Criar - boxshadow fundo escuro -  cheia
		windowRect = GUI.Window (1, Rect (180,150,largXPop+500,altYPop-10), janela1, "");//Titulo

	} 
	if (renderizar2) 
	{
		larguraB = 200;
		alturaB = 100;
		posXb = Screen.width/2 - larguraB/2;
		posYb = Screen.height/2 - alturaB/2 -60;
		
		//GUI.Box(Rect(0,0, Screen.width, Screen.height)," ");//Criar - boxshadow fundo escuro - tela cheia
		//windowRect2 = GUI.Window (1, Rect (180,200,largXPop+500,altYPop+20), janela2, "");//Titulo
	} 
	if (renderizar3) 
	{
		larguraB = 200;
		alturaB = 100;
		posXb = Screen.width/2 - larguraB/2;
		posYb = Screen.height/2 - alturaB/2 -60;
		
		//GUI.Box(Rect(0,0, Screen.width, Screen.height)," ");//Criar - boxshadow fundo escuro - tela cheia
		//windowRect2 = GUI.Window (1, Rect (180,250,largXPop+500,altYPop+20), janela3, "");//Titulo
	} 

}

function janela (windowID : int) 
{
	PodeApertar = false;
	largBotaoPop = 90;
	altBotaoPop  = 30;

	if(GUI.Button (Rect((largXPop/2)-(largura/2),10,largura,altura), GUIContent ("Fase I", "MouseOverOnButton1")))
	{
		Application.LoadLevel("Fase01");
	}
	mouseover = GUI.tooltip;
	
	if(GUI.Button (Rect((largXPop/2)-(largura/2),altura+10,largura,altura), GUIContent ("Fase II", "MouseOverOnButton2")))
	{
		Application.LoadLevel("Fase02");
	}
	mouseover = GUI.tooltip;

	if(GUI.Button (Rect((largXPop/2)-(largura/2),(altura*2)+10,largura,altura), GUIContent ("Fase III", "MouseOverOnButton3")))
	{
		Application.LoadLevel("Fase03");
	}
	
	mouseover = GUI.tooltip;
	
	if(GUI.Button(Rect((largXPop/2)-(largura/2),(altura*3)+10,largura,altura),GUIContent ("Voltar", ""))){
		 Application.LoadLevel(Application.loadedLevel);
		}
		
		//PopUp botao1
	if (mouseover == "MouseOverOnButton1") 
	{
		GUI.Box(Rect((largXPop/2)-(largura/2)+150,10,largura,altura),"Pontos Obtidos: \n "/* + NextLevel.pontuacaoTotal[2] */);
		print ("Pairando Button1"); 
	}
	//PopUp botao2
	if (mouseover == "MouseOverOnButton2") 
	{
		GUI.Box(Rect((largXPop/2)-(largura/2)+150,altura+10,largura,altura),"Pontos Obtidos: \n "/* + NextLevel.pontuacaoTotal[3]*/);
		print ("Pairando Button2"); 
	}
	//PopUp botao3
	if (mouseover == "MouseOverOnButton3") 
	{
		GUI.Box(Rect((largXPop/2)-(largura/2)+150,(altura*2)+10,largura,altura),"Pontos Obtidos: \n "/* + NextLevel.pontuacaoTotal[4]*/);
		print ("Pairando Button3");
	}	
}


//Posiciona todos os botoes da janela do Capitulo 1
function janela1 (windowID : int) 
{
	PodeApertar = false;
	largBotaoPop = 90;
	altBotaoPop  = 30;
	

	if (GUI.Button ((Rect((largXPop/2)-(largura/2),10,largura,altura)), GUIContent ("Fase I", "MouseOverOnButton1")))
	{
		Application.LoadLevel("Fase04");
	}
	mouseover = GUI.tooltip;
		
	if (GUI.Button ((Rect((largXPop/2)-(largura/2),altura+10,largura,altura)),GUIContent ("Fase II", "MouseOverOnButton2")))
	{
		Application.LoadLevel("Fase05");
	}
	mouseover = GUI.tooltip;

	if(GUI.Button ((Rect((largXPop/2)-(largura/2),(altura*2)+10,largura,altura)),GUIContent ("Fase III", "MouseOverOnButton3")))
	{
		Application.LoadLevel("Fase06");
	}
	mouseover = GUI.tooltip;

	if(GUI.Button((Rect((largXPop/2)-(largura/2),(altura*3)+10,largura,altura)),GUIContent ("Fase IV", "MouseOverOnButton4")))
	{
		Application.LoadLevel("Fase07");
	}
	mouseover = GUI.tooltip;
			
	if(GUI.Button(Rect((largXPop/2)-(largura/2),(altura*4)+10,largura,altura),GUIContent ("Voltar", ""))){
		 Application.LoadLevel(Application.loadedLevel);
		}
	
	//PopUp botao1
	if (mouseover == "MouseOverOnButton1") 
	{
		GUI.Box(Rect((largXPop/2)-(largura/2)+150,10,largura,altura),"Pontos Obtidos: \n" /*+ NextLevel.pontuacaoTotal[5]*/);
		print ("Pairando Button1"); 
	}
	//PopUp botao2
	if (mouseover == "MouseOverOnButton2") 
	{
		GUI.Box(Rect((largXPop/2)-(largura/2)+150,altura+10,largura,altura),"Pontos Obtidos: \n" /*+ NextLevel.pontuacaoTotal[6] */);
		print ("Pairando Button2"); 
	}
	//PopUp botao3
	if (mouseover == "MouseOverOnButton3") 
	{
		GUI.Box(Rect((largXPop/2)-(largura/2)+150,(altura*2)+10,largura,altura),"Pontos Obtidos: \n " /*+ NextLevel.pontuacaoTotal[7]*/);
		print ("Pairando Button3");
	}
	//PopUp botao4
	if (mouseover == "MouseOverOnButton4") 
	{
		GUI.Box(Rect((largXPop/2)-(largura/2)+150,(altura*3)+10,largura,altura),"Pontos Obtidos: \n" /*+ NextLevel.pontuacaoTotal[8]*/);
		print ("Pairando Button4"); 
	}
	
			
}
/*
//Posiciona todos os botoes da janela do Capitulo 2
function janela2 (windowID : int) 
{
	PodeApertar = false;
	largBotaoPop = 90;
	altBotaoPop  = 30;

        
        GUI.Button(Rect((largXPop/2)-(largura/2),10,largura,altura),GUIContent ("Button1", "MouseOverOnButton1"));mouseover = GUI.tooltip;
       
        GUI.Button (Rect((largXPop/2)-(largura/2),altura+10,largura,altura),GUIContent ("Button2", "MouseOverOnButton2"));mouseover = GUI.tooltip;

	    GUI.Button (Rect((largXPop/2)-(largura/2),(altura*2)+10,largura,altura),GUIContent ("Button3", "MouseOverOnButton3"));mouseover = GUI.tooltip;

		GUI.Button(Rect((largXPop/2)-(largura/2),(altura*3)+10,largura,altura),GUIContent ("Button4", "MouseOverOnButton4"));mouseover = GUI.tooltip;

		GUI.Button(Rect((largXPop/2)-(largura/2),(altura*4)+10,largura,altura),GUIContent ("Button5", "MouseOverOnButton5"));mouseover = GUI.tooltip;
		
		if(GUI.Button(Rect((largXPop/2)-(largura/2),(altura*5)+10,largura,altura),GUIContent ("Voltar", ""))){
		 Application.LoadLevel(Application.loadedLevel);
		}

//PopUp botao1
	if (mouseover == "MouseOverOnButton1") 
	{
		GUI.Box(Rect((largXPop/2)-(largura/2)+150,10,largura,altura),"Pontos Obtidos: \n ");
		print ("Pairando Button1"); 
	}
	//PopUp botao2
	if (mouseover == "MouseOverOnButton2") 
	{
		GUI.Box(Rect((largXPop/2)-(largura/2)+150,altura+10,largura,altura),"This is a title");
		print ("Pairando Button2"); 
	}
	//PopUp botao3
	if (mouseover == "MouseOverOnButton3") 
	{
		GUI.Box(Rect((largXPop/2)-(largura/2)+150,(altura*2)+10,largura,altura),"This is a title");
		print ("Pairando Button3");
	}
	//PopUp botao4
	if (mouseover == "MouseOverOnButton4") 
	{
		GUI.Box(Rect((largXPop/2)-(largura/2)+150,(altura*3)+10,largura,altura),"This is a title");
		print ("Pairando Button4"); 
	}
	//PopUp botao5
	if (mouseover == "MouseOverOnButton5") 
	{
		GUI.Box(Rect((largXPop/2)-(largura/2)+150,(altura*4)+10,largura,altura),"This is a title");
		print ("Pairando Button5"); 
	}
}
	
//Posiciona todos os botoes da janela do Capitulo 3
function janela3 (windowID : int) 
{
	PodeApertar = false;
	largBotaoPop = 90;
	altBotaoPop  = 30;

        
        GUI.Button(Rect((largXPop/2)-(largura/2),10,largura,altura),GUIContent ("Button1", "MouseOverOnButton1"));mouseover = GUI.tooltip;
       
        GUI.Button (Rect((largXPop/2)-(largura/2),altura+10,largura,altura),GUIContent ("Button2", "MouseOverOnButton2"));mouseover = GUI.tooltip;

	    GUI.Button (Rect((largXPop/2)-(largura/2),(altura*2)+10,largura,altura),GUIContent ("Button3", "MouseOverOnButton3"));mouseover = GUI.tooltip;

		GUI.Button(Rect((largXPop/2)-(largura/2),(altura*3)+10,largura,altura),GUIContent ("Button4", "MouseOverOnButton4"));mouseover = GUI.tooltip;

		GUI.Button(Rect((largXPop/2)-(largura/2),(altura*4)+10,largura,altura),GUIContent ("Button5", "MouseOverOnButton5"));mouseover = GUI.tooltip;
		
		if(GUI.Button(Rect((largXPop/2)-(largura/2),(altura*5)+10,largura,altura),GUIContent ("Voltar", ""))){
		 Application.LoadLevel(Application.loadedLevel);
		}
		//PopUp botao1
	if (mouseover == "MouseOverOnButton1") 
	{
		GUI.Box(Rect((largXPop/2)-(largura/2)+150,10,largura,altura),"This is a title");
		print ("Pairando Button1"); 
	}
	//PopUp botao2
	if (mouseover == "MouseOverOnButton2") 
	{
		GUI.Box(Rect((largXPop/2)-(largura/2)+150,altura+10,largura,altura),"This is a title");
		print ("Pairando Button2"); 
	}
	//PopUp botao3
	if (mouseover == "MouseOverOnButton3") 
	{
		GUI.Box(Rect((largXPop/2)-(largura/2)+150,(altura*2)+10,largura,altura),"This is a title");
		print ("Pairando Button3");
	}
	//PopUp botao4
	if (mouseover == "MouseOverOnButton4") 
	{
		GUI.Box(Rect((largXPop/2)-(largura/2)+150,(altura*3)+10,largura,altura),"This is a title");
		print ("Pairando Button4"); 
	}
	//PopUp botao5
	if (mouseover == "MouseOverOnButton5") 
	{
		GUI.Box(Rect((largXPop/2)-(largura/2)+150,(altura*4)+10,largura,altura),"This is a title");
		print ("Pairando Button5"); 
	}
*/