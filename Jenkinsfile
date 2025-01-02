pipeline
{
  agent any
  tools{nodejs "nodejs23"}

  stages{
    stages('Dependencies'){
      steps{
        sh npm 'i'
      }
    }
           stage('e2e Tests')
           {
             steps
             {
               sh 'npm run sampletest'
             }
           }
          }
  }
