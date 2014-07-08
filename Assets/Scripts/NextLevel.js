#pragma strict

public var NextLevelSound : AudioClip;
private var timeJogador : int[];
public var timeMedio : int[];
static public var pontuacao : float[];
static public var coletado : int = 0;
static public var pontuacaoTotal : float[];

static public var pegarColec : boolean[] = new boolean[30];
static public var pegarPag : boolean[] = new boolean[30];

function Start ()
{				
	Menu.faseAtualNumber = Application.loadedLevel;
	for(var i : int =0; i<30;i++){
		pegarColec[i] = false;
		pegarPag[i] = false;
	}
	timeJogador = new int[40];
	timeMedio = new int[40];	
	pontuacao = new float[40];	
	pontuacaoTotal = new float[40];
	coletado = 0;
	
	if(Application.loadedLevelName == "Fase01")
	{
		timeMedio[Application.loadedLevel] = 12;
	}
	if(Application.loadedLevelName == "Fase02")
	{
		timeMedio[Application.loadedLevel] = 15;
	}
	if(Application.loadedLevelName == "Fase03")
	{
		timeMedio[Application.loadedLevel] = 23;
	}
	if(Application.loadedLevelName == "Fase04")
	{
		timeMedio[Application.loadedLevel] = 12;
	}
	if(Application.loadedLevelName == "Fase05")
	{
		timeMedio[Application.loadedLevel] = 21;
	}
	if(Application.loadedLevelName == "Fase06")
	{
		timeMedio[Application.loadedLevel] = 32;
	}
	if(Application.loadedLevelName == "Fase07")
	{
		timeMedio[Application.loadedLevel] = 26;
	}
}

function Update()
{

}

function OnTriggerEnter( other : Collider )
{
	if ( other.gameObject.name == "personagem" )
	{
		Debug.Log("Tempo Medio: " + timeMedio[Application.loadedLevel]);
		Debug.Log("Pegou Colecionavel? " + pegarColec[Application.loadedLevel]);
		Debug.Log("Pegou Pagina Perdida? " + pegarPag[Application.loadedLevel]);  
		Cronometro.run = false;
		
		//Calculo Pontuaçao Tempo
		timeJogador[Application.loadedLevel] = Cronometro.segundos;
		
		pontuacao[Application.loadedLevel] = (50 * timeMedio[Application.loadedLevel]) / timeJogador[Application.loadedLevel];
		
		if(pontuacao[Application.loadedLevel] > 50)
		{
			pontuacao[Application.loadedLevel] = 50;
		}
		//fim
		pontuacaoTotal[Application.loadedLevel] = pontuacao[Application.loadedLevel] + 50;
		if(GameObject.Find("ColecionavelModel"))
		{
			pontuacaoTotal[Application.loadedLevel] -= 25;
		}else
		{
			coletado++;
			pegarColec[Application.loadedLevel] = true;
		}
		
		if(GameObject.Find("PaginaPerdidaModel"))
		{
			pontuacaoTotal[Application.loadedLevel] -= 25;
		}else
		{
			coletado++;
			pegarPag[Application.loadedLevel] = true;
		}
		
		Debug.Log("Pontuaçao Total: " + pontuacaoTotal[Application.loadedLevel]);

		Application.LoadLevelAdditive("InterfScore2");
		AudioSource.PlayClipAtPoint(NextLevelSound, transform.position);
		Time.timeScale = 0;
		Debug.Log("Pontuaçao: " + pontuacao[Application.loadedLevel]);
	
	}
}


