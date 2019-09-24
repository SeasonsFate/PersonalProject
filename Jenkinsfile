pipeline {
    agent any

    stages {

        stage('Deploy') {
            steps {
                sh "sudo cp -rpf html_src/*.html /var/www/html/"
                sh "sudo cp -rpf html_src/*.js /var/www/html/"
            }
        }
    }
}