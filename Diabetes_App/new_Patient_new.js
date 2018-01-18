let naMe = "document.getElementById(name)";
let surName = "document.getElementById(surname)";
var zeitFaktor = new Map();

let textbefaktoren = "<Td><div class='form-group'><div class='col-md-2'><input type = 'number' value='' class = 'clsFaktor' id = '";
let thead = "<Thead><Tr><div class='row'><Th> Uhrzeit</th><Th class='text-center'>Faktor</th></tr></Thead>";

function colMdX(param) {
    // funktion um abschnitte mit variabler Colum Anzahl zu erstellen
    document.write("<div class='col-md-" + param + "'>");
}

(function createform() {

    document.write("<div class = 'container'>");
    document.write("<form>")

    document.write("<div class='row'>");

    // Vormittag, 7 bis 11 Uhr
    colMdX(3);
    document.write("<Table class='table table-Condensed' id='daten'>");
    document.write(thead);
    document.write("<Tbody>");

    for (ix = 7; ix < 12; ix++) {
        let labelbefaktoren = "<Td><div class='form-group'><div class='col-md-1'><label for= '" + ix + "' class = 'clsLabelStunde'>" + ix + "-" + (ix + 1) + "</label></div></div></Td>";
        zeitFaktor.set(ix + '-' + (ix + 1), ix);
        document.write("<Tr>");
        document.write("<div class='row'>");
        document.write(labelbefaktoren + "" + textbefaktoren + ix + "' /></div></Td>");
        document.write("</div>");
        document.write("</tr>");
    };
    document.write("</Tbody></Table>");
    document.write("</div>");

    // Nachmittag
    colMdX(3);
    document.write("<Table class='table table-Condensed' id='daten'>");
    document.write(thead);
    document.write("<Tbody>");

    for (ix = 12; ix < 16; ix++) {
        let labelbefaktoren = "<Td><div class='form-group'><div class='col-md-1'><label for= '" + ix + "' class = 'clsLabelStunde'>" + ix + "-" + (ix + 1) + "</label></div></div></Td>";
        zeitFaktor.set(ix + '-' + (ix + 1), ix);
        document.write("<Tr>");
        document.write("<div class='row'>");
        document.write(labelbefaktoren + "" + textbefaktoren + ix + "' /></div></Td>");
        document.write("</div>");
        document.write("</tr>");
    };
    document.write("</Tbody></Table>");
    document.write("</div>");

    // abend
    colMdX(3);
    document.write("<Table class='table table-Condensed' id='daten'>");
    document.write(thead);
    document.write("<Tbody>");

    for (ix = 16; ix < 21; ix++) {
        let labelbefaktoren = "<Td><div class='form-group'><div class='col-md-1'><label for= '" + ix + "' class = 'clsLabelStunde'>" + ix + "-" + (ix + 1) + "</label></div></div></Td>";
        zeitFaktor.set(ix + '-' + (ix + 1), ix);
        document.write("<Tr>");
        document.write("<div class='row'>");
        document.write(labelbefaktoren + "" + textbefaktoren + ix + "' /></div></Td>");
        document.write("</div>");
        document.write("</tr>");
    };
    document.write("</Tbody></Table>");
    document.write("</div>");

    //nacht teil1
    colMdX(3);
    document.write("<Table class='table table-Condensed' id='daten'>");
    document.write(thead);
    document.write("<Tbody>");

    for (ix = 21; ix < 24; ix++) {
        if (ix < 23) {
            let labelbefaktoren = "<Td><div class='form-group'><div class='col-md-1'><label for= '" + ix + "' class = 'clsLabelStunde'>" + ix + "-" + (ix + 1) + "</label></div></div></Td>";
            zeitFaktor.set((ix + '-' + (ix + 1)).toString(), ix);
            document.write("<Tr>");
            document.write("<div class='row'>");
            document.write(labelbefaktoren + "" + textbefaktoren + ix + "' /></div></Td>");
            document.write("</div>");
            document.write("</tr>");

        }
        else if (ix == 23) {
            let labelbefaktoren = "<Td><div class='form-group'><div class='col-md-1'><label for= '" + ix + "' class = 'clsLabelStunde'>" + ix + "-0</label></div></div></Td>";
            zeitFaktor.set(ix + '-' + (ix + 1), ix);
            document.write("<Tr>");
            document.write("<div class='row'>");
            document.write(labelbefaktoren + "" + textbefaktoren + ix + "' /></div></Td>");
            document.write("</div>");
            document.write("</tr>");
        };
    };
    //nacht teil2
    for (ix = 0; ix < 7; ix++) {
        let labelbefaktoren = "<Td><div class='form-group'><div class='col-md-1'><label for= '" + ix + "' class = 'clsLabelStunde'>" + ix + "-" + (ix + 1) + "</label></div></div></Td>";
        zeitFaktor.set(ix + '-' + (ix + 1), ix);
        document.write("<Tr>");
        document.write("<div class='row'>");
        document.write(labelbefaktoren + "" + textbefaktoren + ix + "' /></div></Td>");
        document.write("</div>");
        document.write("</tr>");
    };
    document.write("</Tbody></Table>");
    document.write("</div>");
    document.write("</form>");

    document.write("</div>");// Reihe der tabellen end tag
    document.write("</div>");// Container End Tag
    console.log(zeitFaktor);
})();


function Patient(surname, lastname, patnum) {

    this.surname = surname;
    this.lastname = lastname;

};

function faktoren() {
        let formular = document.forms[0];
       
        let speichern = new Array(24);
        for (i=0;i<24;i++) speichern[i]=i;

        function getNum(num){
            if (num < 0) num = 23;
            if (formular.elements[num].value !="") {
               return num;
            } else {
                return getNum(num-=1);
            }
        }

        var patientenFaktoren = speichern.map( num => {
            if(formular.elements[num].value != "") {
                return formular.elements[num].value;
            } else {  
              return formular.elements[getNum(num)].value;
        }

        

        });
            


const newPatListe = patientenFaktoren;
for (let keys of zeitFaktor.keys){
    console.log(keys);

            }
console.log(keys);
console.log(newPatListe);
        //if (valueArray[ix].value == "") {valueArray[ix].value = valueArray[ix-1].value};

    };

function createnew() {
    let p1 = new Patient(naMe, surName);
    return p1;
};

//let p1 = new Patient(naMe, surName);

//p1.addfaktoren();
