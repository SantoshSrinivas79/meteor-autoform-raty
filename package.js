Package.describe({
  name: 'andrei:autoform-raty',
  version: '0.0.6',
  summary: 'AutoForm input type for Raty, a jQuery star rating form control',
  git: 'https://github.com/andreivolt/meteor-autoform-raty',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
		'aldeed:autoform@6.2.0',
    'coffeescript',
		'dalgard:jade@0.5.4_1',
    'templating'
  ]);

  api.addFiles([
    'main.jade',
    'main.js',
    'raty/lib/jquery.raty.js'
  ], 'client');

	api.addAssets([
    'raty/lib/fonts/raty.eot',
    'raty/lib/fonts/raty.svg',
    'raty/lib/fonts/raty.ttf',
    'raty/lib/fonts/raty.woff',
    'raty/lib/images/cancel-off.png',
    'raty/lib/images/cancel-on.png',
    'raty/lib/images/star-half.png',
    'raty/lib/images/star-off.png',
    'raty/lib/images/star-on.png',
    'raty/lib/jquery.raty.css',
	], 'client');
});
