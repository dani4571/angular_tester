# Install python stuff
# npm install @angular/cli@next --global

FROM python:3.7-alpine as alpine_custom
RUN apk --update add npm mariadb-dev alpine-sdk  jpeg-dev git \
	&& npm install @angular/cli@next --global \
	&& apk del alpine-sdk \
	&& addgroup -S sidewalkeggs && adduser -S -G sidewalkeggs sidewalkeggs \
	&& mkdir -p /opt/src \
	&& chown -R sidewalkeggs: /opt/src

FROM alpine_custom as dev_build
USER sidewalkeggs
WORKDIR /opt/src
VOLUME /opt/src

FROM alpine_custom as prod_build
WORKDIR /opt/src
COPY . .
