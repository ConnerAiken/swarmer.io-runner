import './helpers/bootstrap';  

// ====================================
// Declarations
// ====================== 
const config = {
    baseUrl: process.env.baseUrl,
    paths: {
        smokeTest: path.resolve(process.cwd(), 'src', 'scenarios', 'smoke.js')
    }  
};

const program = phantomjs.exec(config.paths.smokeTest, config.baseUrl);  
// ====================================
// Program Flow
// ====================== 
utils.log("Opening test at "+config.paths.smokeTest+" and passing "+config.baseUrl);  

program.stdout.pipe(process.stdout);
program.stderr.pipe(process.stderr);

program.on('exit', code => { 
    // do something on end
    utils.log("Done! You may now close the program"); 
})