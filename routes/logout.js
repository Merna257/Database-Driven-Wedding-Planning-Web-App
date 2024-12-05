module.exports = (req, res, next) => {
    res.clearCookie('access_token');
    res.redirect('/store');
  };