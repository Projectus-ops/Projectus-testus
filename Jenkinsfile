pipeline {
  agent { 
    dockerfile true
  }

  stages {
    stage('install playwright') {
      steps {
        sh 'echo installing playwright'
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
}