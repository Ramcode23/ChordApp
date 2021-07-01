const notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

let progretionsconverted = [];

let root;
let roots = document.getElementById("inputselectnotes");

const loadNotes = () => {
  let inner = "";
  notes.map((n, i) => {
    inner += ` <option value="${i}">${n}</option> `;
  });
  roots.innerHTML = roots.innerHTML + inner;
};

const converttoDiatonic = (scale, progresion) => {
  let note = 0;
  let arr = [];
  progretionsconverted = [];
  progresion.map((ps) => {
    arr = [];
    ps.map((p) => {
      if (p == 1) {
        note = 0;
      } else if (p == 2) {
        note = 2;
      } else if (p == 3) {
        note = 4;
      } else if (p == 4) {
        note = 5;
      } else if (p == 5) {
        note = 7;
      } else if (p == 6) {
        note = 9;
      } else if (p == 7) {
        note = 11;
      }
    

      if (note == 2 || note == 4 || note == 9) {
        type = "_m";
        arr.push(scale[note] + "_m");
      } else {
        arr.push(scale[note]);
      }
    });
    progretionsconverted.push(arr);
  });
};

let newscale = [];
roots.addEventListener("change", (event) => {
  root = event.target.value;
  newscale = [];
  
  newscale = newscale.concat(notes.slice(root), notes.slice(0, root));
  console.log(newscale, "new");
  converttoDiatonic(newscale, progresion);
  var progress = document.getElementById("inputselectprogrsion");
  progress.children[0].selected = true;
 cleanChords();
 if (rbfamily.checked) {
  chordsApi('family');
}
});

loadNotes();
