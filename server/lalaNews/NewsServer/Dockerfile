FROM java:8-jre
ADD ./target/EurekaServer-1.0-SNAPSHOT-exec.jar /app/eureka-server.jar
CMD ["java", "-Xmx200m", "-jar", "/app/eureka-server.jar"]
EXPOSE 8761
