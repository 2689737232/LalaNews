package cn.xiaohaimao.serviceImpl;

import cn.xiaohaimao.mapper.TagMapper;
import cn.xiaohaimao.po.Tag;
import cn.xiaohaimao.service.TagServer;
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
        for (Tag tag : tags){
            System.out.println(tag);
        }
        return tagMapper.getTagList(num);
    }
}
