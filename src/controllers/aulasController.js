const aulasController = {
    index: (request, response) => {
        const aulas = [
            {
                dia_semana: 'Segunda-Feira',
                
            },
            {
                dia_semana: '',
                
            },
            {
                dia_semana: '',
                
            },
            {
                dia_semana: '',
                
            },
            {
                dia_semana: '',
                
            }
        ]

        response.render('aulas', { title: 'Express', aulas });
    }
}

module.exports = aulasController
