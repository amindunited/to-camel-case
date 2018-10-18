/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';

const fs = require('fs');
const toCamelCase = require('./index');
const expect = require('chai').expect


describe('To Camel Case', () => {
  const expected = 'myDasherisedName';
  it('should export a function', () => {
    expect(toCamelCase).to.be.a('function');
  });

  it('should return Camel case from a Title case string', () => {
    expect(toCamelCase('MyDasherisedName')).to.equal(expected);
  });

  it('should return Camel case from a Snake case string', () => {
    expect(toCamelCase('my_dasherised_name')).to.equal(expected);
  });

  it('should return Camel case from a Kebab case string', () => {
    expect(toCamelCase('my-dasherised-name')).to.equal(expected);
  });

});
