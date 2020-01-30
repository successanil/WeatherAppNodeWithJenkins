pipeline {
    agent { docker { image 'node' } }
    environment {
        HOME = '.'
        NPM_TOKEN = "${NPM_TOKEN}"
    }
    stages {
        stage('build') {
            steps {
                //sh 'npm install'
                //sh 'npm test'
                echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN1} >> ~/.npmrc"
            }
        }
    }
}