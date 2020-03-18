package cn.edu.cqcet.lalatem.service;

import cn.edu.cqcet.teamlala.po.News;
import cn.edu.cqcet.teamlala.po.NewsDetail;

import java.util.List;

public interface UserCollectService {
    List<News> getUserCollectByOpenId(String openId, int start, int end);
}
