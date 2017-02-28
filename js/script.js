var link = document.querySelector(".modal-content-btn");

var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");

var form = popup.querySelector(".feedback");
var name = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=mail]");

var storage = localStorage.getItem("mail");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-out");
    popup.classList.add("modal-content-show");

    if (storage) {
        mail.value = storage;
        name.focus();
    } else {
        name.focus();
    }

});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
    popup.classList.add("modal-out");
});

form.addEventListener("submit", function(event) {
    if (!name.value || !mail.value) {
        event.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("[name=name]", name.value);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
        }
    }
});