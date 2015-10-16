$(function(){
    $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
    console.log(data);
  });

    $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
    myData = data.Search[0].Title;
    console.log(myData);
  });
});
