
const filterProductReqBody = (allowed) => {
    return function(req, res, next) {
        Object.keys(req.body).forEach(key => {
          if (!allowed.includes(key)) {
            delete req.body[key];
          }
        });
        next();
      };
}

module.exports = {
    filterProductReqBody
}