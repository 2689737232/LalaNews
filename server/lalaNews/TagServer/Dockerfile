FROM java:8-jre
ADD ./target/SearchServer-1.0-SNAPSHOT-exec.jar /app/search-server.jar
CMD ["java", "-Xmx200m", "-jar", "/app/search-server.jar"]
EXPOSE 8090
