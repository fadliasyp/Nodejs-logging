import winston from 'winston'

test('create logger with transports conole', ()=> {
    const logger = winston.createLogger({
        level: 'info',
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: 'application.log'
            }),
            // new winston.transports.File({
            //     filename: 'fadli.html'
            // })
        ]
    });

    logger.info('helo info')
    logger.error('helo error')
    logger.info('helo info')
})
