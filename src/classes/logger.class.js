// ============================
// This class is consumed by node and phantomjs so must be ES5 and contain no native node modules
// ----------------------------

var fs = require('fs'); 

function Logger (args) { 
    this.filepath = fs.workingDirectory + '/output/results.json'; 

    if(!fs.exists(this.filepath)) { 
        fs.write(this.filepath, JSON.stringify({
            activity: [],
            events: []
        }), 'w');
    }

    this.data = JSON.parse(fs.read(this.filepath));  
}

Logger.prototype.read = function (path) {
    if(!path) {
        path = this.filepath;
    }

    this.data = JSON.parse(fs.read(path));  
}

Logger.prototype.save = function () { 
    fs.write(this.filepath, JSON.stringify(this.data), 'w');
}

Logger.prototype.log = function (key, value) {   
    if(this.data[key] instanceof Array) {
        this.data[key].push(value);
    }else { 
        this.data[key] = value;
    } 

    this.save();
}

Logger.prototype.get = function (key) {
    return this.data[key];
}

var instance = instance ? instance : new Logger();

module.exports = instance;
