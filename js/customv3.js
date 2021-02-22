window.onload = () => {
    // Añado el onclick
    document.getElementById("id_buscar").addEventListener('click', buscarTiempo);
    
};

function buscarTiempo(evt) {

    evt.preventDefault();

    const nombre = document.getElementById("id_nombre").value;
    const ciudad = document.getElementById("id_ciudad").value;
    const pais = document.getElementById("id_pais").value;

    datos(nombre, ciudad, pais);

    if( nombre.length > 0 && pais.length > 0 && ciudad.length > 0 ) {
          
        weatherBalloon(ciudad, pais);
        inserNombre(nombre);
      }
    
    if( nombre.length == 0 && pais.length == 0 && ciudad.length == 0 ) {
          
      Swal.fire({
        title: 'Faltan datos!',
        text: 'Necesita agregar su nombre, pais deseado y la ciudad',
        icon: 'error',
        confirmButtonText: 'Cool'
      })

      }else if(nombre.length == 0 && pais.length == 0){
        Swal.fire({
          title: 'Faltan datos!',
          text: 'Necesita agregar su nombre y pais deseado',
          icon: 'error',
          confirmButtonText: 'Cool'
        })

      }else if(pais.length == 0 && ciudad.length == 0 ){
        Swal.fire({
          title: 'Faltan datos!',
          text: 'Necesita agregar el pais deseado y la ciudad',
          icon: 'error',
          confirmButtonText: 'Cool'
        })

      
      }else if(nombre.length == 0 && ciudad.length == 0 ){
        Swal.fire({
          title: 'Faltan datos!',
          text: 'Necesita agregar su nombre y la ciudad deseada',
          icon: 'error',
          confirmButtonText: 'Cool'
        })

      }else if(nombre.length == 0){
        Swal.fire({
          title: 'Faltan datos!',
          text: 'Necesita agregar su nombre',
          icon: 'error',
          confirmButtonText: 'Cool'
        })

      }else if(ciudad.length == 0){
        Swal.fire({
          title: 'Faltan datos!',
          text: 'Necesita agregar la ciudad deseada',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
        
      }else if(pais.length == 0 ){

        Swal.fire({
          title: 'Faltan datos!',
          text: 'Necesita agregar el pais deseado',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
    
}







function weatherBalloon(cityID, paisID) {
    const key = '1f5d9cc7c3a4f822de26f12fe09cfc22';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityID},${paisID}&appid=${key}&lang=es`)
        .then(function (resp) { return resp.json() }) // Convertir en Json
        .then(function (data) {
            verTiempo(data);
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
            // capturar errores
        });
}

function verTiempo(data) {

    var celcius = Math.round(parseFloat(data.main.temp) - 273.15);
    var celciusmax = Math.round(parseFloat(data.main.temp_max) - 273.15);
    var celciusmin = Math.round(parseFloat(data.main.temp_min) - 273.15);

    document.getElementById('description').innerHTML = data.weather[0].description;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('max').innerHTML = '<h5> <img src="img/tem_max.svg "style="width: 20px"> ' +celciusmax + '&deg; </h5>';
    document.getElementById('min').innerHTML = '<h5> <img src="img/tem_min.svg "style="width: 20px"> ' +celciusmin + '&deg; </h5>';
    document.getElementById('location').innerHTML = data.name;
    const iconID = data.weather[0].icon;
    document.getElementById('icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${iconID}@2x.png">`;
}


function inserNombre(nombreID) {
    document.getElementById('nombreP').innerHTML = "Bienvenido "+nombreID;
}


function datos(nombreID, cityID, paisID){
    if( nombreID == null || nombreID.length == 0 || /^\s+$/.test(nombreID) ) {
        console.log("Error de nombre");
        document.getElementById('id_nombre').style.border = "1px solid #f00";
        document.getElementById('id_nombre_false').style.display = "block";
        document.getElementById('id_nombre_true').style.display = "none";
      } else {
        document.getElementById('id_nombre').style.border = "1px solid #198754";
        document.getElementById('id_nombre_true').style.display = "block";
        document.getElementById('id_nombre_false').style.display = "none";
      };
    if( cityID == null || cityID.length == 0 || /^\s+$/.test(cityID) ) {
        console.log("Error de nombre");
        document.getElementById('id_ciudad').style.border = "1px solid #f00";
        document.getElementById('id_ciudad_false').style.display = "block";
        document.getElementById('id_ciudad_true').style.display = "none";
      }else{
        document.getElementById('id_ciudad').style.border = "1px solid #198754";
        document.getElementById('id_ciudad_true').style.display = "block";
        document.getElementById('id_ciudad_false').style.display = "none";
      };
    if( paisID == null || paisID.length == 0 || /^\s+$/.test(paisID) ) {
        console.log("Error de nombre");
        document.getElementById('id_pais').style.border = "1px solid #f00";
        document.getElementById('id_pais_false').style.display = "block";
        document.getElementById('id_pais_true').style.display = "none";
      }else{
        document.getElementById('id_pais').style.border = "1px solid #198754";
        document.getElementById('id_pais_true').style.display = "block";
        document.getElementById('id_pais_false').style.display = "none";
      };

}
