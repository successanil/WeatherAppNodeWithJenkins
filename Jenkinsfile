pipeline {
    agent { docker { image 'node' } }
    environment {
        HOME = './jenkins/'
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                //sh "echo ${env.GAPI_KEY}"
                sh 'npm test'
            }
        }
    }
}