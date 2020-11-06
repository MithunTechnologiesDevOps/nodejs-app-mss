const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://18.220.141.205:9000/',
       options : {
	    'sonar.projectName': 'Node JS Application - Sample',
		'sonar.projectDescription': 'This is a Node JS application',
        'sonar.sources': '.',
		//'sonar.tests': 'specs'
       // 'sonar.inclusions' : 'src/**' 
       },
}, () => {});
