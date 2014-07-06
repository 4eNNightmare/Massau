#pragma strict

public var cameraDistance : float = 10.0;
private var CameraPointObj : GameObject;
private var CameraPoint_Reference : GameObject;
private var cameraPoint : Transform;
private var Center : Transform;


function Start () {
	CameraPointObj = GameObject.Find("CameraPoint");
	CameraPoint_Reference = GameObject.Find("personagem/CameraPoint_Reference");
	cameraPoint = CameraPointObj.transform;
	Center = GameObject.Find("personagem/Center").transform;
	cameraPoint.position.z = GameObject.Find("personagem").transform.position.z + cameraDistance;
	transform.position = cameraPoint.position;
}

function FixedUpdate () {
	if(!Buraco.caiu){
		CameraPointObj.transform.position.x = CameraPoint_Reference.transform.position.x;
		CameraPointObj.transform.position.y = CameraPoint_Reference.transform.position.y;
		transform.position = Vector3.Slerp(transform.position, cameraPoint.position, Time.deltaTime*2.5);
		transform.LookAt(Center);
	}
}