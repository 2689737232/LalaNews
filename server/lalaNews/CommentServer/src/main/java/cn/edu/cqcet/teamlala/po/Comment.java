package cn.edu.cqcet.teamlala.po;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

public class Comment implements Serializable {
    private Integer newsId;
    private Long userId;
    private Integer commentId;
    private String name;
    private String icon;
    private String comment;
    private Integer parentId;
    @JsonFormat( pattern="yyyy-MM-dd HH:mm:ss")
    private Date date;
    private List<Comment> chirden;
    private Integer ancestorId;
    private String parentName;

    public String getParentName() {
        return parentName;
    }

    public void setParentName(String parentName) {
        this.parentName = parentName;
    }

    public Integer getAncestorId() {
        return ancestorId;
    }

    public void setAncestorId(Integer ancestorId) {
        this.ancestorId = ancestorId;
    }

    public Integer getNewsId() {
        return newsId;
    }

    public void setNewsId(Integer newsId) {
        this.newsId = newsId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Integer getCommentId() {
        return commentId;
    }

    public void setCommentId(Integer commentId) {
        this.commentId = commentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public List<Comment> getChirden() {
        return chirden;
    }

    public void setChirden(List<Comment> chirden) {
        this.chirden = chirden;
    }
}
