const cleanChords = () => {
  var divchord = document.getElementById("image");

  if (divchord.firstChild) {
    while (divchord.firstChild) {
      element.removeChild(divchord.firstChild);
    }
  }
};
