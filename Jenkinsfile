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

    post {
        always {

            // Jenkins test dashboard
            junit 'test-results/results.xml'

            // Playwright HTML report
            publishHTML([
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: false
            ])

            // Optional: archive reports
            archiveArtifacts artifacts: 'playwright-report/**'
        }
    }
    }
}