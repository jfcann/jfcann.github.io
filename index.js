var svgWidth = 500, svgHeight = 500;
var svg = d3.select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "svg-container")

var circle = svg.append("circle")
    .attr("cx", 250)
    .attr("cy", 250)
    .attr("r", 250)
    .attr("fill", "#0F5B84");

var user = svg.selectAll("text")
    .enter()
    .append("text")
    .text("jfcann")
    .attr("y", 250)
    .attr("x", 250)
    .attr("fill", "#95360A");

/*.attr("font-family", "monaco")*/
