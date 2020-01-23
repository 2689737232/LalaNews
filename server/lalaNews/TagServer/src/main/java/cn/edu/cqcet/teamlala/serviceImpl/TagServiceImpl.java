package cn.edu.cqcet.teamlala.serviceImpl;

import cn.edu.cqcet.teamlala.mapper.TagMapper;
import cn.edu.cqcet.teamlala.po.Tag;
import cn.edu.cqcet.teamlala.service.TagServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagServiceImpl implements TagServer {
    @Autowired
    TagMapper tagMapper;
    @Override
    public List<Tag> getTagList(int num) {
        List<Tag> tags = tagMapper.getTagList(num);
        System.out.println("从数据库中获取数据");
        return tagMapper.getTagList(num);
    }

    @Override
    public List<Tag> getTagListNormal() {
        return  tagMapper.getTagListNormal();
    }
}
