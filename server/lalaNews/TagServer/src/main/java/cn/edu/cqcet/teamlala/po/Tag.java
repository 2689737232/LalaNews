package cn.edu.cqcet.teamlala.po;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.Date;

// 实现序列化 用于把对象存到字节流，然后可以恢复
public class Tag implements Serializable {
    private static final long serialVersionUID = 1L;
    private Integer tagId;
    // 使用Jackson，不向前端返回标签创建修改日期的json
    @JsonIgnore
    private Date createTime;
    @JsonIgnore
    private Date  updateTime;
    private String tagName;

    public Integer getTagId() {
        return tagId;
    }

    public void setTagId(Integer tagId) {
        this.tagId = tagId;
    }

    public String getTagName() {
        return tagName;
    }

    public void setTagName(String tagName) {
        this.tagName = tagName;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    @Override
    public String toString() {
        return tagId + "" + tagName + createTime + updateTime;
    }
}
