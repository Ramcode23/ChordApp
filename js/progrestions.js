


let progressionSelect = document.getElementById("inputselectprogrsion");

let gradesProgression = [];

const progresion = [
  [1, 5],
  [1, 5, 4],
  [1, 4, 5],
  [1, 5, 6, 4],
  [6, 4, 1, 5],
  [1, 2, 6, 5, 4],
];

/* const chordsApi = (url) => {
  fetch(url)
    .then((respose) => respose.json())
    .then((data) => {
      console.log(data);
      chordData = data;
    });
};

chordsApi("https://api.uberchord.com/v1/chords/A");


progressionSelect.addEventListener("change", (event) => {
  progressionSelect = event.target.value;

  chordData.map(data =>{
    let {chordName,strings, fingering} =data;
     fingering=(fingering.replaceAll('X','-')).split(" ").join("");
    strings=(strings.replaceAll('X','x')).split(" ").join("");
    chordName= chordName.replaceAll(',','') 
    console.log(chordName,strings,fingering)
     diagrams=diagrams.innerHTML+` <chord  name="${chordName}" positions="${strings}" fingers="${fingering}"></chord>` 
     diagrams=diagrams.innerHTML+` <chord  name="${chordName}" positions="${strings}" fingers="${fingering}"></chord>` 
     console.log(data);
  })

}); */

const loadGrades = () => {
  let inner = "";
  gradesProgression.map((n, i) => {
    inner += ` <option value="${i}">${n}</option> `;
  });

  progressionSelect.innerHTML = progressionSelect.innerHTML + inner;
};

const converToRomans = () => {
  progresion.map((grades) => {
    let p = "";

    grades.map((grade) => {
      if (grade == 1) {
        p = p + "I ";
      }
      if (grade == 2) {
        p = p + "II ";
      }
      if (grade == 3) {
        p = p + "III ";
      }
      if (grade == 4) {
        p = p + "IV ";
      }
      if (grade == 5) {
        p = p + "V ";
      }
      if (grade == 6) {
        p = p + "VI ";
      }
      if (grade == 7) {
        p = p + " VII";
      }
    });

    gradesProgression.push(p);
  });
};

converToRomans();
loadGrades();

