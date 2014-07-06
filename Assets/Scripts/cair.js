#pragma strict

	public var Jogador : GameObject;
	private var ligado : boolean = false;

	
function OnTriggerEnter( other : Collider ){
	
	if ( other.gameObject.name == "personagem" ){
		ligado = true;
	}
}
function Update(){

	if(ligado == true){
		animation.CrossFade("cair");
		Destroy (gameObject,2);	
	}

}


