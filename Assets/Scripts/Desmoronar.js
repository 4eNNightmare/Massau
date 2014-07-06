#pragma strict

	public var Jogador : GameObject;
	public var maxTime : float = 0.05;
	private var time : float = 0.0;
	private var ligado : boolean = false;
	
function OnTriggerEnter( other : Collider ){
	
	if ( other.gameObject.name == "personagem" ){
		ligado = true;
	}
}

function Update(){

	if(ligado == true){
		time = time + Time.deltaTime*0.1;
		if(time > maxTime){
			Destroy(transform.Find("Model_Bloco_que_cai").gameObject); //Destroi o modelo do bloco e sua colisao.
			//sugiro neste momento summonar um objeto com um modelo separado da animaçao de desmoronamento na posiçao deste bloco.
			Destroy(this); //Destroi o trigger do bloco
		}
	
	}
	
}
