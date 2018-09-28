var storage = {
    "1" : "79c2e71f476b1425892254db09f69aa40b9ff23d5a713838721e2f70cb2d5809",
    "2" : "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
    "3" : "ERPheTAE5fhKf8hEG8V1W",
    "ERPheTA": "",
    "E5fhKf8": "",
    "hEG8V1W": ""
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