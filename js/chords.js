
let progressionSelected;

const convertChord = (chordData) => {
  chordData.map((data) => {
    let { chordName, strings } = data;

    strings = strings.replaceAll("X", "x").split(" ").join("");
    chordName = chordName.replaceAll(",", "");

    var element = document.getElementById("image");
  
    let root = 2 + strings.lastIndexOf("x", 2);
    root > 3 ? (root = 1) : root;
    if (strings.slice(0,3).match('[a-z][0-9][a-z]')) {
      root=2
    }
  
 
    var svg = new ChordySvg(
      {
        name: chordName,
        shape: strings,
        root: root,
        comment: "Test comment",
      },
      {
        target: element,
      }
    );
  });
};

const chordsApi = async (type) => {
      const url =formatUrl(type)
   fetch(url)
    .then((respose) => respose.json())
    .then((data) => {
          cleanChords()
            convertChord(data);
          });
  
};

const formatUrl = (type) => {

  var url=`https://api.uberchord.com/v1/chords?names=` 

  if (type==='family') {

    url=`https://api.uberchord.com/v1/chords?nameLike=${notes[root]}`
  }else{
    debugger
    progretionsconverted[progressionSelected].map(
     (p,i)=> { 
    
       if(progretionsconverted[progressionSelected].length==i+1){
          url= url+p
        }else{
          url= url+p+','
        }
  
      }
    )

  }
return url
}

progressionSelect.addEventListener("change", (event) => {
  progressionSelected = event.target.value;
 console.log(progressionSelected);
  var element = document.getElementById("image");

element.innerHTML=`<div id="spinner" class="spinner-grow" role="status">
<span class="visually-hidden">Loading...</span>
</div>`
if (rbprogrestion.checked) {
  chordsApi('progression');
  
}

});
