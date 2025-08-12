
function openmenu() {
  let x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById("message").value;

    let formData = { name, email, phone, message };

    try {
      let response = await fetch("https://script.google.com/macros/s/AKfycbxMx4iTcHRESEYds1Pjd4dXCXWxYBv1bo6u9tqnqiXlbzpjJYEqWmDDfJA5WATH9Yw6/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      alert("Message Sent!");
      location.reload();
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error. Try again.");
    }
  });
});
