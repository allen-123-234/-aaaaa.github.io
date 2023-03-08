function submitForm() {
    const form = document.getElementById('myForm');
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;
  
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://notify-api.line.me/api/notify');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Bearer ' + '<YOUR_ACCESS_TOKEN>');
  
    const data = 'message=' + encodeURIComponent('姓名: ' + name + '\n' + '電子郵件: ' + email + '\n' + '訊息: ' + message);
    xhr.send(data);
  }
  