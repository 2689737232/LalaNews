package cn.edu.cqcet.lalatem.serviceImpl;

import cn.edu.cqcet.lalatem.mapper.UserCollectMapper;
import cn.edu.cqcet.lalatem.po.Collect;
import cn.edu.cqcet.lalatem.service.UserCollectService;
import cn.edu.cqcet.teamlala.po.News;
import cn.edu.cqcet.teamlala.po.NewsDetail;
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
        for(int i = start;i<end;i++){
            newsDetails.add(restTemplate.getForObject("http://192.168.56.1:8050/news-server/news/getCollectNewsByNewsId/" + collects.get(i).getNewsId(),News.class));
        }
        return newsDetails;
    }
}
