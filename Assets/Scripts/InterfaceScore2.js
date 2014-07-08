#pragma strict

var posXb       : float;
var posYb       : float;
var alturaB     : float;
var larguraB    : float;
//public var TexturaEstrela : Texture2D[] = new Texture2D[6]; //Paulo!
var perSkin     	: GUISkin;
var perSkin1    	: GUISkin;
var perSkin2    	: GUISkin;
var perSkin3    	: GUISkin;
var perSkin4    	: GUISkin;
var perSkin5    	: GUISkin;
var perSkin6    	: GUISkin;
var perSkin_estrela0	: GUISkin;
var perSkin_estrela1	: GUISkin;
var perSkin_estrela2	: GUISkin;
var perSkin_estrela3	: GUISkin;
var perSkin_estrela4	: GUISkin;
var perSkin_estrela5	: GUISkin;


///
var posiX   : float;
var posiY   : float;
var altura  : float;

var largBotao : float;
var altBotao  : float;

//Mostrar janela - popup
var renderizar : boolean  = false; 
var renderizar1 : boolean  = false;  
var renderizar2 : boolean  = false;  
var renderizar3 : boolean  = false;  
var renderizar4 : boolean  = false;  
 
var janelaEscondida = true;
var windowRect;

var posiXPop : float;
var posiYPop : float;
var largXPop : float;
var altYPop  : float;

var largBotaoPop : float;
var altBotaoPop  : float;

var pXText : float;
var pYText : float;

var paulo_BtnPosY : float[];//PAULO!


private var PodeApertar : boolean = true;

function mostraJanela()
{
	renderizar = true;
}
function escondeJanela()
{
	renderizar = true;//false
}

//popup 1
function mostraJanela1()
{
	renderizar1 = true;
}

//popup 2
function mostraJanela2()
{
	renderizar2 = true;
}

//popup 3
function mostraJanela3()
{
	renderizar3 = true;
}

//popup 4
function mostraJanela4()
{
	renderizar4 = true;
}


//Fim popup

function Start () 
{
	
    /*Fundo - barra*/
	alturaB = 600;//PAULO!(500)
	larguraB = 500;
			
	posXb = (Screen.width - larguraB)/2;
	posYb = (Screen.height - alturaB)/2;
	
	//Posiçao - Texto
	altura  = 50;
	
	posiX   = (Screen.width - larguraB) - larguraB/2;
	posiY   = (Screen.height - alturaB)/2;//PAULO!(posiY   = ((Screen.height - alturaB) - altura) - altura + 20;)
	
	//Tamanho Botoes
	largBotao = 150;
	altBotao  = 50;
	
	
	//Popup
	posiXPop = (Screen.width - largXPop)/2;
	posiYPop = (Screen.height - altYPop)/2;
	
	largXPop = 300;
	altYPop  = 100;
	
	largBotaoPop = 90;
	altBotaoPop  = 30;
	
	pXText = (Screen.width - largXPop)/2;
	pYText = (Screen.height - altYPop)/2;
	
	paulo_BtnPosY = new float[5]; //PAULO!
	paulo_BtnPosY[0] = posYb+310;//PAULO!
	for (var i : int = 1; i < 5; i++){//PAULO!
		paulo_BtnPosY[i] = paulo_BtnPosY[i-1] + altBotao + 0;//PAULO!
	}
}

function Update () {

}

function OnGUI()
{

	//Inicio texto
	GUI.skin = perSkin;//PAULO!

	GUI.Box(Rect(posXb,posYb,larguraB,alturaB)," ");//Criar - boxshadow fundo escuro
	
	GUI.skin = perSkin;
	GUI.Label(Rect(posXb+larguraB/2,posYb+40,0,0),"Tela de Pontuaçao");
	
	GUI.skin = perSkin1;
	GUI.Label(Rect(posXb+larguraB/2,posYb+80,0,0),"Fase 1");
	
	GUI.skin = perSkin2;
	GUI.Label(Rect(posXb+larguraB/2,posYb+120,0,0),"Tempo Gasto: " + Cronometro.segundos + "'" + GameObject.Find("Cronometro").GetComponent(Cronometro).milesegundos + "''" + "\t\t\t\t\t\t\t\t\t\t" + NextLevel.pontuacao[Application.loadedLevel] + "pts");
	
	//GUI.skin = perSkin3;
	//GUI.Label(Rect(posXb+larguraB/2,posYb+150,0,0),"Penalidade de Dificuldade:" + "\t\t\t\t\t\t\t\t-0pts");
	
	GUI.skin = perSkin4;
	if((Application.loadedLevelName == "Fase01") || (Application.loadedLevelName == "Fase02") || (Application.loadedLevelName == "Fase03"))
	{   
		GUI.Label(Rect(posXb+larguraB/2,posYb+180,0,0),"Colecionaveis Coletados: 0/0" + "\t\t\t\t\t\t\t+50pts");
	}
	else
	{
		GUI.Label(Rect(posXb+larguraB/2,posYb+180,0,0),"Colecionaveis Coletados: " + NextLevel.coletado + "/2" + "\t\t\t\t\t\t\t" + 25*NextLevel.coletado + "pts");
	}
	
	GUI.skin = perSkin5;
	GUI.Label(Rect(posXb+larguraB/2,posYb+220,0,0),"\t\t\t\tTOTAL:" + NextLevel.pontuacaoTotal[Application.loadedLevel] + "/100");
	//Fim Texto

	
	//Inicio imagem estrela
	GUI.skin = null;
	if(NextLevel.pontuacaoTotal[Application.loadedLevel] < 20){
		GUI.skin = perSkin_estrela0;
		GUI.Box(Rect((posXb+larguraB/2)-largBotao/2,posYb+250,largBotao,altBotao),"");//Paulo!
	}
	 
	if((NextLevel.pontuacaoTotal[Application.loadedLevel] >= 20) &&        (NextLevel.pontuacaoTotal[Application.loadedLevel] < 40)){
	 	GUI.skin = perSkin_estrela1;
	 	GUI.Box(Rect((posXb+larguraB/2)-largBotao/2,posYb+250,largBotao,altBotao),"");
	}
	 
	if((NextLevel.pontuacaoTotal[Application.loadedLevel] >= 40) &&        (NextLevel.pontuacaoTotal[Application.loadedLevel] < 60)){
		GUI.skin = perSkin_estrela2;
		GUI.Box(Rect((posXb+larguraB/2)-largBotao/2,posYb+250,largBotao,altBotao),"");//Paulo!
	} 
	if((NextLevel.pontuacaoTotal[Application.loadedLevel] >= 60) &&        (NextLevel.pontuacaoTotal[Application.loadedLevel] < 80)){
		GUI.skin = perSkin_estrela3;
		GUI.Box(Rect((posXb+larguraB/2)-largBotao/2,posYb+250,largBotao,altBotao),"");//Paulo! 
	}
	if((NextLevel.pontuacaoTotal[Application.loadedLevel] >= 80) &&        (NextLevel.pontuacaoTotal[Application.loadedLevel] < 100)){
		GUI.skin = perSkin_estrela4;
		GUI.Box(Rect((posXb+larguraB/2)-largBotao/2,posYb+250,largBotao,altBotao),"");//Paulo!
	}
	if(NextLevel.pontuacaoTotal[Application.loadedLevel] == 100){ 
		GUI.skin = perSkin_estrela5;
		GUI.Box(Rect((posXb+larguraB/2)-largBotao/2,posYb+250,largBotao,altBotao),"");//Paulo!
		
	}
	
	//Fim imagem
	
	//Inicio - Botoes
	GUI.skin = perSkin5;//Paulo!
	
	if(GUI.Button(Rect((posXb+larguraB/2)-largBotao/2,paulo_BtnPosY[0],largBotao,altBotao),"Continuar"))//PAULO!
	{	
		if(PodeApertar == true)
		{
			
			Time.timeScale = 1.0;
			Application.LoadLevel(Application.loadedLevel + 1);
			if(Application.loadedLevelName == "Fase07"){
				Application.LoadLevel(0);
				Menu.faseAtualNumber = 0;

			}
		}
	}
	
	if(GUI.Button(Rect((posXb+larguraB/2)-largBotao/2,paulo_BtnPosY[1],largBotao,altBotao),"Recomeçar"))//PAULO!
	{
		
		if(PodeApertar == true)
		{
			renderizar1= true;
		}
		PodeApertar = false;
	

	}
	
	if(GUI.Button(Rect((posXb+larguraB/2)-largBotao/2,paulo_BtnPosY[2],largBotao,altBotao),"Seleçao de Fases"))//PAULO!
	{
		
		if(PodeApertar == true)
		{
			renderizar2 = true;
		}
		PodeApertar = false;
	
	}
	
	if(GUI.Button(Rect((posXb+larguraB/2)-largBotao/2,paulo_BtnPosY[3],largBotao,altBotao),"Menu Principal"))//PAULO!
	{
		
		if(PodeApertar == true)
		{
			renderizar3 = true;
		}
		PodeApertar = false;
	
	}
	
	if(GUI.Button(Rect((posXb+larguraB/2)-largBotao/2,paulo_BtnPosY[4],largBotao,altBotao),"Sair"))//PAULO!
	{	
		
		if(PodeApertar == true)
		{
			renderizar4 = true;
		}
		PodeApertar = false;
	
	}
	//Fim Botoes
	
	//****************Inicio - Popup********************
	
	//1
	GUI.skin = perSkin6;
	if (renderizar1) 
	{	
		
		GUI.Box(Rect(0,0,Screen.width,Screen.height)," ");//Criar - boxshadow fundo escuro
		windowRect = GUI.Window (1, Rect(posiXPop - largXPop/2,posiYPop - altYPop/2,largXPop,altYPop), janela1,"\n\n\bDeseja Recomerçar?");//Titulo 	
	}
	
	//2
		if (renderizar2) 
		{			
			//GUI.Box(Rect(posXb,posYb,larguraB,alturaB)," ");//Criar - boxshadow fundo escuro
			windowRect = GUI.Window (1, Rect(posiXPop - largXPop/2,posiYPop - altYPop/2,largXPop,altYPop), janela1,"\n\n\bIr para Seleçao de Fases?");//Titulo 	
		}
	
	//3
		if (renderizar3) 
		{			
			//GUI.Box(Rect(posXb,posYb,larguraB,alturaB)," ");//Criar - boxshadow fundo escuro
			windowRect = GUI.Window (1, Rect(posiXPop - largXPop/2,posiYPop - altYPop/2,largXPop,altYPop), janela1,"\n\n\bIr para o Menu Principal?");//Titulo 	
		}


	//4
		if (renderizar4) 
		{			
			//GUI.Box(Rect(posXb,posYb,larguraB,alturaB)," ");//Criar - boxshadow fundo escuro
			windowRect = GUI.Window (1, Rect(posiXPop - largXPop/2,posiYPop - altYPop/2,largXPop,altYPop), janela1,"\n\n\bDeseja Sair?");//Titulo 	
		}//Fim popup
}	

function janela1 (windowID : int) 
{
	GUI.contentColor = Color.white;
	PodeApertar = false;

	largBotaoPop = 90;
	altBotaoPop  = 30;
	
	largXPop = 300;
	altYPop  = 100;
					
	pXText = (Screen.width - largXPop)/2;
	pYText = (Screen.height - altYPop)/2;
	
	
	
	if(renderizar1)//Recomeçar
	{
	
		if (GUI.Button(Rect((largXPop/2 - largBotaoPop/2) - 50,(altYPop-altBotaoPop)-10,largBotaoPop,altBotaoPop),"Sim"))
		{
			Application.LoadLevel(Application.loadedLevel);
			Time.timeScale = 1;
		}
		
		if (GUI.Button(Rect((largXPop/2 - largBotaoPop/2) + 50,(altYPop-altBotaoPop)-10,largBotaoPop,altBotaoPop),"Nao"))
		{
			
			//Destroy(gameObject);
			//Application.LoadLevelAdditive("InterfScore2");//
			renderizar1 = false;
			PodeApertar = true;
			
			//Time.timeScale = 0;
		}
	}
	
	if(renderizar2)//Seleçao de Fases
	{
	
		if (GUI.Button(Rect((largXPop/2 - largBotaoPop/2) - 50,(altYPop-altBotaoPop)-10,largBotaoPop,altBotaoPop),"Sim"))
		{
			Application.LoadLevel("SelecaoFase");
			Time.timeScale = 1;
		}
		if (GUI.Button(Rect((largXPop/2 - largBotaoPop/2) + 50,(altYPop-altBotaoPop)-10,largBotaoPop,altBotaoPop),"Nao"))
		{
			//Application.LoadLevel("InterfScore2");
			//Time.timeScale = 1;
			renderizar2 = false;
			PodeApertar = true;
			
		}
	}
	
	if(renderizar3)//Menu Principal
	{
	
		if (GUI.Button(Rect((largXPop/2 - largBotaoPop/2) - 50,(altYPop-altBotaoPop)-10,largBotaoPop,altBotaoPop),"Sim"))
		{
			Application.LoadLevel("MenuP");
			Time.timeScale = 1;
		}
		if (GUI.Button(Rect((largXPop/2 - largBotaoPop/2) + 50,(altYPop-altBotaoPop)-10,largBotaoPop,altBotaoPop),"Nao"))
		{
			//Application.LoadLevel("InterfScore2");
			//Time.timeScale = 1;
			renderizar3 = false;
			PodeApertar = true;
			
		}
	}
	
	if(renderizar4)//Sair
	{
	
		if (GUI.Button(Rect((largXPop/2 - largBotaoPop/2) - 50,(altYPop-altBotaoPop)-10,largBotaoPop,altBotaoPop),"Sim"))
		{
			Application.Quit();
			Time.timeScale = 1;
		}
		if (GUI.Button(Rect((largXPop/2 - largBotaoPop/2) + 50,(altYPop-altBotaoPop)-10,largBotaoPop,altBotaoPop),"Nao"))
		{
			//.LoadLevel("InterfScore2");
			//Time.timeScale = 1;
			renderizar4 = false;
			PodeApertar = true;
			
		}
	}
	
}





