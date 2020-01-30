pipeline {
    agent { docker { image 'node' } }
    environment {
        HOME = '.'
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