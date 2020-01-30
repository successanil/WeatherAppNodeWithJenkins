pipeline {
    agent { docker { image 'node' } }
    environment {
        HOME = '.'
    }
    stages {
        stage('build') {
            steps {
                sh "printenv"
                //sh 'npm install'
                //sh 'npm test'
                echo "${toknpm}"
                echo "//registry.npmjs.org/:_authToken=${env.TOKNPM} >> ~/.npmrc"
                sh 'npm publish'
            }
        }
    }
}