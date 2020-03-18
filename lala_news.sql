/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50729
Source Host           : localhost:3306
Source Database       : lala_news

Target Server Type    : MYSQL
Target Server Version : 50729
File Encoding         : 65001

Date: 2020-01-28 17:11:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for author
-- ----------------------------
DROP TABLE IF EXISTS `author`;
CREATE TABLE `author` (
  `author_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'author id',
  `author_name` varchar(20) NOT NULL COMMENT 'author name',
  `author_icon` varchar(256) NOT NULL COMMENT 'author icon',
  `create_time` datetime NOT NULL COMMENT 'create time',
  `update_time` datetime NOT NULL COMMENT 'update time',
  PRIMARY KEY (`author_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18569745872 DEFAULT CHARSET=utf8 COMMENT='author table\n';

-- ----------------------------
-- Records of author
-- ----------------------------
INSERT INTO `author` VALUES ('100000001', '啦啦', 'http://img4.imgtn.bdimg.com/it/u=3737285663,1371022209&fm=26&gp=0.jpg', '2020-01-22 10:51:47', '2020-01-22 10:51:51');
INSERT INTO `author` VALUES ('100000002', '小爱', 'http://img1.imgtn.bdimg.com/it/u=2573782765,1816863544&fm=26&gp=0.jpg', '2020-01-22 21:01:31', '2020-01-22 21:01:32');
INSERT INTO `author` VALUES ('100000003', 'yes', 'http://img4.imgtn.bdimg.com/it/u=193858030,3086198490&fm=26&gp=0.jpg', '2020-01-22 21:01:33', '2020-01-22 21:01:33');
INSERT INTO `author` VALUES ('13452007745', '小周', 'http://img4.imgtn.bdimg.com/it/u=193858030,3086198490&fm=26&gp=0.jpg', '2020-01-24 13:14:29', '2020-01-24 13:14:30');
INSERT INTO `author` VALUES ('15748995657', '小小', 'http://img4.imgtn.bdimg.com/it/u=3798165575,3095137605&fm=15&gp=0.jpg', '2020-01-24 13:50:44', '2020-01-24 13:50:46');
INSERT INTO `author` VALUES ('17854796547', '哇哇', 'http://img1.imgtn.bdimg.com/it/u=2573782765,1816863544&fm=26&gp=0.jpg', '2020-01-24 13:42:06', '2020-01-24 13:42:05');
INSERT INTO `author` VALUES ('18569745871', '溜溜', 'http://img1.imgtn.bdimg.com/it/u=3996762366,2575434929&fm=11&gp=0.jpg', '2020-01-24 13:44:57', '2020-01-24 13:44:57');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `comment_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'commetn id',
  `user_id` bigint(20) NOT NULL COMMENT 'user id',
  `news_id` bigint(20) NOT NULL COMMENT 'news id',
  `comment_text` varchar(500) NOT NULL COMMENT 'comment text',
  `parent_id` bigint(20) DEFAULT NULL COMMENT 'parent comment id',
  `create_time` datetime NOT NULL COMMENT 'create time',
  `update_time` datetime NOT NULL COMMENT 'update time',
  `ancestor_id` bigint(20) NOT NULL COMMENT 'ancestor id',
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='comment table';

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('1', '13452007451', '2010000001', '这里是阿嘎杀手的一个评论信息', null, '2020-01-23 00:00:00', '2020-01-23 17:11:05', '0');
INSERT INTO `comment` VALUES ('2', '17815688567', '2010000001', '这是对上面评论的评论信息', '1', '2020-01-23 17:12:19', '2020-01-23 17:12:20', '1');
INSERT INTO `comment` VALUES ('4', '17854796547', '2010000001', '发撒是否fasf搭嘎大概多少根深蒂固论信息safasfasfsafasf沙发上', '2', '2020-01-23 20:14:33', '2020-01-23 20:14:35', '1');

-- ----------------------------
-- Table structure for content
-- ----------------------------
DROP TABLE IF EXISTS `content`;
CREATE TABLE `content` (
  `content_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'content id',
  `content_text_id` bigint(20) NOT NULL COMMENT 'content text id',
  `content_image_id` bigint(20) NOT NULL COMMENT 'content_image_id',
  `content_video_id` bigint(20) NOT NULL COMMENT 'content video id',
  `create_time` datetime NOT NULL COMMENT 'create time',
  `update_time` datetime NOT NULL COMMENT 'update time',
  PRIMARY KEY (`content_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of content
-- ----------------------------
INSERT INTO `content` VALUES ('1', '1', '1', '1', '2020-01-23 13:26:07', '2020-01-23 13:26:08');

-- ----------------------------
-- Table structure for content_paragraph
-- ----------------------------
DROP TABLE IF EXISTS `content_paragraph`;
CREATE TABLE `content_paragraph` (
  `paragraph_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'paragraph id',
  `paragraph_text` varchar(3000) NOT NULL DEFAULT '' COMMENT 'paragraph text',
  `create_time` datetime NOT NULL COMMENT 'create time',
  `update_time` datetime NOT NULL COMMENT 'update time',
  `news_id` bigint(20) NOT NULL COMMENT 'news id',
  `position` int(50) NOT NULL DEFAULT '1' COMMENT 'paragraph postion',
  `image_url` varchar(1000) DEFAULT NULL COMMENT 'image url',
  `paragraph_type` int(11) NOT NULL COMMENT 'paragraph type\n1 text\n2 video\n3 image',
  PRIMARY KEY (`paragraph_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='content paragraph';

-- ----------------------------
-- Records of content_paragraph
-- ----------------------------
INSERT INTO `content_paragraph` VALUES ('1', '1月23日，大河报大河客户端记者从央视获悉，鉴于近期防疫情势，2020央视春晚的河南郑州、粤港澳大湾区两个分会场以录制形式进行。\r\n\r\n1月22日，2020年央视春晚第五次彩排在央视一号演播厅顺利举行，据介绍，此次彩排是在前四次彩排基础之上的一次演职人员全要素合成，2020春晚大戏已经各就各位、蓄势待发。\r\n\r\n从第五次彩排的效果来看，今年春晚的歌曲通俗易懂、朗朗上口，有的饱含时代激情，有的传递了人间温情。比如，著名曲作家谷建芬创作的经典旋律，曾经陪伴了一代又一代人走过光阴的故事，唤起一个又一个忘不掉的青春记忆。从1980年《年轻的朋友来相会》，到2000年《二十年后再相会》，再到今年亮相春晚的又一劲曲，它们在不同的时代表达了同样的情怀。\r\n\r\n今年央视春晚的许多语言类节目，让观众觉着其人其事近在身边、可触可感。浓缩大众生活的年度热词更是带来不少笑料与情感共鸣。无论是“我不要你觉得，我要我觉得”的快人快语，还是“单身一直爽，一直单身一直爽”的情感自嘲，或者“简单就是快乐”的生活哲理，这些语言紧接时代地气，折射人间大爱。除此之外，许多节目还贡献了原创的幽默桥段和格言警句，比如“明天还准备一起吃米线呢!”“牙医的表白都那么痛”，都有望被“带火”成为新的流行语。\r\n\r\n众所周知，红灯笼是非常鲜明的中国元素，也是最具美学特色的节庆符号，灯笼上的黄穗子就是今年春晚舞美设计的灵感来源。今年央视春晚独具匠心，将灯笼穗子抽象化处理成圆筒状，并加以放大形似一顶灯笼座，央视一号演播厅的观众好像坐在硕大的灯笼下观看节目。在欢乐、祥和、温馨的喜庆氛围中，拥抱鼠年新春的到来。', '2020-01-23 13:35:00', '2020-01-23 13:35:01', '2010000001', '2', null, '1');
INSERT INTO `content_paragraph` VALUES ('2', '', '2020-01-23 13:46:21', '2020-01-23 13:46:20', '2010000001', '1', 'http://img1.imgtn.bdimg.com/it/u=1196113397,4243959186&fm=26&gp=0.jpg', '3');
INSERT INTO `content_paragraph` VALUES ('3', '据介绍，今年春晚的歌曲通俗易懂、朗朗上口，有的饱含时代激情，有的传递了人间温情。其中包括著名曲作家谷建芬创作的经典旋律，书写陪伴一代又一代人走过光阴的故事，唤起一个又一个忘不掉的青春记忆。\r\n\r\n今年春晚的语言类节目亮点纷呈，让观众觉着其人其事近在身边、可触可感。浓缩大众生活的年度热词更是带来情感共鸣——无论是“我不要你觉得，我要我觉得”的快人快语，还是“简单就是快乐”的生活哲理，这些语言紧接时代地气，折射人间大爱。\r\n\r\n据总台介绍，红灯笼是非常鲜明的中国元素，也是最具美学特色的节庆符号，灯笼上的黄穗子就是今年春晚舞美设计的灵感来源。春晚主会场将灯笼穗子抽象化处理成圆筒状，并加以放大，形似一顶灯笼座，在欢乐、祥和、温馨的喜庆氛围中，拥抱鼠年新春的到来。\r\n\r\n据悉，今年春晚还将在全球近600家媒体平台上传播，让全球华人共享文化盛宴。另外，鉴于近期防疫情势，河南郑州、粤港澳大湾区两个分会场以录制形式进行。', '2020-01-23 13:47:58', '2020-01-23 13:47:56', '2010000001', '3', null, '1');

-- ----------------------------
-- Table structure for image
-- ----------------------------
DROP TABLE IF EXISTS `image`;
CREATE TABLE `image` (
  `image_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'image id',
  `image_url` varchar(1000) NOT NULL COMMENT 'image url',
  `create_time` datetime NOT NULL COMMENT 'craete time',
  `update_time` datetime NOT NULL COMMENT 'update time',
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COMMENT='image table';

-- ----------------------------
-- Records of image
-- ----------------------------
INSERT INTO `image` VALUES ('1', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3393844247,2595221001&fm=26&gp=0.jpg', '2020-01-22 13:30:49', '2020-01-22 13:30:50');
INSERT INTO `image` VALUES ('2', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2266619897,80295209&fm=26&gp=0.jpg', '2020-01-22 13:31:07', '2020-01-22 13:31:07');
INSERT INTO `image` VALUES ('3', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=556944372,754063125&fm=26&gp=0.jpg', '2020-01-22 13:31:22', '2020-01-22 13:31:23');
INSERT INTO `image` VALUES ('4', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=630020664,2609636091&fm=26&gp=0.jpg', '2020-01-22 13:31:58', '2020-01-22 13:31:59');
INSERT INTO `image` VALUES ('5', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=113954626,4012142264&fm=26&gp=0.jpg', '2020-01-22 13:34:39', '2020-01-22 13:34:40');
INSERT INTO `image` VALUES ('6', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=760546978,1554349838&fm=26&gp=0.jpg', '2020-01-22 13:34:53', '2020-01-22 13:34:55');
INSERT INTO `image` VALUES ('7', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2202025330,3885009737&fm=26&gp=0.jpg', '2020-01-22 13:35:52', '2020-01-22 13:35:53');
INSERT INTO `image` VALUES ('8', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3945974708,115446960&fm=11&gp=0.jpg', '2020-01-22 13:36:33', '2020-01-22 13:36:34');
INSERT INTO `image` VALUES ('9', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=245312438,4097216035&fm=26&gp=0.jpg', '2020-01-22 13:36:48', '2020-01-22 13:36:50');
INSERT INTO `image` VALUES ('10', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1770319903,4231985246&fm=11&gp=0.jpg', '2020-01-22 13:36:58', '2020-01-22 13:36:59');
INSERT INTO `image` VALUES ('11', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4119762299,3413011776&fm=26&gp=0.jpg', '2020-01-22 13:37:30', '2020-01-22 13:37:31');
INSERT INTO `image` VALUES ('12', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2938863670,2006488806&fm=26&gp=0.jpg', '2020-01-22 13:37:40', '2020-01-22 13:37:42');
INSERT INTO `image` VALUES ('14', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=709437637,1623508333&fm=11&gp=0.jpg', '2020-01-22 13:42:56', '2020-01-22 13:42:56');
INSERT INTO `image` VALUES ('15', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1123503255,4172765950&fm=11&gp=0.jpg', '2020-01-22 13:42:56', '2020-01-22 13:42:56');
INSERT INTO `image` VALUES ('16', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=193858030,3086198490&fm=26&gp=0.jpg', '2020-01-22 13:42:56', '2020-01-22 13:42:56');
INSERT INTO `image` VALUES ('17', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1522146444,3890939769&fm=11&gp=0.jpg', '2020-01-22 13:42:56', '2020-01-22 13:42:56');
INSERT INTO `image` VALUES ('18', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=370709059,818252717&fm=26&gp=0.jpg', '2020-01-22 13:42:56', '2020-01-22 13:42:56');
INSERT INTO `image` VALUES ('19', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1837618897,3925024073&fm=26&gp=0.jpg', '2020-01-22 13:42:56', '2020-01-22 13:42:56');
INSERT INTO `image` VALUES ('20', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3937060936,3676540712&fm=26&gp=0.jpg', '2020-01-22 13:42:56', '2020-01-22 13:42:56');

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `news_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'news id',
  `create_time` datetime NOT NULL COMMENT 'create time',
  `update_time` datetime NOT NULL COMMENT 'update time',
  `author_id` bigint(20) NOT NULL COMMENT 'author id',
  `title` varchar(100) NOT NULL COMMENT 'news description',
  `type` int(11) NOT NULL COMMENT 'news type\nther are three types.',
  `images_id` bigint(20) DEFAULT NULL COMMENT 'images id',
  `video_url` varchar(1000) DEFAULT NULL COMMENT 'video url',
  PRIMARY KEY (`news_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2010000010 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('100000001', '2020-01-22 12:46:11', '2020-01-22 12:46:12', '100000002', '在2020年的1月22日的这个时候我写了这个新闻', '2', null, 'http://gslb.miaopai.com/stream/t0GAm39aNst4FGrkLIe3y0Qbh9EnJB8KbBAyXA__.mp4?vend=miaopai&ssig=e8f630803fed5e70adab2fed07210ce2&time_stamp=1579757209717&mpflag=32&unique_id=1579753634292369');
INSERT INTO `news` VALUES ('2010000001', '2020-01-21 19:23:13', '2020-01-21 19:23:14', '100000001', '这是我的第一个新闻类', '1', '1000000001', null);
INSERT INTO `news` VALUES ('2010000004', '2020-01-22 12:46:59', '2020-01-22 12:47:00', '100000003', '因为你是我生命中的所有', '3', '1000000002', null);
INSERT INTO `news` VALUES ('2010000005', '2020-01-22 18:42:55', '2020-01-22 18:42:56', '100000003', '将我的心放在你手中陪你到永久', '1', '1000000003', null);
INSERT INTO `news` VALUES ('2010000006', '2020-01-24 13:13:45', '2020-01-24 13:13:46', '13452007745', '这是教育标签下面的新闻信息', '1', null, '');
INSERT INTO `news` VALUES ('2010000007', '2020-01-24 13:18:04', '2020-01-24 13:18:05', '17854796547', '这是教育标签下面的第二条新闻信息', '2', null, 'http://gslb.miaopai.com/stream/t0GAm39aNst4FGrkLIe3y0Qbh9EnJB8KbBAyXA__.mp4?vend=miaopai&ssig=e8f630803fed5e70adab2fed07210ce2&time_stamp=1579757209717&mpflag=32&unique_id=1579753634292369');
INSERT INTO `news` VALUES ('2010000008', '2020-01-24 13:43:23', '2020-01-24 13:43:24', '18569745871', '这是热门标签下的第一条数据', '1', null, '');
INSERT INTO `news` VALUES ('2010000009', '2020-01-24 13:46:00', '2020-01-24 13:46:02', '18569745871', '这是热门标签下的第二条数据', '2', null, 'https://vdept.bdstatic.com/4431583233324b69576d435842435564/5231744c6d4b3549/a6b829b5d33b7d685822bb78db6d840a35f01d6e5e30a6e1a8e4545ea2eb9bfa25b43611dfcecb82d7a3516c54ecdb5f7e638a09bc91dfa748898cbf762a4fb6.mp4?auth_key=1579851976-0-0-009109a886f4beb5e10ee633f138284c');

-- ----------------------------
-- Table structure for news_detail
-- ----------------------------
DROP TABLE IF EXISTS `news_detail`;
CREATE TABLE `news_detail` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `news_id` bigint(20) NOT NULL COMMENT 'news id',
  `author_id` int(11) NOT NULL COMMENT 'author id',
  `like_number` int(11) DEFAULT '0',
  `comment_number` int(11) DEFAULT '0',
  `read_number` int(11) DEFAULT '0' COMMENT 'read number',
  `create_time` datetime DEFAULT NULL COMMENT 'create time',
  `update_time` datetime NOT NULL COMMENT 'update time',
  `news_title` varchar(1000) NOT NULL COMMENT 'news title',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='news detail\n';

-- ----------------------------
-- Records of news_detail
-- ----------------------------
INSERT INTO `news_detail` VALUES ('1', '2010000001', '100000001', '0', '0', '0', '2020-01-23 13:15:08', '2020-01-23 05:15:09', '这是我的第一个新闻类');

-- ----------------------------
-- Table structure for news_images
-- ----------------------------
DROP TABLE IF EXISTS `news_images`;
CREATE TABLE `news_images` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `image_id` bigint(20) NOT NULL COMMENT 'image id',
  `news_id` bigint(20) NOT NULL COMMENT 'news id',
  `create_time` datetime NOT NULL COMMENT 'create time',
  `update_time` datetime NOT NULL COMMENT 'update time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COMMENT='news images';

-- ----------------------------
-- Records of news_images
-- ----------------------------
INSERT INTO `news_images` VALUES ('1', '1', '2010000001', '2020-01-22 13:52:01', '2020-01-22 13:52:02');
INSERT INTO `news_images` VALUES ('2', '2', '2010000001', '2020-01-22 13:53:23', '2020-01-22 13:53:24');
INSERT INTO `news_images` VALUES ('3', '3', '2010000001', '2020-01-22 13:53:30', '2020-01-22 13:53:31');
INSERT INTO `news_images` VALUES ('4', '4', '2010000004', '2020-01-22 13:54:15', '2020-01-22 13:54:16');
INSERT INTO `news_images` VALUES ('5', '5', '2010000004', '2020-01-22 13:57:29', '2020-01-22 13:57:37');
INSERT INTO `news_images` VALUES ('6', '6', '2010000004', '2020-01-22 13:57:36', '2020-01-22 13:57:38');
INSERT INTO `news_images` VALUES ('7', '7', '2010000004', '2020-01-22 13:57:35', '2020-01-22 13:57:39');
INSERT INTO `news_images` VALUES ('8', '8', '2010000004', '2020-01-22 13:58:09', '2020-01-22 13:58:13');
INSERT INTO `news_images` VALUES ('9', '9', '2010000004', '2020-01-22 13:58:10', '2020-01-22 13:58:13');
INSERT INTO `news_images` VALUES ('10', '10', '2010000004', '2020-01-22 13:58:11', '2020-01-22 13:58:14');
INSERT INTO `news_images` VALUES ('11', '11', '2010000004', '2020-01-22 13:58:11', '2020-01-22 13:58:14');
INSERT INTO `news_images` VALUES ('12', '12', '2010000004', '2020-01-22 13:58:12', '2020-01-22 13:58:16');
INSERT INTO `news_images` VALUES ('13', '13', '2010000006', '2020-01-24 13:15:11', '2020-01-24 13:15:12');
INSERT INTO `news_images` VALUES ('14', '14', '2010000007', '2020-01-24 13:41:25', '2020-01-24 13:41:33');
INSERT INTO `news_images` VALUES ('15', '15', '2010000008', '2020-01-24 13:45:24', '2020-01-24 13:45:25');

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag` (
  `tag_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'tag id\n',
  `create_time` datetime NOT NULL COMMENT 'create time',
  `update_time` datetime NOT NULL COMMENT 'update time',
  `tag_name` varchar(20) NOT NULL COMMENT 'tag name',
  PRIMARY KEY (`tag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=100000010 DEFAULT CHARSET=utf8 COMMENT='tag table';

-- ----------------------------
-- Records of tag
-- ----------------------------
INSERT INTO `tag` VALUES ('100000001', '2020-01-20 14:46:55', '2020-01-20 14:46:57', '最新');
INSERT INTO `tag` VALUES ('100000002', '2020-01-20 14:47:02', '2020-01-20 14:47:04', '最热');
INSERT INTO `tag` VALUES ('100000003', '2020-01-20 14:51:27', '2020-01-20 14:51:29', '附近');
INSERT INTO `tag` VALUES ('100000004', '2020-01-21 13:24:55', '2020-01-21 13:24:55', '游戏');
INSERT INTO `tag` VALUES ('100000005', '2020-01-21 13:25:15', '2020-01-21 13:25:15', '科技');
INSERT INTO `tag` VALUES ('100000006', '2020-01-21 13:25:15', '2020-01-21 13:25:15', '数码');
INSERT INTO `tag` VALUES ('100000007', '2020-01-24 13:11:20', '2020-01-24 13:11:21', '教育');
INSERT INTO `tag` VALUES ('100000008', '2020-01-24 13:11:22', '2020-01-24 13:11:23', '男性');
INSERT INTO `tag` VALUES ('100000009', '2020-01-24 13:11:23', '2020-01-24 13:11:24', '女性');

-- ----------------------------
-- Table structure for tag_news
-- ----------------------------
DROP TABLE IF EXISTS `tag_news`;
CREATE TABLE `tag_news` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `tag_id` bigint(20) NOT NULL COMMENT 'tag id\n',
  `news_id` bigint(20) NOT NULL COMMENT 'news id',
  `create_time` datetime NOT NULL COMMENT 'create time',
  `update_time` datetime NOT NULL COMMENT 'update time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='tag news list';

-- ----------------------------
-- Records of tag_news
-- ----------------------------
INSERT INTO `tag_news` VALUES ('1', '100000001', '2010000001', '2020-01-22 12:52:36', '2020-01-22 12:52:37');
INSERT INTO `tag_news` VALUES ('2', '100000001', '100000001', '2020-01-22 12:52:52', '2020-01-22 12:52:53');
INSERT INTO `tag_news` VALUES ('3', '100000001', '2010000004', '2020-01-22 12:53:06', '2020-01-22 12:53:08');
INSERT INTO `tag_news` VALUES ('4', '100000007', '2010000006', '2020-01-24 13:13:26', '2020-01-24 13:13:28');
INSERT INTO `tag_news` VALUES ('5', '100000007', '2010000007', '2020-01-24 13:13:28', '2020-01-24 13:13:29');
INSERT INTO `tag_news` VALUES ('6', '100000002', '2010000008', '2020-01-24 13:43:10', '2020-01-24 13:43:11');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'user id\nphone number',
  `user_name` varchar(10) NOT NULL COMMENT 'user name',
  `collect_id` bigint(20) DEFAULT NULL COMMENT 'collect id',
  `create_time` datetime NOT NULL COMMENT 'create time',
  `update_time` datetime NOT NULL COMMENT 'update time',
  `user_icon` varchar(1000) DEFAULT NULL COMMENT 'user icon',
  `open_id` varchar(100) NOT NULL COMMENT 'user open id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17854796555 DEFAULT CHARSET=utf8 COMMENT='user table';

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('13452007451', '小周', null, '2020-01-22 15:37:38', '2020-01-22 15:37:40', 'http://img0.imgtn.bdimg.com/it/u=2438351535,1173105093&fm=26&gp=0.jpg', '');
INSERT INTO `user` VALUES ('14756868957', '大周', null, '2020-01-24 13:52:30', '2020-01-24 13:52:31', 'http://img0.imgtn.bdimg.com/it/u=1339525308,2468653122&fm=11&gp=0.jpg', '');
INSERT INTO `user` VALUES ('14785663254', '大周', null, '2020-01-24 13:51:52', '2020-01-24 13:51:54', 'http://img0.imgtn.bdimg.com/it/u=1339525308,2468653122&fm=11&gp=0.jpg', '');
INSERT INTO `user` VALUES ('17815688567', '啦啦', null, '2020-01-23 17:03:47', '2020-01-23 17:03:50', 'http://img4.imgtn.bdimg.com/it/u=1110944221,1640395197&fm=26&gp=0.jpg', '');
INSERT INTO `user` VALUES ('17854796547', '吔吔', null, '2020-01-23 17:14:52', '2020-01-23 17:14:53', 'http://img0.imgtn.bdimg.com/it/u=3768122749,97285043&fm=26&gp=0.jpg', '');
INSERT INTO `user` VALUES ('17854796548', '就是我啦', null, '2020-01-24 15:56:38', '2020-01-24 15:56:38', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1678948314,1083480950&fm=26&gp=0.jpg', 'openidsajkfas6465456');
INSERT INTO `user` VALUES ('17854796550', 'sfsf', null, '2020-01-24 16:30:54', '2020-01-24 16:30:54', 'asfsaf', 'safasfas');
INSERT INTO `user` VALUES ('17854796552', '、沙发上开发', null, '2020-01-24 16:47:06', '2020-01-24 16:47:06', 'sas按时发顺丰fasf', 'oS1Fa5PbkxbRdOFhvH78开机即可');
INSERT INTO `user` VALUES ('17854796554', '常在河边走哪有不湿鞋', null, '2020-01-24 17:15:52', '2020-01-24 17:15:52', 'https://wx.qlogo.cn/mmopen/vi_32/qdiccZ34fF3LuQxJAB7RlnzDEQLTKrsia1qL0082TDbovTWzJMPqic9whf6B122Vc557svloNaZC0Y8wuIc6cqZZA/132', 'oS1Fa5PbkxbRdOFhvHt0_oCX5CD0');
