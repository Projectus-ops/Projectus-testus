pipeline {
    agent any

    stages {

        stage('Build inside container') {
            steps {
                bat 'docker run --rm node:16-alpine node --version'
            }
        }

        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Playwright Help') {
            steps {
                bat 'npx playwright --version'
                bat 'npx playwright test --help'
            }
        }

        stage('Test') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: Tests passed'
        }

        failure {
            echo 'FAILED: Check logs'
        }
    }
}