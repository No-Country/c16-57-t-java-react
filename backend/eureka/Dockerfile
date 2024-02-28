FROM openjdk:17-jdk-slim

ARG JAR_FILE=target/eureka-0.0.1.jar

COPY ${JAR_FILE} app_eureka.jar

ENTRYPOINT  ["java", "-jar","app_eureka.jar"]

EXPOSE 8761