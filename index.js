d3.select('h1').style('color', '#95360A');

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
