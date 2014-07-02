$(document).ready(function(){
  d3.json("data.json", function(error, json) {
    if (error) return console.warn(error);
    var sample_data = json.samples;
    var svgContainer = d3.select("svg#container")
    svgContainer.attr("width", window.innerWidth + 200).attr("fill", "#000");
    var x=d3.scale.linear().domain([d3.min(sample_data),d3.max(sample_data)]).range(["orange","white"]);

    svgContainer.selectAll("rect")
                 .data(sample_data.slice(100,120))
                 .enter()
                 .append("rect")
                 .attr("x", 0)
                 .attr("y", 0)
                 .attr("width", window.innerWidth)
                 .attr("height", window.innerHeight)
                 .style("fill", function(d,i) { return x(d);});

   for (var i=0; i<sample_data.length;i++) {
        svgContainer.selectAll("rect")
                .data(sample_data)
                .transition()
                .duration(10000)
                .delay(10000*i)
                .attr("x", function(d,i) { return i * 100;})
                .attr("y", function(d,i) { return 0;})
                .attr("width", function(d,i) { return d * i;})
                .attr("height", function(d,i) { return window.innerHeight;})
                .style("fill", function(d,i) { 
                  return x(d);
                });
    }

var n = 4,
    random = d3.random.normal(1, 1.1),
    data = d3.range(n).map(random);
 
var width = window.innerWidth + 200;
    height = window.innerHeight;
 
var x = d3.scale.linear()
    .domain([0, n - 1])
    .range([0, width]);
 
var y = d3.scale.linear()
    .domain([-1, 1])
    .range([height / 2, 0]);
 
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
      .duration(100000)
      .attr("d", line)
      .ease("ease-in-out")
      .attr("transform", "translate(" + x(-1) + ",0)")
      .each("end", tick);
 
  // pop the old data point off the front
  data.shift();
 
}

  });





});
