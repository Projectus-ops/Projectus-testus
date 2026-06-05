pipeline {
  agent { 
    dockerfile true
  }

    stages {
        stage('Build inside container') {
            steps {
                bat 'docker run --rm node:16-alpine node --version'
            }
        }
    }
    stage('help') {
      steps {
        sh 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        sh 'npx playwright testing stage'
      }
      post {
        success {
          sh 'Success Stage'
        }
      }
    }
  }