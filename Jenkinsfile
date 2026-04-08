pipeline {
    agent any

    stages {
        stage('UI Tests') {
            steps {
                dir('UI') {
                    sh 'npm install'
                    sh 'npx cypress run'
                }
            }
        }

        stage('API Tests') {
            steps {
                dir('API') {
                    sh 'npm install'
                    sh 'npx cypress run'
                }
            }
        }
    }
}
