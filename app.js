var express = require('express')
var app = express()
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/sri";
var bodyparser = require('body-parser');
var obj = require('./student');
var obj1 = require('./user');
var obj2 = require('./order');
mongoose.connect('mongodb://localhost:27017/sri');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    'extended': false
}));
app.use(express.static(__dirname + '/public'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/' + '/public/navigation.html');
});

app.post('/orderdata', function (req, res) {

    var data = {
        name :req.body.name,
        email: req.body.email,
        mob : req.body.mob,
        city : req.body.city,
        pincode : req.body.pincode


    }
obj2.addStudent(data, function(err, data) {
        if (data) {
           response ="Order Placed"
            
            res.send(response);
        } else {
           error = {
                "error": "Sorry insertion failed"
            }
            res.json(error);
            console.log(err);
        }
    });

});

app.post('/userdata', function (req, res) {

    var data = {
        name :req.body.name,
        email: req.body.email,
        mob : req.body.mob,
        city : req.body.city,
        pincode : req.body.pincode


    }
obj1.addStudent(data, function(err, data) {
        if (data) {
           response ="Item Added"
            
            res.send(response);
        } else {
           error = {
                "error": "Sorry insertion failed"
            }
            res.json(error);
            console.log(err);
        }
    });

});

app.post('/data', function (req, res) {

    var data = {
        name :req.body.name,
        email: req.body.email,
        mob : req.body.mob,
        city : req.body.city,
        pincode : req.body.pincode


    }
obj.addStudent(data, function(err, data) {
        if (data) {
           response ="Data inserted succesfully"
            
            res.send(response);
        } else {
           error = {
                "error": "Sorry insertion failed"
            }
            res.json(error);
            console.log(err);
        }
    });

});
    
app.post('/retrieve', function (req, res) {

var ret=req.body.name;

obj.getStudentByField(ret, function(err, ret) {
        if (ret) {
           response = "Data retrieved succesfully"
            res.send(ret);
        } else {
           error = {
                "error": "Sorry retrieve failed"
            }
            res.json(error);
            console.log(err);
        }
    });

});

app.post('/userretrieve', function (req, res) {

var ret=req.body.name;

obj1.getStudentByField(ret, function(err, ret) {
        if (ret) {
           response = "Data retrieved succesfully"
            res.send(ret);
        } else {
           error = {
                "error": "Sorry retrieve failed"
            }
            res.json(error);
            console.log(err);
        }
    });

});

app.post('/delete', function(req, res) {
    var name = req.body.name;
    obj.removeStudent(name, function(err, name) {
        if (name) {
            response ="Student Record has been deleted!"
            
            res.send(response);
        } else {
            error = {
                "error": "Please check entered ID"
            }
            res.json(error);
            console.log(err);
        }
    });
});

app.post('/userdelete', function(req, res) {
    var name = req.body.name;
    obj1.removeStudent(name, function(err, name) {
        if (name) {
            response ="Student Record has been deleted!"
            
            res.send(response);
        } else {
            error = {
                "error": "Please check entered ID"
            }
            res.json(error);
            console.log(err);
        }
    });
});
app.post('/orderdelete', function(req, res) {
    var name = req.body.name;
	console.log(name);
    obj2.removeStudent(name, function(err, name) {
        if (name) {
            response ="Student Record has been deleted!"
            
            res.send(response);
        } else {
            error = {
                "error": "Please check entered ID"
            }
            res.json(error);
            console.log(err);
        }
    });
});
app.post('/update', function(req, res) {
    var name = req.body.name;
    var data = ({
        name: req.body.name,
        email: req.body.email,
        mob: req.body.mob,
        city: req.body.city,
       pincode: req.body.pincode
    });
    //Calls the function from student.js model
    obj.updateStudent(name,data, {}, function(err, student) {
        if (student) {
          response = "Student Details have been updated!"
            res.send(response);
            console.log(data);
        } else {
          error = "Sorry update failed"
            
            res.json(error);
        }
        
            console.log(err);
    });
});

app.post('/entiredata', function(req, res) {
    obj.getDetails(function(err,dt) {
        console.log(dt);
        if (dt) {
           response = {
                "result": dt
            }
            res.send(dt);
        } else {
           error = {
                "error": "Sorry retrieve failed"
            }
            res.json(error);
        }
    });
});

app.post('/getorderdata', function(req, res) {
    obj2.getDetails(function(err,dt) {
        console.log(dt);
        if (dt) {
           response = {
                "result": dt
            }
            res.send(dt);
        } else {
           error = {
                "error": "Sorry retrieve failed"
            }
            res.json(error);
        }
    });
});

app.post('/userentiredata', function(req, res) {
    obj1.getDetails(function(err,dt) {
        console.log(dt);
        if (dt) {
           response = {
                "result": dt
            }
            res.send(dt);
        } else {
           error = {
                "error": "Sorry retrieve failed"
            }
            res.json(error);
        }
    });
});

app.listen(3000);
