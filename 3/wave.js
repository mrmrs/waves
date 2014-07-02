$(document).ready(function(){
  d3.json("data.json", function(error, json) {
    if (error) return console.warn(error);
    var sample_data = json.samples;
    var svgContainer = d3.select("svg#container")
    svgContainer.attr("width", window.innerWidth + 200).attr("fill", "#000");
    var x=d3.scale.linear().domain([d3.min(sample_data),d3.max(sample_data)]).range(["#ff33cc","#000", "red"]);

    svgContainer.selectAll("rect")
                 .data(sample_data.slice(2,240))
                 .enter()
                 .append("rect")
                 .attr("x", 0)
                 .attr("y", 0)
                 .attr("width", 0)
                 .attr("height", 0)
                 .style("fill", function(d,i) { return x(d);});

   for (var i=0; i<sample_data.length;i++) {
        svgContainer.selectAll("rect")
                .data(sample_data)
                .transition()
                .duration(40000)
                .delay(40000*i)
                .attr("x", function(d,i) { return d * i;})
                .attr("y", function(d,i) { return 0;})
                .attr("width", function(d,i) { return d * d;})
                .attr("height", function(d,i) { return window.innerHeight;})
                .attr("stroke-width", function(d,i) { return d;})
                .attr("stroke", function(d,i) { return d * d * d;})
                .style("fill", function(d,i) { 
                  return x(d);
                });
    }

var n = 24,
    random = d3.random.normal(1, 1.2),
    data = d3.range(n).map(random);
 
var margin = {top: 20, right: 20, bottom: 20, left: 40},
    width = window.innerWidth + 200;
    height = window.innerHeight;
 
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
    .attr("width", width)
    .attr("height", height)
    .attr("y", 0)
    .append("g");
 
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
    .transition()
      .duration(2000)
      .attr("d", line)
      .ease("elastic")
      .attr("transform", "translate(" + x(0) + ",0)")
      .style("stroke-width", function(d,i) {return d * i})
      .each("end", tick);
 
  // pop the old data point off the front
  data.shift();
 
}

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
