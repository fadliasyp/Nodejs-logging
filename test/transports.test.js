import winston from "winston";
import TransportStream from 'winston-transport'

test('create with new transports', ()=> {

    class myTransports extends TransportStream{

        constructor(option){
            super(option)
        }
        log(info, next){
            console.log(`${new Date()} : ${info.level.toUpperCase()} : ${info.message}`)
            next()
        }
    }


    const logger = winston.createLogger({
        level: 'silly',
        transports: [
            new myTransports({})
        ]
    });

    logger.error('hello error');
    logger.warn('hello Warn');
    logger.info('hello info');
    logger.http('hello HTTP');
    logger.verbose('hello verbose');
    logger.debug('hello Debug');
    logger.silly('hello silly');
})
