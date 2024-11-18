function sendmail()
{
    let params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        mobile:document.getElementById("mobile").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    }
    emailjs.send("service_sgmneej","template_41423vq",params).then(alert("Email sent!!"))

}