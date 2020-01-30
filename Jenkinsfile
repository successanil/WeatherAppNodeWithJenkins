pipeline {
    agent { docker { image 'node' } }
    environment {
        HOME = '.'
    }
    stages {
        stage('build') {
            steps {
                //sh 'npm install'
                //sh 'npm test'
                echo "//registry.npmjs.org/:_authToken=${env.NPMTOKEN2} >> ~/.npmrc"
                sh 'npm publish'
            }
        }
    }
}