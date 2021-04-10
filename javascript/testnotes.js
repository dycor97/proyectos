//test using 4 phases with mocha and node.js

const assert = require('assert');
const fs = require('fs');

describe('appendFileSync', () => {
  const path = './message.txt';

  afterEach(() => {
    fs.unlinkSync(path);
  });
  
  it('writes a string to text file at given path name', () => {

    // Setup
    const str = 'Hello Node.js';
    
    // Exercise: write to file
    fs.appendFileSync(path, str);

    // Verify: compare file contents to string
    const contents = fs.readileSync(path);
    assert.ok(contents.toString() === str);

    // Teardown: delete path
    fs.unlinkSync(path);
  });
});
