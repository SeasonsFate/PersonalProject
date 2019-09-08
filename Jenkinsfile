pipeline {
    agent any

    stages {

        stage('Deploy') {
            steps {
                sh "sudo cp -rpf index.html /var/www/html/"
            }
        }
    }
}