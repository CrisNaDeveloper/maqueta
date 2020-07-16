
var mydate = new Date()
var year = mydate.getYear()
if (year < 1000)
    year += 1900
var day = mydate.getDay()
var month = mydate.getMonth()
var daym = mydate.getDate()
if (daym < 10)
    daym = "0" + daym
var dayarray = new Array("Domingo", "Lunes", "Martes", "Mi&eacute;rcoles", "Jueves", "Viernes", "S&aacute;bado")
var montharray = new Array("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre")


var fecha = "" + dayarray[day] + ", " + daym + " de " + montharray[month] + " de " + year + "";