using UnityEngine;
using System.Collections;

public class Q_1_efeito : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	void OnGUI () {
		if (Time.time % 2 < 1) {
			if (GUI.Button (new Rect (10,10,200,20), "Meet the flashing button")) {
				print ("You clicked me!");
			}
		}
	}
}
