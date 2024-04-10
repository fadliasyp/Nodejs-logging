import winston from "winston";

async function callAsync (){
    return promise.reject('ups')
}

const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({
            // handleExceptions: true,
            handleRejections: true,
            filename: 'src/exceptions.log'
        })
        // new winston.transports.File({
        //     filename: 'fadli.html'
        // })
    ]
});

callAsync()