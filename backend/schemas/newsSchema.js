const newsSchema = `
    CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_news` varchar(100) NOT NULL,
  `title` varchar(10000) DEFAULT NULL,
  `author` varchar(1000) DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `date` varchar(500) DEFAULT NULL,
  `user` varchar(1000) DEFAULT NULL,
  `id_area` varchar(45) DEFAULT NULL,
  `likes` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  `featured` tinyint(4) DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `path` varchar(45) DEFAULT NULL,
  `neighborhood` varchar(45) DEFAULT NULL,
  `area` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`,`id_news`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) 
`;

module.exports = newsSchema;
