pipeline {
    agent { docker { image 'node:6-alpine' } }
    environment {
        HOME = '.'
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
    }
}