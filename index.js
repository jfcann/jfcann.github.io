
function makeUpdate() {
  var ds1 = [[0.62, 0.78, "#5EB700"], [-0.22, 0.97, "#474747"], [-0.90, 0.43, "#262476"], [-0.90, -0.43, "#ff5300"],
             [-0.22, -0.97, "#900C3F"], [0.62, -0.78, "#00A5A7"], [1, 0, "#6a0585"]];

  var ds2 = [[0.90, 0.43 , "#00A5A7"], [0.22, 0.97, "#6a0585"], [-0.62, 0.78 , "#5EB700" ], [-1, 0, "#474747"],
             [-0.62, -0.78, "#262476"], [0.22, -0.97, "#ff5300"], [ 0.90, -0.43, "#900C3F"]];

  var ds3 = [[0.90, 0.43 , "#ff5300"], [0.22, 0.97, "#900C3F"], [-0.62, 0.78 , "#00A5A7"], [-1, 0, "#6a0585"],
             [-0.62, -0.78, "#5EB700"], [0.22, -0.97, "#474747"], [ 0.90, -0.43, "#262476"]];

  var ds4 = [[0.62, 0.78, "#ff5300"], [-0.22, 0.97, "#900C3F"], [-0.90, 0.43, "#00A5A7"], [-0.90, -0.43, "#6a0585"],
             [-0.22, -0.97, "#5EB700"], [0.62, -0.78, "#474747"], [1, 0, "#262476"]];

  var scX = d3.scaleLinear().domain([-1.5, 1.5]).range([50, 250]),
      scY = d3.scaleLinear().domain([-1.5, 1.5]).range([50, 250]);

  var svg = d3.select("#update");


  svg.on("click", function() {
    [ds4, ds1, ds2, ds3] = [ds1, ds2, ds3, ds4];

    var cs = svg.selectAll("circle").data(ds1, d=>d[2]);

    cs.exit().remove();

    cs = cs.enter().append("circle")
      .attr("r", 7).attr("fill", d=>d[2])
      .merge(cs);

    cs.transition().duration(1000)
      .attr("cx", d=>scX(d[0])).attr("cy", d=>scY(d[1])).attr("fill", "black")
      .transition().duration(1000).attr("fill", d=>d[2]);


    //cs.transition().duration(1000)
    //

  } );

  //svg.dispatch("click");
}
