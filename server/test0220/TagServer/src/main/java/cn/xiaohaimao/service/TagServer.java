package cn.xiaohaimao.service;

import cn.xiaohaimao.po.Tag;

import java.util.List;

public interface TagServer {
    public List<Tag> getTagList(int num);
}
