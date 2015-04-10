Package.describe({
  name: 'andrei:autoform-raty',
  version: '0.0.1',
  summary: '',
  git: 'https://github.com/andreivolt/meteor-autoform-raty',
  documentation: 'README.md'
});

var path = Npm.require('path');
var fs = Npm.require('fs');

Package.onUse(function(api) {
  api.use([
    'aldeed:autoform@5.0.0',
    'coffeescript',
    'mquandalle:jade@0.4.1',
    'templating'
  ]);

  var packagePath = path.join(path.resolve('.'), 'packages', 'andrei:autoform-raty');
  var files = fs.readdirSync(path.join(packagePath, 'raty', 'lib', 'fonts')).map(function(fName){
    return path.join('raty', 'lib', 'fonts', fName);
  });
  files = files
    .concat(fs.readdirSync(path.join(packagePath, 'raty', 'lib', 'images')).map(function(fName){
        return path.join('raty', 'lib', 'images', fName);
     }))
    .concat(['raty/lib/jquery.raty.css', 'raty/lib/jquery.raty.js'])
    .concat(['main.jade', 'main.coffee'])

  api.addFiles(files, 'client');

  api.versionsFrom('1.0');
});
