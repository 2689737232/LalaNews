package cq.edu.cqcet.lalateam.serviceImpl;

import cn.edu.cqcet.teamlala.po.Tag;
import cq.edu.cqcet.lalateam.mapper.SearchMapper;
import cq.edu.cqcet.lalateam.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ServiceImpl implements SearchService{

    @Autowired
    private SearchMapper searchMapper;
    // 查询指定数量的tag标签
    @Override
    public List<Tag> getTagList(int start, int end) {
        List<Tag> tags =  this.searchMapper.getTagList(start,end);
        return tags;
    }
}
