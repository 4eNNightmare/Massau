


var windowRect : Rect = Rect (20, 20, 120, 50);

	function OnGUI () {
		windowRect = GUI.Window (0, windowRect, DoMyWindow, "Voce Perdeu");
	}

	// Make the contents of the window - Adicione conteudo na janela
	function DoMyWindow (windowID : int) {
		if (GUI.Button (Rect (10,20,100,20), "Recomeçar"))
		{
			Application.LoadLevel("Questionario_4");
			GUI.DragWindow ();
		}
		 //Inserir uma enorme área arrastando no final.
		 //Isso fica preso à janela (como todos os outros controles) para que você não pode nunca
		 //Arraste a janela do lado de fora.
		
	}