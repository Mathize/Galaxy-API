const crudGalaxias = (app) => {

    const Galaxia = require('../models/galaxias.js');
  
    //FUNCIONES DE ENDPOINTS
    //GET - Devuelve todas las galaxias en la base
    findAllGalaxias = (req, res) => {
        Galaxia.find((err, galaxias) => {
            if(!err){
                console.log('GET /galaxias')
                res.send(galaxias);
            }else{
                console.log('ERROR: ' + err);
            }
        });
    };

    //POST - Insert a new Galaxy in the DB
    addGalaxia = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var galaxia = new Galaxia({
        id:    req.body.id,
        galaxia: req.body.galaxia,
        tipo: 	  req.body.tipo,
        planetas:  req.body.planetas,
        planetasEnanos:   req.body.planetasEnanos,
        imagen:  req.body.imagen,
    });

    galaxia.save(function(err) {
        if(!err) {
            console.log('Created');
        } else {
            console.log('ERROR: ' + err);
        }
    });

    res.send(galaxia);
};
    
    //PUT - Update a register already exists
//  updateCerveceria = function(req, res) {
//  	Cerveceria.findById(req.params.id, function(err, cerveceria) {
//  		cerveceria.id   = req.body.id;
//  		cerveceria.slug    = req.body.slug;
//  		cerveceria.nombreCer = req.body.nombreCer;
//  		cerveceria.ubicacionCer  = req.body.ubicacionCer;
//  		cerveceria.urlImagenCer = req.body.urlImagenCer;
//  		cerveceria.promBebCer   = req.body.promBebCer;
//  		cerveceria.promComCer = req.body.promComCer;
//      cerveceria.lat   = req.body.lat;
//  		cerveceria.lng   = req.body.lng;
//  		cerveceria.save(function(err) {
//  			if(!err) {
//  				console.log('Updated');
//  			} else {
//  				console.log('ERROR: ' + err);
//  			}
//  			res.send(cerveceria);
//  		});
//  	});
//  }

    //Rutas de la API, asociadas a una función
    app.get('/galaxias', findAllGalaxias); 
    app.post('/galaxias', addGalaxia);
//    app.put('/galaxias/:id', updateCerveceria) //actualiza una galaxia
}

module.exports = crudGalaxias;