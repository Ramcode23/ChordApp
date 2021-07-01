let rbfamily=document.getElementById('rbfamily')
let rbprogrestion=document.getElementById('rbprogretion')

function desableHandleClick() {
    
 document.getElementById('inputselectprogrsion').disabled = true;
 document.getElementById('inputselectprogrsion').children[0].selected=true
 cleanChords()
}
function enableHandleClick() {
 document.getElementById('inputselectprogrsion').disabled = false;
 cleanChords()
}