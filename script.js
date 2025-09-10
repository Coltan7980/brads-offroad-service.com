function sendMail(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value 
    };

    emailjs.send("service_hn8qhbr", "template_idwwdv7", params)
    .then(() => {
        alert("Email Sent Successfully!");
    })
    .catch((error) => {
    console.error("❌ EmailJS error:", error); // shows full error in console
    alert("Failed to send email. Check the console for details.");
    });
}
