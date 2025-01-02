pipeline {
    agent any
    tools {
        nodejs "nodejs23.5"
    }

    stages {
        stage('Dependencies') {
            steps {
                // Installing dependencies using npm
                bat 'npm install'
            }
        }

        stage('e2e Tests') {
            steps {
                // Running end-to-end tests using npm
                bat 'npm run sampletest'
            }
        }
    }
}
