package cn.edu.cqcet.lalatem.serviceImpl;

import cn.edu.cqcet.lalatem.mapper.UserCollectMapper;
import cn.edu.cqcet.lalatem.po.Collect;
import cn.edu.cqcet.lalatem.service.UserCollectService;
import cn.edu.cqcet.teamlala.po.News;
import cn.edu.cqcet.teamlala.po.NewsDetail;
import cn.edu.cqcet.teamlala.po.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
@Service
public class UserCollectServiceImpl implements UserCollectService {
    @Autowired
    private UserCollectMapper userCollectMapper;
    @Autowired
    private RestTemplate restTemplate;

    // 通过openid获取用户的收藏列表
    @Override
    public List<News> getUserCollectByOpenId(String openId, int start, int end) {
        List<Collect> collects = new ArrayList<>();
        collects = userCollectMapper.getUserCollectByOpenId(openId);
        List<News> newsDetails = new ArrayList<>();
        if(end > collects.size()  && collects.size() > 0){
            end = collects.size();
        }
        if(collects.size() != 0){
            for(int i = start;i<end;i++){
                newsDetails.add(restTemplate.getForObject("http://192.168.56.1:8050/news-server/news/getCollectNewsByNewsId/" + collects.get(i).getNewsId(),News.class));
            }
        }
        return newsDetails;
    }

    // 判断新闻是否是本用户所收藏
    @Override
    public Boolean getNewsIsCollect(String openId, Integer newsId) {
       Integer result = this.userCollectMapper.getNewsIsCollect(openId,newsId);
       return  result == 1;
    }

    // 用户点击喜欢按钮后添加到收藏
    @Override
    public Boolean insertNewsId2Collect(String openId, Integer newsId) {
        Integer result = this.userCollectMapper.insertNewsId2Collect(openId,newsId);
        return result != 0;
    }

    // 用户点击取消喜欢后从收藏列表中移除
    @Override
    public Boolean deleteNewsIdFromCollect(String openId, Integer newsId) {
        Integer result = this.userCollectMapper.deleteNewsIdFromCollect(openId,newsId);
        return result != 0;
    }

    // 获取用户已经添加了的tag列表
    @Override
    public List<Tag> getUserTags(String openId) {
        return this.userCollectMapper.getUserTags(openId);
    }

    // 通过openId删除用户指定的tag
    @Override
    public Boolean deleteUserTag(String openId, Integer tagId) {
        Integer result =  this.userCollectMapper.deleteUserTag(openId,tagId);
        return result == 1;
    }

    // 通过openId和tagId添加用户喜欢的tagId
    @Override
    public Boolean insertUserTag(String openId, Integer tagId) {
        int result = this.userCollectMapper.insertUserTag(openId,tagId);
        return result == 1;
    }
}
