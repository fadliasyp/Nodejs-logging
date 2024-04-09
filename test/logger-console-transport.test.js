import winston from 'winston'

test('create logger with transports conole', ()=> {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.log({
        level: 'info',
        message: 'hello logging'
    });
})
