var cursor : Texture2D; 
var toEmCima = 0;
 
function OnMouseOver(){ 
  toEmCima=1;
} 

function OnMouseExit(){ 
  Screen.showCursor = true; 
  
   toEmCima=0;
} 
    
function OnGUI(){ 
 GUI.depth = 0; //Para definir que o cursor fica por cima de outros controls.
 if(toEmCima==1){
    GUI.Label(Rect(Input.mousePosition.x-12, Screen.height - Input.mousePosition.y-10, 100, 100), cursor); 
   Screen.showCursor = false;  
    
 }
}