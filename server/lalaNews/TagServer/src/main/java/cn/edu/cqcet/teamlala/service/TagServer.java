package cn.edu.cqcet.teamlala.service;



import cn.edu.cqcet.teamlala.po.Tag;

import java.util.List;

public interface TagServer {
    public List<Tag> getTagList(int num);
    // 获取没有登录的普通列表
    public List<Tag> getTagListNormal();
}
