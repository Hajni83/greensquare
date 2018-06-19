$(function() {
    var canvas=document.getElementById('MyCanvas');
    var context=canvas.getContext('2d');
    context.fillStyle='green';
    var canvasWidth=canvas.width;
    var canvasHeight=canvas.height;
    var squareWidth=80;
    var squareHeight=80;
    var push=10;
    context.fillRect(canvasWidth-squareWidth-push,canvasHeight-squareHeight-push, squareWidth, squareHeight);
  });

