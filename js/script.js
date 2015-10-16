// $(function(){
  //   $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
  //   console.log(data);
  // });

  //   $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
  //   myData = data.Search[0].Title;
  //   console.log(myData);
  // });

  // $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
  //   myData = data.Search;
  //   $.each(myData, function(index,value){
  //     console.log(value.Title);
  //   });
  // });
// });

$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  var params = {
    s: searchTerm,
    r: 'json'
  };
  url = 'http://www.omdbapi.com';

  $.getJSON(url, params, function(data){
    showResults(data.Search);
  });
}

function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.Title + '</p>';
    console.log(value.Title);
  });
  $('#search-results').html(html);
}

