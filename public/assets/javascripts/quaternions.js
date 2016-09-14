var x1, y1, z1;         // original vector
var x2, y2, z2;         // rotated vector
var alpha, beta, gamma; // euler angles
var w, x, y, z;         // quaternions
function getValues()
{
  graph_div   = document.getElementById('plot_div');
  x1          = document.getElementById('original_x1');
  y1          = document.getElementById('original_y1');
  z1          = document.getElementById('original_z1');
  x2          = document.getElementById('rotated_x1');
  y2          = document.getElementById('rotated_y1');
  z2          = document.getElementById('rotated_z1');
  alpha       = document.getElementById('euler_alpha');
  beta        = document.getElementById('euler_beta');
  gamma       = document.getElementById('euler_gamma');
  w           = document.getElementById('quat_w');
  x           = document.getElementById('quat_x');
  y           = document.getElementById('quat_y');
  z           = document.getElementById('quat_z');
}

function originVectorUpdate()
{
  graph_div   = document.getElementById('plot_div');
  x1          = document.getElementById('original_x1').value;
  y1          = document.getElementById('original_y1').value;
  z1          = document.getElementById('original_z1').value;

  console.log(
    x1,
    y1,
    z1);

  graph_div.data[0].x[1] = x1;
  graph_div.data[0].y[1] = y1;
  graph_div.data[0].z[1] = z1;

  Plotly.redraw(graph_div);
}

function eulerAngleUpdate()
{
  getValues();

  // Convert from degrees to radian
  alpha_value = alpha.value*1.0/180*Math.PI;
  beta_value  = beta.value*1.0/180*Math.PI;
  gamma_value = gamma.value*1.0/180*Math.PI;

  // Apply euler angles
  var euler = new THREE.Euler(alpha_value, beta_value, gamma_value, 'XYZ');
  var vector = new THREE.Vector3(x1.value, y1.value, z1.value);
  vector.applyEuler(euler);
  console.log(euler)

  // Update graph
  graph_div.data[1].x[1] = vector.x;
  graph_div.data[1].y[1] = vector.y;
  graph_div.data[1].z[1] = vector.z;

  // Update text entries
  x2.value = parseFloat(vector.x).toFixed(4);
  y2.value = parseFloat(vector.y).toFixed(4);
  z2.value = parseFloat(vector.z).toFixed(4);

  var new_quaternion = new THREE.Quaternion().setFromEuler(euler, 'XYZ');
  w.value = parseFloat(new_quaternion._w).toFixed(4);
  x.value = parseFloat(new_quaternion._x).toFixed(4);
  y.value = parseFloat(new_quaternion._y).toFixed(4);
  z.value = parseFloat(new_quaternion._z).toFixed(4);

  Plotly.redraw(graph_div);
}

function quaternionUpdate()
{
  getValues();

  // Apply quaternions
  var quaternion = new THREE.Quaternion(x.value, y.value, z.value, w.value);
  var vector = new THREE.Vector3(x1.value, y1.value, z1.value);
  vector.applyQuaternion(quaternion);

  // Update graph
  graph_div.data[1].x[1] = vector.x;
  graph_div.data[1].y[1] = vector.y;
  graph_div.data[1].z[1] = vector.z;

  // Update text entries
  x2.value = parseFloat(vector.x).toFixed(4);
  y2.value = parseFloat(vector.y).toFixed(4);
  z2.value = parseFloat(vector.z).toFixed(4);

  var new_euler = new THREE.Euler().setFromQuaternion(quaternion.normalize(), 'XYZ')
  console.log(new_euler)
  alpha.value = parseFloat(new_euler._x*1.0/Math.PI*180).toFixed(4);
  beta.value  = parseFloat(new_euler._y*1.0/Math.PI*180).toFixed(4);
  gamma.value = parseFloat(new_euler._z*1.0/Math.PI*180).toFixed(4);

  Plotly.redraw(graph_div);
}

function rotatedVectorUpdate()
{
  graph_div  = document.getElementById('plot_div');
  rotated_x0 = document.getElementById('rotated_x0').value;
  rotated_y0 = document.getElementById('rotated_y0').value;
  rotated_z0 = document.getElementById('rotated_z0').value;
  rotated_x1 = document.getElementById('rotated_x1').value;
  rotated_y1 = document.getElementById('rotated_y1').value;
  rotated_z1 = document.getElementById('rotated_z1').value;

  console.log(
    rotated_x0,
    rotated_y0,
    rotated_z0);
  console.log(
    rotated_x1,
    rotated_y1,
    rotated_z1);

  graph_div.data[1].x[0] = rotated_x0;
  graph_div.data[1].y[0] = rotated_y0;
  graph_div.data[1].z[0] = rotated_z0;
  graph_div.data[1].x[1] = rotated_x1;
  graph_div.data[1].y[1] = rotated_y1;
  graph_div.data[1].z[1] = rotated_z1;
  
  // update everything else

  Plotly.redraw(graph_div);
}

$(document).ready(function()
{
  var trace1 =
  {
    x: [0, 0],
    y: [0, 1],
    z: [0, 0],
    type: 'scatter3d'
  };

  var trace2 = 
  {
    x: [0, 0],
    y: [0, 1],
    z: [0, 0],
    type: 'scatter3d'
  }

  var data = [trace1, trace2];

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
    showGrid: false,
    cameraPosition:
    {
      horizontal: .4,
      vertical: .4,
      distance: 1,
    },
    scene:
    {
      aspectmode: "manual",
      aspectratio:
      {
        x: 1, y: 0.7, z: 1
      },
      xaxis:
      {
        nticks: 5,
        range: [-3.1, 3.1]
      },
      yaxis:
      {
        nticks: 5,
        range: [-3.1, 3.1]
      },
      zaxis:
      {
        nticks: 5,
        range: [-3.1, 3.1]
      }
    },
  };

  Plotly.newPlot('plot_div', data, layout);
});