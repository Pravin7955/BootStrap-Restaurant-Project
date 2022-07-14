function enterOtp() {
    prompt("Enter OTP")
}

function orderPlaced() {
    alert("Order Placed")
}

function singUpConfirm() {
    confirm("Do You Want to Sign Up?")
}

let theme = document.getElementById("themeToggle");

theme.addEventListener("change", function change() {
    document.body.classList.toggle("dark-theme");

    let cards = document.getElementsByClassName("dark-mode");
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.toggle("dark-theme");
    }
});
