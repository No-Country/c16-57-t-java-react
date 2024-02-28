FROM openjdk:17-jdk-slim

ARG JAR_FILE=target/usuario-service-0.0.1.jar

COPY ${JAR_FILE} app_usuario-service.jar

ENTRYPOINT  ["java", "-jar","app_usuario-service.jar"]