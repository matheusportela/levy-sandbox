function testing()
{
  graph_div = document.getElementById('plot_div');
  graph_div.data[0].x[1] = 0.5;
  graph_div.data[0].y[1] = 0.5;
  graph_div.data[0].z[1] = 0.5;

  Plotly.redraw(graph_div);
}

$(document).ready(function()
{
  var trace1 =
  {
    x: [0, 1],
    y: [0, 1],
    z: [0, 1],
    type: 'scatter3d'
  };

  var data = [trace1];

  var layout = {
    margin:
    {
      l: 0,
      r: 0,
      b: 0,
      t: 0
    },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    scene:
    {
      aspectmode: "manual",
      aspectratio:
      {
        x: 1, y: 0.7, z: 1,
      },
      xaxis:
      {
        nticks: 5,
        range: [-0.1, 1.1],
      },
      yaxis:
      {
        nticks: 5,
        range: [-0.1, 1.1],
      },
      zaxis:
      {
        nticks: 5,
        range: [-0.1, 1.1],
      }
    },
  };

  Plotly.newPlot('plot_div', data, layout);
});