package cq.edu.cqcet.lalateam.service;

import cn.edu.cqcet.teamlala.po.Tag;

import java.util.List;

public interface SearchService {
    // 根据数量查询对应数量的tag
    List<Tag> getTagList(int start, int end);
}
