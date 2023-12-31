FROM alpine:latest AS production

RUN mkdir /app
WORKDIR /app

ENV driverName="mysql"\
    useCache="false"\
    dataSourceUrl="root:password@(dbhost:3306)/docker-manager?charset=utf8"

COPY App /app/App
COPY views /app/views
COPY deploy/entrypoint.sh /app/entrypoint.sh

ENTRYPOINT ["sh", "/app/entrypoint.sh"]

