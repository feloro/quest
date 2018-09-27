var storage = {
    "1" : "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
    "2" : ""
};

function validatePassword() {
    var message = $("#modalPassword").val();
    var index = $("#modalIndex").val();
    if (storage[index]===SHA256(message)) {
        window.location.href = "pages/1.html?key="+message;
    } else {
        $('#exampleModalCenter').modal('hide');
    }
}