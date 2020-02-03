var d = new Date();

if(d.getHours()>=8 && d.getHours()<=22){
    document.getElementById("open-closed").outerHTML = "<p style='color:green'>OTVORENO</p>"
} else document.getElementById("open-closed").outerHTML = "<p style='color:red'>ZATVORENO</p>"

