const gulp = require('gulp');
const fs = require('fs');
const process = require('process');

gulp.task('update-version', function (done) {
  // Read the package.json file
  const packageJson = JSON.parse(fs.readFileSync('./package.json'));

  // Get the major version and patch version from environment variables
  const majorVersion = process.env.studio_version;
  const patchVersion = process.env.revisionnumber;

  // Join the major version and patch version
  const version = `${majorVersion}.${patchVersion}`;
  
  console.log(version);
  console.log(packageJson.version);

  // Update the version in package.json
  packageJson.version = version;

  // Write the updated package.json file
  fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));

  // Signal that the task is done
  done();
});
