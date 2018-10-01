var storage = {
    "1" : "79c2e71f476b1425892254db09f69aa40b9ff23d5a713838721e2f70cb2d5809",
    "2" : "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
    "3" : "ERPheTAE5fhKf8hEG8V1W",
    "ERPheTA": "",
    "E5fhKf8": "",
    "hEG8V1W": ""
};
var alphabet="абвгдеёжзиклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ.,?- abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
alphabet+=alphabet;
var messages = {
    "1": {
        "1": "Картинка 1",
        "2": "кR5zn6KEСG",
        "3": {}
    }
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

function setMessage(page, index, str){
    var source = messages[page][index];
    var res="";
    for (var i=0; i<source.length; i++) {
        res += alphabet[alphabet.indexOf(source[i])+alphabet.indexOf(str[i%str.length])];
        //res += String.fromCharCode(source[i].charCodeAt(0)+str[i%str.length]);
    }
    console.log(res);
    return res;
}

function getMessage(page, index, str){
    var source = messages[page][index];
    var res="";
    for (var i=0; i<source.length; i++) {
        res += alphabet[alphabet.lastIndexOf(source[i])-alphabet.indexOf(str[i%str.length])];
        //res += String.fromCharCode(source[i].charCodeAt(0)+str[i%str.length]);
    }
    return res;
}