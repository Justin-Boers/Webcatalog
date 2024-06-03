console.log('main loaded');

document.querySelector(".form").addEventListener("submit", function(event) {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const phonenumber = document.getElementById("phonenumber").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;

    if (firstname > "" || lastname > "" || phonenumber > "" || email > "" || feedback > "") {
        alert("Thankyou for filling in the form.\nWe will give you a response within 1 or 2 days!");
    } 
});