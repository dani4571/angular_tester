# Angular_tester

Based on:
https://www.techiediaries.com/angular-tutorial/
https://docs.djangoproject.com/en/2.2/intro/tutorial01/
https://www.metaltoad.com/blog/angular-api-calls-django-part-2-building-micro-blog-app
https://www.metaltoad.com/blog/angular-api-calls-django-authentication-jwt

https://github.com/leavingonaspaceship/thinkster-django-angular-boilerplate

# Dev
## Build
`docker build --target dev_build -t angular_tester:dev .`
## Run
`docker run -dti --volume ~/Documents/Projects/angular_tester/:/opt/src angular_tester:dev /bin/sh entrypoint.sh`

# Prod 
## Build
`docker build --target prod_build -t angular_tester:prod .`
## Run
`docker run -dti angular_tester:dev`
