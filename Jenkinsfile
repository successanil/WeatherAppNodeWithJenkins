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
                withCredentials([string(credentialsId: 'npm_token1', variable: 'NPM_TOKEN1')]) {
                    echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN1} >> ~/.npmrc"
                    sh 'npm publish'
                }
               
            }
        }
    }
}