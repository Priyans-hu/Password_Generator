    // script to update the length of password everytime the length slider is clicked

    document.getElementById("dispPassLen").innerText = document.getElementById("passLen").value;
    document.getElementById("passLen").addEventListener("click", () => {
        document.getElementById("dispPassLen").innerText = document.getElementById("passLen").value;
    })

    // script to copy the password on button click 

    var copyBtn = document.getElementById("copyBtn");
    var newPass = document.getElementById("newPass");

    // function to copy password
    function copy() {
        newPass = newPass.innerText;
        navigator.clipboard.writeText(newPass);
        alert("Copied");
    }

    // calling function in button click
    copyBtn.addEventListener("click", copy);