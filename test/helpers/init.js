const path = require('path');
const sinon = require('sinon');
const chai = require('chai');

global.expect = chai.expect;
global.sinon = sinon;

process.env.TS_NODE_PROJECT = path.resolve('test/tsconfig.json');

