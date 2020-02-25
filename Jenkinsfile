pipeline {
    agent any
    
    stages {
        stage('pull') {
            steps {
               checkout(
                   [
                       $class: 'GitSCM', 
                       branches: [[name: '*/master']], 
                       doGenerateSubmoduleConfigurations: false, 
                       extensions: [], 
                       submoduleCfg: [], 
                       userRemoteConfigs: 
                       [
                           [
                               credentialsId: '6ed4dade-8505-4dc5-b6c1-21e581bb8dbe', 
                               url: 'https://github.com/elias4ty/suanfa.git'
                            ]
                        ]
                    ]
                )
            }
        }
        stage('tag') {
            steps {
                echo "开始打包tag..."
                sh label: '', script: 'git tag testpipeline3'
                echo "打包完成..."
            }
        }      
    }
}
