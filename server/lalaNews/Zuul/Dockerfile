FROM java:8-jre
ADD ./target/Zuul-1.0-SNAPSHOT-exec.jar /app/zuul-server.jar
CMD ["java", "-Xmx200m", "-jar", "/app/zuul-server.jar"]
EXPOSE 8050
