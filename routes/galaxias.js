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
  updateGalaxias = function(req, res) {
  	Galaxia.findById(req.params.id, function(err, galaxias) {
            galaxias.id =    req.body.id;
            galaxias.galaxia = req.body.galaxia;
            galaxias.tipo =  req.body.tipo;
            galaxias.planetas =  req.body.planetas;
            galaxias.planetasEnanos =   req.body.planetasEnanos;
            galaxias.imagen =  req.body.imagen;
  		galaxias.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(galaxias);
  		});
  	});
  }

    //Rutas de la API, asociadas a una función
    app.get('/galaxias', findAllGalaxias); 
    app.post('/galaxias', addGalaxia);
    app.put('/galaxias/:id', updateGalaxias) //actualiza una galaxia
}

module.exports = crudGalaxias;