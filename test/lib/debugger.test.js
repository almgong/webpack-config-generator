const d = require('../../src/lib/debugger');

describe('debugger', () => {
  describe('#log', () => {
    context('DEBUG environment variable is "true"', () => {
      let debugEnvOriginal = process.env.DEBUG;

      before(() => {
        process.env.DEBUG = 'true';
      });

      after(() => {
        process.env.DEBUG = debugEnvOriginal;
      });

      it('should log', () => {
        const consoleLogStub = sinon.stub(console, 'log').callsFake(() => {});

        d.log('hello!');

        consoleLogStub.restore(); // if we don't do this, any error messaging will be gobbled up

        expect(consoleLogStub.called).to.eql(true);
        expect(consoleLogStub.calledWith('hello!')).to.eql(true);
      });
    });

    context('DEBUG environment variable is not "true"', () => {
      let debugEnvOriginal = process.env.DEBUG;

      before(() => {
        process.env.DEBUG = 'false';
      });

      after(() => {
        process.env.DEBUG = debugEnvOriginal;
      });

      it('should not log', () => {
        const consoleLogStub = sinon.stub(console, 'log').callsFake(() => {});

        d.log('hello!');

        consoleLogStub.restore(); // if we don't do this, any error messaging will be gobbled up

        expect(consoleLogStub.called).to.eql(false);
      });
    });
  });
});