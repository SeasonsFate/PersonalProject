pipeline {
    agent any

    stages {

        stage('Deploy') {
            steps {
                sh "sudo cp -rpf html_src/builds.html /var/www/html/"
                sh "sudo cp -rpf html_src/index.html /var/www/html/"
                sh "sudo cp -rpf html_src/saved_builds.html /var/www/html/"
            }
        }
    }
}