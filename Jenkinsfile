pipeline {
    agent any

    stages {

        stage('Deploy') {
            steps {
                sh -c "sudo cp -rpf index.html /var/www/html/"
            }
        }
    }
}