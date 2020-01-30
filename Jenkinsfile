pipeline {
    agent { docker { image 'node:6-alpine' } }
    environment {
        HOME = '.'
        GAPI_KEY = $(GAPI_KEY)
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh "echo ${GAPI_KEY}"
            }
        }
    }
}