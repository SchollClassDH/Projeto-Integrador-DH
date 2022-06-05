function estaAutorizado(request, response, next) {
  if (request.session.autorizado) {
    return next();
  }

  return response.redirect('/');
}

module.exports = estaAutorizado;