const fs = require('fs');

// file creation
function createFile(filename, content, callback) {
  fs.writeFile(filename, content, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null, `File '${filename}' created successfully.`);
    }
  });
}
// file reading
function readFile(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}
// file writing
function writeFile(filename, content, callback) {
  fs.writeFile(filename, content, { flag: 'w' }, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null, `Content written to '${filename}' successfully.`);
    }
  });
}
// file appending
function appendFile(filename, content, callback) {
  fs.appendFile(filename, content, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null, `Content appended to '${filename}' successfully.`);
    }
  });
}
// file deletion
function deleteFile(filename, callback) {
  fs.unlink(filename, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null, `File '${filename}' deleted successfully.`);
    }
  });
}

const filename = 'example.txt';
const fileContent = 'I am Optimus Prime.';

createFile(filename, fileContent, (err, message) => {
  if (err) {
    console.error('Error creating file:', err);
  } else {
    console.log(message);

    readFile(filename, (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
      } else {
        console.log('File Content:', data);

        const appendContent = '\n And I am calling to all Autobots.';
        appendFile(filename, appendContent, (err, message) => {
          if (err) {
            console.error('Error appending to file:', err);
          } else {
            console.log(message);

            readFile(filename, (err, data) => {
              if (err) {
                console.error('Error reading file after append:', err);
              } else {
                console.log('File Content after append:', data);

                const newContent = 'Moshi Mosh, Ora Monkey D Luffy.';
                writeFile(filename, newContent, (err, message) => {
                  if (err) {
                    console.error('Error writing to file:', err);
                  } else {
                    console.log(message);

                    deleteFile(filename, (err, message) => {
                      if (err) {
                        console.error('Error deleting file:', err);
                      } else {
                        console.log(message);
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
