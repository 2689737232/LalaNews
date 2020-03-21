package cn.edu.cqcet.lalatem.service;

import cn.edu.cqcet.teamlala.po.News;
import cn.edu.cqcet.teamlala.po.NewsDetail;
import cn.edu.cqcet.teamlala.po.Tag;

import java.util.List;

public interface UserCollectService {
    List<News> getUserCollectByOpenId(String openId, int start, int end);
    Boolean getNewsIsCollect(String openId,Integer newsId);
    Boolean insertNewsId2Collect(String openId,Integer newsId);
    Boolean deleteNewsIdFromCollect(String openId,Integer newsId);
    List<Tag> getUserTags(String openId);
    Boolean deleteUserTag(String openId,Integer tagId);
    Boolean insertUserTag(String openId,Integer tagId);
}
