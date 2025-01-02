pipeline {
    agent any
    tools {
        nodejs "nodejs23.5"
    }

    stages {
        stage('Dependencies') {
            steps {
                // Installing dependencies using npm
                sh 'npm install'
            }
        }

        stage('e2e Tests') {
            steps {
                // Running end-to-end tests using npm
                sh 'npm run sampletest'
            }
        }
    }
}
