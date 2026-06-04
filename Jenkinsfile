pipeline {
  agent { 
    dockerfile true
  }

  stages {
    stage('build') {
            steps {
                sh 'node --version'
                sh 'npm install'
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