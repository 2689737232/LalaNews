FROM java:8-jre
ADD ./target/CommentServer-1.0-SNAPSHOT-exec.jar /app/comment-server.jar
CMD ["java", "-Xmx200m", "-jar", "/app/comment-server.jar"]
EXPOSE 8070
