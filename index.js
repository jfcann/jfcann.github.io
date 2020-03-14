
function makeUpdate() {
  var dsc = ["#21e000", "#00dce0", "#1800e0", "#e0da00",
             "#e0000c", "#e000e0", "#ff5300"];

  var ds1 = [[0.62, 0.78, "1"], [-0.22, 0.97, "2"], [-0.90, 0.43, "3"], [-0.90, -0.43, "4"],
             [-0.22, -0.97, "5"], [0.62, -0.78, "6"], [1, 0, "0"]];

  var ds2 = [[0.62, 0.78, "2"], [-0.22, 0.97, "3"], [-0.90, 0.43, "4"], [-0.90, -0.43, "5"],
             [-0.22, -0.97, "6"], [0.62, -0.78, "0"], [1, 0, "1"]];

  var ds3 = [[0.62, 0.78, "2"], [-0.22, 0.97, "4"], [-0.90, 0.43, "6"], [-0.90, -0.43, "1"],
             [-0.22, -0.97, "3"], [0.62, -0.78, "5"], [1, 0, "0"]];

  var ds4 = [[0.62, 0.78, "3"], [-0.22, 0.97, "5"], [-0.90, 0.43, "0"], [-0.90, -0.43, "2"],
             [-0.22, -0.97, "4"], [0.62, -0.78, "6"], [1, 0, "1"]];

  var end = [[0,0, "3"], [0,0, "5"], [0,0, "0"], [0,0, "2"],
             [0, 0, "4"], [0, 0, "6"], [0, 0, "1"]];

  var scX = d3.scaleLinear().domain([-1.5, 1.5]).range([50, 250]),
      scY = d3.scaleLinear().domain([-1.5, 1.5]).range([50, 250]);

  var svg = d3.select("#update");


  svg.on("click", function() {
    [ds1, ds2, ds3, ds4] = [ds2, ds3, ds4, ds1];

    var cs = svg.selectAll("circle").data(ds1, d=>d[2]);

    cs.exit().remove();

    cs = cs.enter().append("circle")
      .attr("cx", d=>scX(0)).attr("cy", d=>scY(0))
      .attr("r", 7).attr("fill", "black")
      .merge(cs);

    cs.transition().duration(1000)
      .attr("cx", d=>scX(d[0])).attr("cy", d=>scY(d[1])).attr("fill", d=>dsc[d[2]])
      .transition().duration(3000)
      .attr("fill", "black");

    //cs.transition().duration(10000)
    //  .attr("cx", d=>scX(end[0])).attr("cy", d=>scY(end[1]));

    //cs.transition().duration(1000)
    //

  } );

  //svg.dispatch("click");
}
