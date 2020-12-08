$(document).ready(function(){
    $.getJSON("https://raw.githubusercontent.com/myjefferson/indicamarketing.github.io/master/assets/js/publics.json", function(data){
        var dataCursos = data.Cursos;
        $.each(dataCursos, function(){
            $("div.conteudo").append(`
            <div id="box-post">
                <div class="tlt-dsc">
                    <h2>${this['title']}</h2>
                    <p id="desc">${this['description']}</p>
                </div>
                <iframe src="${this['video']}"></iframe>
                <div class="bt-group">
                    <a href="${this['linkAfl']}" target="_blank">Acessar o site oficial do curso</a>
                </div>
            </div>`);
        });        
    });
});
