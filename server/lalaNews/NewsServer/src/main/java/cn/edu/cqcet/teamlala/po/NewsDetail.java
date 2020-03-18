package cn.edu.cqcet.teamlala.po;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

public class NewsDetail implements Serializable {
    private String author;
    private String authorIcon;
    @JsonFormat( pattern="yyyy-MM-dd HH:mm:ss")
    private Date time;
    private  int readNumber;
    private String newsTitle;
    private int like;
    private int comment;
    private List<Paragraph> description;
    private List<Comment> commentList;

    public List<Comment> getComments() {
        return commentList;
    }

    public void setComments(List<Comment> comments) {
        this.commentList = comments;
    }

    public List<Paragraph> getDescription() {
        return description;
    }

    public void setDescription(List<Paragraph> description) {
        this.description = description;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getAuthorIcon() {
        return authorIcon;
    }

    public void setAuthorIcon(String authorIcon) {
        this.authorIcon = authorIcon;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public int getReadNumber() {
        return readNumber;
    }

    public void setReadNumber(int readNumber) {
        this.readNumber = readNumber;
    }

    public String getNewsTitle() {
        return newsTitle;
    }

    public void setNewsTitle(String newsTitle) {
        this.newsTitle = newsTitle;
    }

    public int getLikeNumber() {
        return like;
    }

    public void setLikeNumber(int likeNumber) {
        this.like = likeNumber;
    }

    public int getCommentNumber() {
        return comment;
    }

    public void setCommentNumber(int commentNumber) {
        this.comment = commentNumber;
    }
}
