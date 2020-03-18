FROM java:8-jre
ADD ./target/TagServer-1.0-SNAPSHOT-exec.jar /app/tag-server.jar
CMD ["java", "-Xmx200m", "-jar", "/app/tag-server.jar"]
EXPOSE 8888
