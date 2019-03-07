function theBeatlesPlay(musicians, instruments) {
  var x = [];
  for (var i = 0; i < musicians.length; i++){
    var y = musicians[i] + " plays " + instruments[i];
    x.push(y);
  }
  return x;
}

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

