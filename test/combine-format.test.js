import winston from 'winston'

test('create logger with transports conole', ()=> {
    const logger = winston.createLogger({
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json()
        ),
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.info('hello info')
    logger.error('hello error')
})
