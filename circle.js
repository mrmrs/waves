$(document).ready(function(){
var WAV_DATA = {
  "width":1800,
  "height":140,
  "samples": [
    124,96,87,85,86,104,97,71, 95,70,103,103,65,96,63,98,
    104,85,89,79,89,122,100,80, 91,77,104,101,67,96,64,101,
    104,77,93,73,94,103,90,82, 87,82,121,106,74,96,66,106,
    104,69,97,62,97,103,86,87, 82,88,107,94,73,93,74,117,
    112,79,97,63,102,105,81,91, 76,92,103,93,81,89,79,108,
    66,47,38,29,98,122,95,100, 76,97,99,96,97,97,97,97,
    96,71,95,69,110,78,104,88, 105,95,130,99,90,97,134,105,
    91,111,132,106,117,121,85,97, 62,96,65,101,109,103,91,132,
    129,98,86,134,111,84,104,137, 125,112,137,114,125,115,101,96,
    125,113,127,111,127,110,82,92, 130,116,82,103,132,111,98,131,
    96,91,80,92,101,83,96,66, 50,119,118,89,102,84,108,94,
    102,96,105,89,103,87,84,86, 85,106,86,105,88,105,110,122,
    102,103,121,124,101,102,123,122, 100,127,112,102,103,103,109,101,
    129,110,129,109,136,119,99,112, 130,106,96,115,137,116,125,134,
    104,132,104,109,84,132,104,131, 106,131,107,100,107,132,108,89,
    111,131,107,116,122,103,102,103, 107,99,128,109,129,109,130,130,
    101,99,134,113,93,104,134,128, 110,137,118,124,117,100,99,124,
    114,126,114,129,136,108,105,104, 110,96,98,97,93,89,105,100,
    100,104,104,106,119,120,121,121, 120,131,109,100,126,121,97,100,
    126,133,105,133,130,110,129,99, 107,105,126,113,126,115,125,103,
    103,119,125,100,98,121,124,101, 125,113,103,103,104,102,93,105,
    98,106,100,136,120,98,101,133, 104,94,114,136,117,123,135,106,
    132,106,107,83,132,105,128,103, 132,103,87,86,136,109,89,104,
    132,107,114,124,90,95,66,77, 93,127,111,129,110,129,132,100,
    91,133,115,84,104,132,128,110, 137,119,122,119,99,102,122,115,
    123,116,125,114,83,95,128,118, 85,103,128,115,100,131,102,92,
    91,81,100,114,121,85,98,93, 106,87,104,96,103,94,102,101,
    105,107,103,103,108,129,102,109, 96,107,108,123,111,127,95,101,
    115,128,102,98,103,99,103,121, 110,94,98,80,104,88,100,107,
    132,114,127,105,99,111,131,110, 95,114,130,108,100,104,84,128,
    109,106,90,103,94,126,105,129, 107,93,99,134,112,88,107,92,
    107,95,105,94,102,78,97,98, 99,97,100,105,129,130,126,121,
    135,123,126,104,131,131,107,136, 125,130,126,123,122,133,118,123,
    118,121,123,123,119,131,122,124, 118,132,115,96,130,124,118,122,
    121,120,131,125,126,125,129,134, 126,120,132,127,126,112,123,135,
    109,129,132,124,131,123,120,128, 130,108,129,113,139,127,120,124,
    122,123,130,123,89,95,109,124, 125,118,124,120,125,132,122,133,
    122,134,122,100,101,134,109,95, 108,137,122,118,135,111,129,111,
    105,91,128,110,129,109,129,110, 100,103,132,112,97,105,132,111,
    107,127,104,102,103,105,102,125, 114,94,92,127,114,91,100,84,
    94,66,48,40,30,79,125,95, 94,97,91,79,61,46,34,27,
    120,123,91,100,85,115,131,99, 97,92,94,132,111,118,130,105,
    122,120,127,93,97,116,134,114, 99,113,126,99,100,120,134,112,
    128,133,105,132,101,109,88,131, 104,127,107,129,97,92,101,132,
    104,93,113,129,101,122,118,84, 96,68,89,82,131,105,132,104,
    135,127,98,88,136,110,88,107, 136,123,117,136,113,127,113,103,
    97,126,110,127,110,128,109,85, 90,132,115,84,104,130,112,108,
    127,98,96,84,79,100,121,116, 124,116,101,103,87,105,91,106,
    90,106,99,106,107,106,99,115, 125,101,107,99,106,116,118,118,
    122,91,103,121,123,94,102,103, 100,101,124,105,95,94,86,106,
    87,98,116,129,118,124,103,103, 117,126,103,100,120,126,106,102,
    101,87,131,103,110,84,106,97, 126,105,130,101,96,107,133,107,
    93,105,96,107,94,104,93,101, 79,100,93,101,103,95,108,132,
    117,125,126,132,119,128,129,126, 124,126,123,124,123,121,119,121,
    130,121,132,124,134,118,126,128, 133,120,127,129,118,117,116,119,
    120,120,119,115,121,132,124,134, 125,132,120,120,123,132,123,125,
    129,129,130,130,130,130,130,120, 117,118,128,124,130,126,118,121,
    130,131,121,117,128,129,130,131, 131,128,131,131,130,131,122,86,
    81,68,56,94,128,99,98,93, 96,105,97,100,99,98,97,98,
    68,97,68,109,80,103,89,104, 89,130,107,100,107,132,108,99,
    110,132,106,116,122,102,103,104, 107,97,129,109,129,109,130,129,
    101,100,134,113,92,104,134,128, 110,137,118,123,117,100,100,124,
    114,125,115,126,113,102,103,130, 117,84,104,130,113,100,130,107,
    100,103,104,107,119,119,121,120, 119,134,110,101,126,121,97,100,
    126,134,105,133,130,110,129,99, 107,104,127,114,126,117,139,116,
    102,89,99,97,57,80,46,24, 96,95,74,93,78,109,92,131,
    107,131,111,134,119,100,108,131, 107,95,113,137,117,123,135,106,
    131,106,108,85,131,105,131,106, 131,108,100,105,132,110,89,107,
    132,108,112,122,107,106,103,99, 108,72,95,97,107,131,110,125,
    127,134,125,129,129,130,130,129, 128,127,126,127,129,124,132,123,
    133,126,131,123,128,122,134,121, 124,117,123,119,123,118,125,122,
    125,123,120,129,123,130,124,130, 119,122,119,131,126,124,119,124,
    120,124,117,123,125,125,123,120, 126,124,126,127,126,128,125,123,
    130,127,122,122,121,122,121,120, 123,125,122,126,119,124,129,124,
    130,124,129,113,121,124,132,124, 123,122,123,122,122,122,125,123,
    126,120,123,129,123,131,120,132, 122,125,125,133,118,124,120,124,
    120,121,121,125,121,126,123,121, 131,121,133,121,132,111,123,121,
    133,124,125,123,124,122,125,120, 125,123,125,123,122,129,121,131,
    123,131,125,126,123,133,122,124, 121,124,121,124,110,103,105,104,
    97,105,90,81,66,57,109,119, 96,100,88,103,101,99,99,102,
    95,100,93,76,92,77,109,80, 105,87,105,100,127,104,103,114,
    129,104,102,116,128,102,122,116, 103,102,104,108,91,131,105,131,
    104,136,125,100,101,134,109,95, 108,137,122,118,135,111,128,111,
    104,92,128,110,129,110,129,110, 100,103,132,113,85,105,132,111,
    107,127,104,102,103,105,104,125, 114,126,114,125,132,104,101,131,
    117,92,103,130,132,104,136,124, 117,124,98,104,116,121,120,121,
    124,138,110,101,85,106,87,52, 81,36,24,101,89,80,88,85,
    107,107,126,114,126,116,133,114, 100,117,126,103,98,120,136,111,
    127,133,105,132,101,109,91,131, 106,130,109,129,104,101,111,130,
    104,93,115,129,104,120,118,103, 102,104,103,93,104,99,105,93,
    135,125,98,87,136,109,87,109, 136,123,117,137,113,127,113,102,
    93,128,111,125,108,128,110,84, 89,132,115,84,102,131,111,104,
    129,96,93,73,64,99,121,117, 125,117,123,132,104,94,128,119,
    84,101,129,131,105,137,126,117, 125,98,105,115,123,118,123,120,
    122,88,95,120,123,94,98,123, 120,100,130,108,91,90,82,99,
    104,129,82,88,89,107,93,100, 97,100,98,100,102,104,106,104,
    103,98,131,104,110,95,105,103, 126,106,130,101,96,106,133,106,
    93,107,96,102,115,116,95,100, 79,101,92,99,101,132,115,127,
    109,97,104,132,111,92,107,133, 110,101,106,87,123,116,102,97,
    100,99,123,108,95,99,86,103, 78,105,81,107,93,107,99,103,
    97,100,88,92,90,83,96,89, 85,121,132,106,95,125,122,87,
    95,127,132,105,137,127,114,128, 96,103,113,125,118,125,117,137,
    113,97,116,127,96,94,122,134, 111,131,132,108,132,99,104,97,
    131,110,130,110,138,120,97,105, 131,103,91,113,136,117,127,135,
    104,134,104,102,85,133,107,132, 105,137,125,97,93,135,107,88,
    106,136,122,121,137,111,130,111, 97,99,130,111,130,110,131,130,
    102,95,134,112,83,96,133,128, 113,138,118,125,117,95,99,126,
    115,127,115,127,133,103,92,130, 118,83,98,129,131,107,138,124,
    119,124,95,104,120,120,123,121, 121,134,111,99,124,122,90,96,
    125,133,107,135,130,111,130,97, 103,107,128,116,127,114,137,116,
    96,114,127,99,93,91,79,86, 81,79,73,75,74,87,69,81,
    87,86,84,69,57,42,30,25, 18,14,12,9,8,8,8,8,
    8,8,8,8,8,8,8,8] 
}

  var svgContainer = d3.select("svg");

var sample_data = WAV_DATA.samples;

  svgContainer.selectAll("circle")
               .data(sample_data.slice(0,2))
               .enter()
               .append("circle")
               .attr("cx", function(d,i) { return 140;})
               .attr("cy", function(d,i) { return 140;})
               .attr("r", function(d,i) { return 30;})
               .style("fill", "#ff33cc");

 for (var i=0; i<sample_data.length;i++) {
      svgContainer.selectAll("circle")
              .data( sample_data.slice(i,i+2))
              .transition()
              .delay(200*i)
              .duration(200)
              .attr("r", function(d,i) { return i * d;})
              .style("fill", function(d,i) { 
                return d * d;
              });
  }

//  var circles = svgContainer.selectAll("circle")
//                            .data(WAV_DATA.samples)
//                            .enter()
//                            .append("circle");
//
//  var circleAttributes = circles.transition()
//                          .attr("cx", function(d,i) { return (i * d) / 10;})
//                          .attr("cy", function(d,i) { return d;})
//                          .attr("r", function(d,i) { return d / 30;})
//                          .style("fill", "red");
});
