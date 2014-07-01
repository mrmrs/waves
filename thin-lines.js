$(document).ready(function(){
  d3.json("augusts-everytime.json", function(error, json) {
    if (error) return console.warn(error);
    var sample_data = json.samples;
    var svgContainer = d3.select("svg#container")

    svgContainer.selectAll("rect")
                 .data(sample_data.slice(2,180))
                 .enter()
                 .append("rect")
                 .attr("x", function(d,i) { return 0;})
                 .attr("y", function(d,i) { return 0;})
                 .attr("width", function(d,i) { return 100;})
                 .attr("height", function(d,i) { return 800;})
                 .style("fill", function(d,i) { return d * d;});

   for (var i=0; i<sample_data.length;i++) {
        svgContainer.selectAll("rect")
                .data(sample_data)
                .transition()
                .delay(5000*i)
                .duration(5000)
                .attr("x", function(d,i) { return d + i;})
                .attr("y", function(d,i) { return 0;})
                .attr("width", function(d,i) { return d;})
                .attr("height", function(d,i) { return 800;})
                .style("fill", function(d,i) { 
                  return   d * i * d;
                });
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
