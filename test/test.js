const chai = require('chai');
const hex = require('../lib/lib.js');
console.log(hex);
chai.should();

describe('rgba test', () => {
    it('#FFF 0.3 (string)', () => {
        const res = hex('#FFF', '0.3');
        res.should.eql('rgba(255,255,255,.3)');
    });
    it('#FFFFFF 1 (integer)', () => {
        const res = hex('#FFFFFF', 1);
        res.should.eql('rgba(255,255,255,1)');
    });
    it('FFF .5 (string)', () => {
        const res = hex('FFF', '.5');
        res.should.eql('rgba(255,255,255,.5)');
    });
    it('FFFFFF 1 (integer)', () => {
        const res = hex('FFFFFF', 1);
        res.should.eql('rgba(255,255,255,1)');
    });
    it('FFFFF 1 (integer)', () => {
        chai.expect(() => hex('FFFFF', 1)).to.throw('Geçersiz hex değeri.');
    });
});