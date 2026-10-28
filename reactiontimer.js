setInterval(()=>{
  var color='green';
  console.log("Color changed to green");
  setTimeout(()=>{
    var color='red';
    console.log("Color changed to red");
  },Math.floor(Math.random()*5-2+1)+2);
},Math.floor(Math.random()*5-2+1)+2);