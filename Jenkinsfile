pipeline {
  agent { 
    dockerfile true
  }

  stages {
    stage('build') {
            steps {
                sh 'build'
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