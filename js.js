const chatform = document.getElementById("chatform");
const chatlog = document.getElementById("chatlog");
const chatinput = document.getElementById("chatinput");

chatform.onsubmit = function(event) {
  event.preventDefault();
  
  const chat = document.createElement("div");
  chat.classList.add("chat");
  
  const username = document.createElement("p");
  username.classList.add("username");
  username.textContent = "You:";
  
  const message = document.createElement("p");
  message.classList.add("message");
  message.textContent = chatinput.value;
  
  chat.appendChild(username);
  chat.appendChild(message);
  chatlog.appendChild(chat);
  
  chatinput.value = "";
  chatlog.scrollTop = chatlog.scrollHeight;
};
