// var jq = jQuery.noConflict();
//
// jq.ajax({
//   key: 'd15fe3818a34b197a285e572b80a7300'
//   url: 'http://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&api_key=d15fe3818a34b197a285e572b80a7300',
//   method: 'GET',
//   success: function(response) {
//
//     jq('#main').empty();
//     var cities = response.results
//
//     console.log(cities)
//             cities.forEach(radio => {
//
//                 let elem = `<p>${radio.} population is ${radio.} and has ${radio.} </p><br>`
//                 console.log();
//
//                 jq('#main').append(elem)
//             });
//   },
//
//
//
//     error: function(error) {
//
// }
// });
