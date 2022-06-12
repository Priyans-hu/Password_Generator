let ltr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLNOPQRSTUVWXYZ";
let num = "0123456789";
let sym = `~!@#$%^&*()_+-{|}:"'?><;./,`;

// storing all the checkboxes in different variables
var ltr_cBox = document.getElementById("ltr-cBox");
var num_cBox = document.getElementById("num-cBox");
var sym_cBox = document.getElementById("sym-cBox");

// function to check which things to include in password (letters, numbers and symbols)
var all = "";

function include() {
    if (ltr_cBox.checked && num_cBox.checked && sym_cBox.checked) {
        all = ltr + num + sym;
    } else if (ltr_cBox.checked && num_cBox.checked && !sym_cBox.checked) {
        all = ltr + num;
    } else if (ltr_cBox.checked && !num_cBox.checked && sym_cBox.checked) {
        all = ltr + sym;
    } else if (!ltr_cBox.checked && num_cBox.checked && sym_cBox.checked) {
        all = num + sym;
    } else if (ltr_cBox.checked && !num_cBox.checked && !sym_cBox.checked) {
        all = ltr;
    } else if (!ltr_cBox.checked && num_cBox.checked && !sym_cBox.checked) {
        all = num;
    } else if (!ltr_cBox.checked && !num_cBox.checked && sym_cBox.checked) {
        all = sym;
    }
}

include();


// fucntion to generate password and place it in the password box
function genPass() {
    // by default password length is set to 8
    let len = document.getElementById("passLen").value;
    let password = "";
    for (let i = 0; i < len; i++) {
        password += all[Math.floor(Math.random() * all.length)];
    }
    // inserting the password in the password box
    document.getElementById("newPass").innerText = password;
}

// calling the function one time to generate the password when the webpage loads
genPass();

// activating the function when the new password button is clicked
document.getElementById("genNewPass").addEventListener("click", genPass);

// refreshing the password when the password length slider is clicked or the length of password is changed
document.getElementById("passLen").addEventListener("click", genPass);

// refreshing the passwordd when the generate password button is clicked accoding to the checkboxes checked
document.getElementById("generatePassBtn").addEventListener("click", () => {
    include();
    genPass();
})
