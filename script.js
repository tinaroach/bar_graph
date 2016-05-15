// generate the graph's bars using this data array

data = [
  'green', 100,
  'yellow', 50,
  'orange', 10,
  'purple', 75,
  'brown', 52,
  'lime', 16,
  'coral', 71,
  'cyan', 85,
  'linen', 22,
  'maroon', 55,
  'navy', 91,
  'olive', 41,
  'peru', 34,
  'pink', 43,
  'silver', 11,
  'tan', 60,
  'salmon', 87,
  'wheat', 12
]

for  (var i = 1; i < 18; i ++) {
    var bar = document.createElement('div');
    bar.setAttribute('class', 'bar');
    document.getElementById('frame').appendChild(bar);
    bar.style = data[i];
    bar.style.left = ( i*40 + "px");
    