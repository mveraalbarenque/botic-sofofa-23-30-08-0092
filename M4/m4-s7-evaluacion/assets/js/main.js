let messageSent = false;

document.getElementById("sendButton").addEventListener("click", async () => {
  const message = document.getElementById("message").value;
  const recipient = document.getElementById("recipient").value;

  if (message && recipient) {
    try {
      await sendMessage(message, recipient);
    } catch (error) {
      showAlert("danger", "Ya has enviado un mensaje, No puedes enviar otro.");
    }
  }
});

async function sendMessage(message, recipient) {
  return new Promise((resolve, reject) => {
    if (!messageSent) {
      messageSent = true;
      showAlert("success", "Mensaje enviado!");
      resolve();
    } else {
      reject();
    }
  });
}

function showAlert(type, text) {
  const alertContainer = document.getElementById("alert-container");
  alertContainer.innerHTML = `<div class="alert ${type}">${text}</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.innerHTML = `
        .alert { padding: 10px; margin: 10px; border-radius: 5px; }
        .success { background-color: #d4edda; color: green; }
        .danger { background-color: #f8d7da; color: red; }
    `;
  document.head.appendChild(style);
});
