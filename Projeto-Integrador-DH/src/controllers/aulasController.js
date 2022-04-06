const aulasController = {
    index: (request, response) => {
        const aulas = [
            {
                dia_semana: 'Segunda-Feira',
                
            },
            {
                dia_semana: 'Terça-Feira',
                
            },
            {
                dia_semana: 'Quarta-Feira',
                
            },
            {
                dia_semana: 'Quinta-Feira',
                
            },
            {
                dia_semana: 'Sexta-Feira',
                
            }
        ]

        response.render('aulas', { title: 'Express', aulas });
    }
}

module.exports = aulasController
