FROM java:8-jre
ADD ./target/UserServer-1.0-SNAPSHOT-exec.jar /app/user-server.jar
CMD ["java", "-Xmx200m", "-jar", "/app/user-server.jar"]
EXPOSE 8040
