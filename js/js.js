// JavaScript Document


$(function () {

    $(".campoFechaLanza").datetimepicker({
        locale: 'es',
        format: 'DD/MM/YYYY'
    });
    $(".campoFechaLanzaDos").datetimepicker({
        locale: 'es',
        format: 'DD/MM/YYYY'
    });
    $(".campoFechaLanzaTresHora").datetimepicker({
        locale: 'es',
        format: 'HH:mm'
    });
});


function resizeText(multiplier) {
    var p = 100;
    if (multiplier != 0) {
        p = document.body.style.fontSize;
        if (p == '' || p == undefined) {
            p = 100;
        }
    }
    var offset = (parseFloat(p) + multiplier) + "%";
    document.body.style.fontSize = offset;
}


////function zoomText(Accion, Elemento) {
//    //inicializacion de variables y parámetros
//    var obj = document.getElementById(Elemento);
//    var max = 200 //tamaño máximo del fontSize
//    var min = 70 //tamaño mínimo del fontSize
//    if (obj.style.fontSize == "") {
//        obj.style.fontSize = "100%";
//    }
//    actual = parseInt(obj.style.fontSize); //valor actual del tamaño del texto
//    incremento = 10; // el valor del incremento o decremento en el tamaño

//    //accion sobre el texto
//    if (Accion == "reestablecer") {
//        obj.style.fontSize = "100%"
//    }
//    if (Accion == "aumentar" && ((actual + incremento) <= max)) {
//        valor = actual + incremento;
//        obj.style.fontSize = valor + "%"
//    }
//    if (Accion == "disminuir" && ((actual + incremento) >= min)) {
//        valor = actual - incremento;
//        obj.style.fontSize = valor + "%"
//    }
//}

function adjustMenuLayers() {
    /*menu lateral*/
    if ($('.menulat').length > 0) {
        $('.menulat ul li[class!=on] a').addClass("bgnone");
        $('.menulat ul li').ahover({ toggleEffect: 'height' });
    }

    /*menu principal*/
    if ($('.nivel2').length > 0) {
        //$('.nivel2').css({'position' : 'absolute', 'visibility' : 'hidden', 'top' : '31px', 'left' : '0px'});
        $("ul.nivel2 a").blur(function(event) {
            if ($(this).parent("li").is(":last-child")) {
                $(this).parent("li").parent("ul.nivel2").css("visibility", "hidden").fadeOut(1000);
            }
        });
    }

    if ($('.nivel1').length > 0) {
        $(" #menuppal ul li").hover(function() {
            $(this).find('ul:first').css({ visibility: "visible", display: "none" }).show(400);
        }, function() {
            $(this).find('ul:first').css({ visibility: "hidden" });
        });
        $('.nivel1').focus(function(event) {
            /*if ($(this).next('ul').find("li").find('a:first')) {*/

            //$(this).next('ul').find('a:first').css({visibility: "visible",display: "none"}).show(400);
            /*$(this).next('ul:first').css({visibility: "visible",display: "none"}).show(400);*/
            /*}*/
            $(this).next('ul:first').css({ visibility: "visible", display: "none" }).show(400);
        });
    }
} // function adjustMenuLayers

$(document).ready(function() {

    /*Deplegar capa resultados*/
    if ($('#resultados').length > 0) {
        $('#calcular').click(function() {
            $("#resultados").fadeIn("slow");
            $('#resultados').css("visibility", "visible");
            return false;
        });
    }

    adjustMenuLayers();
    //if (!$.browser.msie || ($.browser.msie && $.browser.version >= 7)) {
    //    // no need to fix png
    //}
    //else {
    //    jQuery(function($) {
    //        $("img").pngfix();
    //    });
    //}
});

function Numeros(obj, e) {
    var code = (document.all) ? e.keyCode : e.which;

    switch (code) {
        case 8:     // backspace
        case 9:     // tab  
        case 13:    // enter
        case 16:    // shift
        case 17:    // ctrl
        case 18:    // alt
        case 27:    // escape
        case 35:    // fin 
        case 36:    // inicio
        case 37:    // left arrow
        case 39:    // right arrow
        case 46:    // delete
            e.returnValue = true;
            return;
    }
    // allow character of between 0 and 9
    if ((code >= 48 && code <= 57) || (code >= 96 && code <= 105)) {
        e.returnValue = true;
        return;
    }
    e.returnValue = false;
}

function ValidaNumero(obj, e) {
    var valor = obj.value;
    if (isNaN(valor) || valor == '') {
        obj.value = "";
        e.returnValue = false;
    }
    else {
        if (valor.length > obj.size) {
            obj.value = obj.substring(0, obj.size);
        }
        else if (valor.length < obj.size) {
            if (obj.size != 4) {
                while (valor.length < obj.size) {
                    valor = "0" + valor;
                }
            }
            else {
                valor = "1900".substr(0, obj.size - valor.length) + valor;
            }
            obj.value = valor;
        }
    }
    e.returnValue = true;
    return;
}