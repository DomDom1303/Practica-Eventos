class EventBrite{
    constructor(){
        this.token_auth = '5TGVC3AXQT7VFISYULIE'
        this.ordenar = 'date';
    }

    //Mostrar resultados de la busqueda
    async obtenerEventos(evento, categoria){
    const respuestaEvento = await fetch
    (`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`);

    //Codigo esperar la respuesta del evento y devolverlo com JSON
    const eventos = await respuestaEvento.json();
    return{
        eventos
        }
    }

    //Obtiene las categorias en init()
    async obtenerCategorias(){
        //Consultar las categorias a Event bride
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);
        //esperar las respuestas de las categorias
        const categorias = await respuestaCategorias.json();

        //devovemos el resultado
        return{
            categorias
        }
    }
}