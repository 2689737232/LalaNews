FROM java:8-jre
ADD ./target/NewsServer-1.0-SNAPSHOT-exec.jar /app/news-server.jar
CMD ["java", "-Xmx200m", "-jar", "/app/news-server.jar"]
EXPOSE 8060
