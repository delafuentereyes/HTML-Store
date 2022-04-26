$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus');
});

$(document).ready(function () {
    $('#contactar').click(function () {
        re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;  
        var porId = document.getElementById("email").value;
        if ($('#nombre').val() === "") {
            document.getElementById("nombre").focus();
            alert("Debes ingresar tu nombre");
            return false;
        } else if ($('#mail').val() === "") {
            document.getElementById("mail").focus();
            alert("Debes ingresar un E-Mail");
            return false;
        } else if (!re.exec(porId)) {
            document.getElementById("mail").focus();
            alert("E-Mail inválido");
            return false;
        } else if ($('#campo').val() === "") {
            document.getElementById("campo").focus();
            alert("Debes ingresar un mensaje");
            return false;
        }
    });
});