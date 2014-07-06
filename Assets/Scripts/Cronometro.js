#pragma strict

static public var run: boolean; 
private var textTime : String;
static public var segundos : float;
public var milesegundos : int;



function Start ()
{
	run = false;
	segundos = 0;
	milesegundos = 0;
}

function Update () 
{
	if(run == false)
	{
		if((Input.GetButtonDown ("Horizontal")) && (segundos == 0) && (milesegundos == 0))
		{
 			run = true;
 		}
 	}
 	
	if(run == true)
	{
		milesegundos += Time.deltaTime*100f;
		if(milesegundos > 99)
		{
			milesegundos = 0;
			segundos++;
		}
	}
	
	guiText.pixelOffset = Vector2 ((Screen.width/2.5-Screen.width/54),Screen.height/2.5);
	guiText.fontSize = 25;
	textTime = segundos.ToString("00") + ":" + milesegundos.ToString("00");
	GetComponent(GUIText).text = textTime.ToString();
	
	
}
