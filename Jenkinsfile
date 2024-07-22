pipeline {
    agent any

    environment {
        NODE_VERSION = '14.x'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from GitHub
                checkout scm
            }
        }
        stage('Setup Node.js') {
            steps {
                // Install Node.js
                sh 'curl -sL https://deb.nodesource.com/setup_$NODE_VERSION | bash -'
                sh 'apt-get install -y nodejs'
                sh 'node -v'
                sh 'npm -v'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                // Build the Next.js project
                sh 'npm run build'
            }
        }
        stage('Archive') {
            steps {
                // Archive the build output
                archiveArtifacts artifacts: 'out/**', allowEmptyArchive: true
            }
        }
    }
}
