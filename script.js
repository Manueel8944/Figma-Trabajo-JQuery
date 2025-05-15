$(document).ready(function () {

    const testimonios = [
            "Me ayudaron a resolver mi situación legal muy rápido. ¡Increíble servicio!",
            "No sabía por dónde empezar, pero me guiaron en todo momento.",
            "Profesionales, atentos y muy claros en su explicación. ¡Recomendados!",
            "Gracias a ellos, entendí mis derechos laborales y conseguí una solución.",
            "Un equipo muy humano y comprometido con sus clientes.",
            "Atención excelente y resultados incluso mejores de lo esperado.",
            "Fueron muy claros desde el principio y resolvieron mi caso con eficacia.",
            "¡Gracias! Me sentí apoyado en todo momento y todo salió bien."
        ];

    function generarUsers () {
    $(".tcontent div").remove();
    
    $.getJSON("https://randomuser.me/api/?results=4", function (data) {
    $.each(data.results, function (index, user) {

        let testimonio = testimonios[Math.floor(Math.random() * testimonios.length)];

        const testimonioCarta = `
            <div class="persona">
                <div>
                    <img class="foto" src="${user.picture.large}"></img>
                </div>
                <p>"${testimonio}"</p>
                <p><b>${user.name.first} ${user.name.last}</b></p>
            </div>
        `
        
        $(".tcontent").append(testimonioCarta)
    })

    }).fail(function (error) {
    const errorCard = `
            <div class="persona">
                <h2> Error al cargar los datos</h2>
            </div>
        `
        
        $(".tcontent").append(errorCard)

    })
    }

    generarUsers()

    $("#boton").on("click", function () {
        generarUsers(); 
    });

    $('.logo').on('click', function() {
        $('.menu ul').slideToggle();
    });

    $('#sabermas').on('click', function() {
        $(".textsbn").toggleClass("textsb")

        if ($(".textsbn").hasClass("textsb")) {
        $(this).text("Saber menos")
        } else {
        $(this).text("Saber mas")
        }
    });
})