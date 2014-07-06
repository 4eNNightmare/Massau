#pragma strict

private var verLivro : boolean = true;

function OnTriggerEnter( other : Collider ){
		if (  other.gameObject.name == "personagem" && verLivro == true){
		animation.Play("abrir");
		animation.PlayQueued("pagina");
		verLivro = false;
	}
}

