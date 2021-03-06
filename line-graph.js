$(document).ready(function(){
  d3.json("augusts-everytime.json", function(error, json) {
    if (error) return console.warn(error);
    var sample_data = json.samples;
    var svgContainer = d3.select("svg#container")
var n = 40,
    random = d3.random.normal(0, .2),
    data = d3.range(n).map(random);
 
var margin = {top: 20, right: 20, bottom: 20, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
 
var x = d3.scale.linear()
    .domain([0, n - 1])
    .range([0, width]);
 
var y = d3.scale.linear()
    .domain([-1, 1])
    .range([height, 0]);
 
var line = d3.svg.line()
    .x(function(d, i) { return x(i); })
    .y(function(d, i) { return y(d); });
 
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 
svg.append("defs").append("clipPath")
    .attr("id", "clip")
  .append("rect")
    .attr("width", width)
    .attr("height", height);
 
 
var path = svg.append("g")
    .attr("clip-path", "url(#clip)")
  .append("path")
    .datum(data)
    .attr("class", "line")
    .attr("d", line);
 
tick();
 
function tick() {
 
  // push a new data point onto the back
  data.push(random());
 
  // redraw the line, and slide it to the left
  path
      .attr("d", line)
      .attr("transform", null)
    .transition()
      .duration(500)
      .ease("linear")
      .attr("d", line)
      .each("end", tick);
 
  // pop the old data point off the front
  data.shift();
 
}
   // var x=d3.scale.linear().domain([d3.min(sample_data),d3.max(sample_data)]).range(["#000000","#ffffff"]);

   // svgContainer.selectAll("rect")
   //              .data(sample_data.slice(2,240))
   //              .enter()
   //              .append("rect")
   //              .attr("x", function(d,i) { return 500;})
   //              .attr("y", function(d,i) { return 500;})
   //              .attr("width", function(d,i) { return d * d;})
   //              .attr("height", function(d,i) { return i * i;})
   //              .style("fill", function(d,i) { return x(d);});

   //for (var i=0; i<sample_data.length;i++) {
   //     svgContainer.selectAll("rect")
   //             .data(sample_data)
   //             .transition()
   //             .duration(40000)
   //             .delay(40000*i)
   //             .attr("x", function(d,i) { return i;})
   //             .attr("y", function(d,i) { return i;})
   //             .attr("width", function(d,i) { return i * d;})
   //             .attr("height", function(d,i) { return i * 5;})
   //             .style("fill", function(d,i) { 
   //               return   x(d);
   //             });
   // }

  });



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

  //var sample_data = WAV_DATA.samples;


});
