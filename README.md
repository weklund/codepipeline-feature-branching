To see the standard Create React App readme, checkout the [provided one](/PROVIDED_README.md)

Steps to reproduce this infrastructure for CI/CD using AWS CodePipeline, CodeBuild, S3, and Cloudfront:

1. Create a new AWS CodePipeline
2. Authorize AWS CodePipeline with your GitHub account
3. Create a CodeBuild project that your CodePipeline will reference (Using docker.io/library/node:current-alpine3.12 as the image on a linux environment, not ARM)
4. Create a S3 bucket for the deploy stage (CloudFront will point to this bucket)


#### 1. Create a new AWS CodePipeline
![https://puu.sh/G58kz/649a0488e4.png](https://puu.sh/G58kz/649a0488e4.png)

#### 2. Authorize AWS CodePipeline with your GitHub account
![https://puu.sh/G58l5/d07cf313e9.png](https://puu.sh/G58l5/d07cf313e9.png)

#### 3. Create a CodeBuild project to source and build the repo
![https://puu.sh/G595X/d152dccbfc.png](https://puu.sh/G595X/d152dccbfc.png)

### Todos

- Add buildspec.yml
- CloudFormation for CloudFront Distro
- Lambda trigger for branch based s3 bucket and CloudFront Distro