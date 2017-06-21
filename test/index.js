/**
 * http://usejsdoc.org/
 */
var should = require('chai').should(),
        kubowlerwoodlog = require('../index'),
        log = kubowlerwoodlog.log,
        warn = kubowlerwoodlog.warn,
        error = kubowlerwoodlog.error

describe('#log', function() {
        it('log message', function() {
                log('message').should.equal(true)
        })
})

describe('#warn', function() {
        it('warn message', function() {
                warn('message').should.equal(true)
        })
})

describe('#error', function() {
        it('error message', function() {
                error('message').should.equal(true)
        })
})