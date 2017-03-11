var assert = require('assert');
var chai = require('chai');
var expect = require('chai').expect;
var should = require('chai').should;
var server = require('../server/sever.js');
var request = require('request');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);