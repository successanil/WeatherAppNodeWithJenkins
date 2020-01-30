pipeline {
    agent { docker { image node:lts-alpine3.9 } }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
    }
}