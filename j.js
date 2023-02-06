let canvas = document.getElementById('game');
let context = canvas.getContext('2d');

// 绘制背景
context.fillStyle = '#eee';
context.fillRect(0, 0, canvas.width, canvas.height);

// 绘制圆形
context.fillStyle = '#f00';
context.beginPath();
context.arc(100, 100, 50, 0, 2 * Math.PI);
context.fill();
canvas.addEventListener('touchstart', (event) => {
    // 处理触摸事件
  });
  