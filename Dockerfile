# Install python stuff
# npm install @angular/cli@next --global
# npm install @angular/cli@latest --global

FROM python:3.7-alpine as alpine_custom
COPY requirements.txt .
RUN apk --update add alpine-sdk git jpeg-dev mariadb-dev npm openldap-dev yarn \
	&& pip install -r requirements.txt \
	&& npm install @angular/cli@next --global \
	&& apk del alpine-sdk \
	&& addgroup -S sidewalkeggs && adduser -S -G sidewalkeggs sidewalkeggs \
	&& mkdir -p /opt/src \
	&& chown -R sidewalkeggs: /opt/src

FROM alpine_custom as dev_build
USER sidewalkeggs
WORKDIR /opt/src/angular_site
VOLUME /opt/src

FROM alpine_custom as prod_build
WORKDIR /opt/src/angular_site
COPY . .
ENTRYPOINT ["/bin/sh", "entrypoint.sh"]
