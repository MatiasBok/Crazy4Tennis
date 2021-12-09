
class Jugador{ /*por convención las clases van siempre en mayúscula*/
    constructor (nombre, apellido, DNI, email, nombreDeUsuario, sexo, fechaDeNacimiento, mobil, ciudad, provincia, codigoPostal, password, repeatPassword ){
        this.nombre=nombre;
        this.apellido=apellido;
        this.DNI=DNI;
        this.email=email;
        this.nombreDeUsuario=nombreDeUsuario;
        this.sexo=sexo;
        this.fechaDeNacimiento=fechaDeNacimiento;
        this.mobil=mobil;
        this.ciudad=ciudad;
        this.provincia=provincia;
        this.codigoPostal=codigoPostal;
        this.password=password;
        this.repeatPassword=repeatPassword;        
    } 

    devolverDatos() {
        return (`${this.nombre} - ${this.apellido} - ${this.DNI} - ${this.email} - ${this.nombreDeUsuario} - ${this.sexo} - ${this.fechaDeNacimiento} - ${this.mobil} - ${this.ciudad} - ${this.provincia} - ${this.codigoPostal} - ${this.password} - ${this.repeatPassword}`)}
    } 

    let jugadores = []

    let formulario = document.getElementById('formulario')

    formulario.addEventListener('submit', (e) => {
        e.preventDefault()

    let datForm = new FormData(e.target) 
    /*console.log (datForm.get ("nombre")) /*Forma prolija de acceder a un formulario*/
    /*let nombre = document.getElementById ('nombre').value Otra forma de acceder a los datos*/ 
    let usuario = new Jugador (datForm.get ("nombre"), datForm.get ("apellido"), datForm.get ("DNI"), datForm.get ("email"), datForm.get ("nombreDeUsuario"), datForm.get ("sexo"), datForm.get ("fechaDeNacimiento"), datForm.get ("mobil"), datForm.get ("ciudad"), datForm.get ("provincia"), datForm.get ("codigoPostal"), datForm.get ("password"), datForm.get ("repeatPassword"),
    
    jugadores.push(usuario),

    localStorage.setItem ('jugadores', JSON.stringify(jugadores)))

    formulario.reset ()

    })

    let validateNombre = /^[a-zA-Z0-9]$/;
    let validateApellido= /^[a-zA-Z0-9@#$%&]$/;
    let validateDocumento = /^[A-Z0-9] {8,10}$/;
    let validateUsername = /^[a-z0-9_-] {5,10}$/;
    let validateEmail = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    let validateMobil = /^[0-9]{10}$/;   
    let validateCodigoPostal= /^[0-9]{4}$/
    let validatePassword = /^.*(?=.{8,}) (?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
    let validateRepeatPassword = /^.*(?=.{8,}) (?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;

    $(() => {

      $("#crearUsuario").submit((e) => {
        e.preventDefault()
        let datosFormulario = new FormData (e.target)

        $('.errorMsg').hide();

        if(!validateNombre.test(datosFormulario.get("nombre"))) {
          $('#errorNombre').show()
        } else {
            if(!validateApellido.test(datosFormulario.get("apellido"))) {
              $('#errorApellido').show()
          } else {
              if(!validateDocumento.test(datosFormulario.get("numeroDeDocumento"))) {
                $('#errorDocumento').show()
             } else {
                 if(!validateEmail.test(datosFormulario.get("email"))) {
                    $('#errorEmail').show()
                } else {
                    if(!validateUser.test(datosFormulario.get("nombreDeUsuario"))) {
                      $('#errorUsername').show()
                  } else {
                      if(!validateMobil.test(datosFormulario.get("mobil"))) {
                        $('#errorMobil').show()
                    } else {
                        if(!validateCodigoPostal.test(datosFormulario.get("CodigoPostal"))) {
                         $('#errorCodigoPostal').show()
                      } else {
                           if(!validatePassword.test(datosFormulario.get("password"))) {
                            $('#errorPassword').show()
                        } else {
                            alert(`${datosFormulario.get("username")} creado`)
                               $("#formulario").trigger("reset")
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
  )})

  var attempt = 3; // Variable to count number of attempts.

// Below function Executes on click of login button.
    function validate(){
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      if ( username == "username" && password == "password"){
      alert ("Ingreso éxitoso");
      
      window.location = "success.html"; // Redirecting to other page.
      return false;
      } else{
          attempt --;// Decrementing by one.
          alert("A usted le quedan "+attempt+" intentos;");
          // Disabling fields after 3 attempts.
      if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
}
}
}


/*Para que un usuario agregue un jugador*/
/*
function agregarJugador() {
    let nombreNuevo = prompt("Ingrese el nombre del / de la jugador/a");
    let apellidoNuevo = prompt ("Ingrese el apellido del / de la jugador/a");
    let sexoNuevo = prompt ("Ingrese el sexo del / de la jugador/a");
    let fechaDeNacimientoNuevo = prompt("Ingrese la fecha de nacimiento del / de la jugador/a (dd-mm-aaaa)");
    let edadNuevo = parseInt (prompt("Ingrese la edad del / de la jugador/a"));
    let DNINuevo = parseInt (prompt("Ingrese el DNI del / de la jugador/a"));
    let manoHabilNuevo = prompt("Ingrese la mano hábil del / de la jugador/a")

    const jugador = new Jugador (nombreNuevo, apellidoNuevo, sexoNuevo, fechaDeNacimientoNuevo, edadNuevo, DNINuevo, manoHabilNuevo)
    console.log(jugador)
    jugadores.push
}
   */
  
/*
agregarJugador() /*Necesario para que aparezca el "popup" y el usuario pueda completar*/
/*
function Pregunta() {
    let consulta = prompt ("Quiere agregar un/a jugador/a más?")
    if (consulta.toLowerCase() == "si"){
        agregarJugador() 
        Pregunta()
    }
    else{
        alert ("Muchas Gracias")
    } 
}

Pregunta()
console.log (jugadores)

/*Para ordenar a los jugadores según un parámetro*/
/*
jugadores.sort (function (a,b) {
    return a.edad - b.edad
});

console.log(jugadores)*/

