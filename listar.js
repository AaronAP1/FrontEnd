var listar = 'http://localhost:9090/api/consultaone/all';

$(document).ready(function () {
    cargaDatosProducts();
   

});


function cargaDatosProducts() {

    $.ajax({
        url: listar,
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            var myItems = respuesta;
            var valor = '';
            for (i = 0; i < myItems.length; i++) {
                valor +=
                    '<tr>' +
                    '<td>' + myItems[i].EmployeeID + '</td>' +
                    '<td>' + myItems[i].Nombre + '</td>' +
                    '<td>' + myItems[i].Cantidad + '</td>' +
                    '</tr > ';


            }
            $('#data').html(valor);
        }

    })
}