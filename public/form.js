document.getElementById('track-artist').addEventListener('click', function(e) {
  e.preventDefault();  
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(xhr.status === 200) {
      var recipes = JSON.parse(xhr.responseText);
      createCard(recipes);
    }
  };
  var keyword = document.getElementById('keyword').value;
  xhr.open('POST', 'http://localhost:1337/query', true);
  xhr.send(keyword);
}, false);


var counter = 0;

$("#plus").click(function(){
  counter++;
  $("#count").text(counter);
});

$("#minus").click(function(){
  counter--;    
  $("#count").text(counter);
});
