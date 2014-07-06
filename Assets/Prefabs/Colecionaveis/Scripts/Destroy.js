#pragma strict

public var pickUpSound : AudioClip;

function OnTriggerEnter( other : Collider ){
	
	if ( other.gameObject.name == "personagem" ){
   AudioSource.PlayClipAtPoint(pickUpSound, transform.position);
     Destroy(this.gameObject);
	}
}