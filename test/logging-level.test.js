import winston from 'winston'

test('logger-level', ()=> {
    const logger = winston.createLogger({
        level: 'debug',
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.log({level: 'error', message: 'hello error'});
    logger.log({level: 'warn', message: 'hello Warn'});
    logger.log({level: 'info', message: 'hello info'});
    logger.log({level: 'http', message: 'hello HTTP'});
    logger.log({level: 'verbose', message: 'hello verbose'});
    logger.log({level: 'debug', message: 'hello Debug'});
    logger.log({level: 'silly', message: 'hello silly'});

})

test('logging with shortcut function', ()=> {
    const logger = winston.createLogger({
        level: 'debug',
        transports: [
            new winston.transports.Console({})
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