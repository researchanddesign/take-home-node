const s = require('shelljs');

s.rm('-rf', 'build');
s.mkdir('build');
s.mkdir('build/migrations');
s.cp('migrations/*', 'build/migrations/');
if (s.test('-f', '.env')) {
	s.cp('.env', 'build/.env');
}
