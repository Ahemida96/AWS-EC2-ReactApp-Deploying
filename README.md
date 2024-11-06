# React Application Deployment on AWS EC2

This repository provides a comprehensive guide to deploying a React application on an AWS EC2 instance. Two deployment methods are demonstrated: one using Docker containers and the other with Nginx as a web server.

## Table of Contents
- [About the Project](#about-the-project)
- [Deployment Methods](#deployment-methods)
  - [Docker Deployment](#docker-deployment)
  - [Nginx Deployment](#nginx-deployment)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [AWS EC2 Configuration](#aws-ec2-configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## About the Project
This project demonstrates deploying a front-end React application on AWS EC2 using two popular approaches. By following this guide, you can configure, secure, and deploy a React app that is accessible over the internet through an AWS-hosted server. The Docker method enables containerized deployment, while the Nginx approach serves the application as static files.

## Deployment Methods

### Docker Deployment
This method leverages Docker to containerize the React app, allowing for easy deployment and scaling. The Docker configuration is included to streamline building and running the application in a containerized environment.

### Nginx Deployment
The second method involves using Nginx to serve the static files of the React app. This approach is suitable if you prefer a simple, lightweight setup without containerization, making use of Nginx's capabilities as a high-performance web server.

---

## Setup Instructions

### Prerequisites
To get started, ensure you have:
- An AWS account with IAM permissions to launch EC2 instances.
- DockerHub account and docker installed
- Basic knowledge of React, Docker, and Nginx.
- SSH tool installed on your local machine (optional).

### AWS EC2 Configuration
1. **Launch an EC2 Instance**:
   - Use the AWS Management Console or CLI to launch an EC2 instance (I used Ubuntu 20.04)
   - Create new key pair (We will use this key pair to SSH into the EC2 instance we’re creating).
   - with the appropriate security group settings. Open ports 80 (HTTP), 22 (SSH) and 3000(Custom TCP).
3. **Connect to the Instance**: Use SSH to connect to your EC2 instance:
   To access the EC2 server, you can use MobaXterm, a free software that you can download from https://mobaxterm.mobatek.net/.
   or use AWS Console 

---

## Deployment Steps

### Docker Deployment
1. **Install Docker**:
   ```bash
   sudo apt update
   sudo apt install -y docker.io
   sudo systemctl start docker
   sudo systemctl enable docker
   ```

2. **Deploy the image from Docker Hub.**:
   ```bash
   docker run -d -p 3000:3000 ahemida96/react-app
   ```


Your application should now be accessible via `http://your-ec2-public-ip`.

### Nginx Deployment
1. **Install Nginx**:
   ```bash
   sudo apt update
   sudo apt install -y nginx
   ```
2. **Install npm**:
   ```bash
   sudo apt install npm -y
   ```
3. **Install Node version 20**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs
   ```
5. **Create a directory for react**:
   ```bash
   sudo mkdir /var/www/html/react-app
   ```
6. **Configure Nginx**
    ```bash
     sudo vi /etc/nginx/conf.d/react.conf
    ```
   ```bash
    server {
        listen 80;
        listen [::]:80;
        root /var/www/html/react-app/build;
        
        #react app
        location / {
            try_files $uri /index.html;  
        }
    }
    ```
7. **Create a folder named “my-app” to place your React app project.**
    ```bash
    cd /home/ubuntu
    mkdir my-app
    cd my-app
    ```
8. **Clone react app**
 ```bash
git clone https://github.com/Ahemida96/AWS-EC2-ReactApp-Deploying.git
cd AWS-EC2-ReactApp-Deploying/react-app
 ```
9. **Build React App**:
   ```bash
   npm install
   npm run build
   ```

10. **Copy Build Files to Nginx**:
   ```bash
   sudo cp -r build/* /var/www/html/
   ```

11. **Configure Nginx** (optional):
   You may configure the default Nginx site to handle custom routes. Restart Nginx after any changes:
   ```bash
   sudo vi /etc/nginx/nginx.conf
   ```
   comment below line using “#”:
   ```bash
   #include /etc/nginx/sites-enabled/*;
   ```
   Validate the nginx configuration and reload the nginx
   ```bash
   sudo nginx -t && sudo systemctl reload nginx
   ```

Your application should now be accessible via `http://your-ec2-public-ip` on port 80.

---

## Usage
After deploying the application using either Docker or Nginx, access it by navigating to your EC2 instance’s public IP address in a web browser. Further customization can be done to meet specific requirements, such as setting up HTTPS with an SSL certificate.

---

## Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request with your updates.

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Open a pull request.

---

## License
This project is open-source and available under the MIT License. See the `LICENSE` file for more information.

---

Feel free to reach out if you encounter any issues or have questions. Happy deploying!

--- 
