## Tutorial

https://arjunphp.com/creating-restful-api-express-js-node-js-mysql/

# MySQL Setup

**mysql-ctl cli** to open mysql cli

**SHOW DATABASES;** to see the databases

**CREATE DATABASE database_name;** to ceate a database

**USE database_name;** select the database

**SHOW TABLES**

**SELECT * FROM table_name**

**ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password** If you get an error not supported auth 

**SET PASSWORD FOR 'root'@'localhost' = 'Password'
-- 
-- Table structure for `tasks`
-- 
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(11) NOT NULL,
  `task` varchar(200) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
 
ALTER TABLE `tasks` ADD PRIMARY KEY (`id`);
ALTER TABLE `tasks` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;


INSERT INTO `tasks` (`id`, `task`, `status`, `created_at`) VALUES
(1, 'Find bugs', 1, '2016-04-10 23:50:40'),
(2, 'Review code', 1, '2016-04-10 23:50:40'),
(3, 'Fix bugs', 1, '2016-04-10 23:50:40'),
(4, 'Refactor Code', 1, '2016-04-10 23:50:40'),
(5, 'Push to prod', 1, '2016-04-10 23:50:50');