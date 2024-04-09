import winston from 'winston'

test.skip('create logger with transports conole', ()=> {
    const logger = winston.createLogger({
        // format: winston.format.json(),
        // format: winston.format.simple(),
        format: winston.format.logstash(),
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.info('hello info')
    logger.error('hello error')
})

test('create logger with transports conole', ()=> {
    const logger = winston.createLogger({
        // format: winston.format.json(),
        // format: winston.format.simple(),
        // format: winston.format.logstash(),
        format: winston.format.printf((log) => {
            return `${new Date()} ${log.level}: ${log.message}`
        }),
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.info('hello info')
    logger.error('hello error')
})