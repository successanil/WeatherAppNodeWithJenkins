pipeline {
    agent { docker { image 'node' } }
    environment {
        HOME = '.'
    }
    stages {
        stage('build') {
            steps {
                // sh "printenv"
                // sh 'npm install'
                //sh 'npm test'
                sh "echo //registry.npmjs.org/:_authToken=${env.NPM_TOKEN} >> ~/.npmrc"
                // sh 'npm pack'
                sh 'npm publish'
            }
        }
    }
}