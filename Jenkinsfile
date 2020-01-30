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
                echo "${env.toknpm}"
                echo "//registry.npmjs.org/:_authToken=${env.TOKNPM} >> ~/.npmrc"
                sh 'npm publish'
            }
        }
    }
}