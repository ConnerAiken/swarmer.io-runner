export default {
    log(msg, type = 0) {   
        if(type === 1) {
            console.warn(`[${process.env.appName}] ${msg}`); 
        }else if(type === 2) {
            console.error(`[${process.env.appName}] ${msg}`); 
        }else {
            console.log(`[${process.env.appName}] ${msg}`); 
        }  
    },
    loadENV() {
        const defaultConfig = dotenv.config({
            path: path.resolve(process.cwd(), '.env')
        });
        const config = dotenv.config(); 

        if (config.error) {
            this.log("Could not find .env file..", 2);
        }else {
            this.log("Successfully loaded .env variables..", 0);
        }
    },
    getUnix() {
        return Math.round(+new Date()/1000);
    }
}