/* GET 'Login' page */
module.exports.login = function(req, res){
  res.render('login', { title: 'Welcome to Gizmoflix' });
};

/* GET 'home' page */
module.exports.homelist = function(req, res){
  renderHomepage(req, res);
};

/* GET 'Movies' page */
module.exports.watchlist = function(req, res){
  res.render('index', { title: 'Watchlist' });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res){
  res.render('index2', { title: 'Add a review' });
};

/* GET 'Angular' page */
module.exports.angular = function(req, res){
  res.render('locations-list', { title: 'New' });
};