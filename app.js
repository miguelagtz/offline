if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('./service-worker.js')
    .then(function(registration){
        console.log('Service worker registrado con éxito: ', registration);
    })
    .catch(function(error){
        console.log('Error al registrar el service Worker',error);
    });
}