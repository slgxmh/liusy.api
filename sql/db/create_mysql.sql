SET SESSION FOREIGN_KEY_CHECKS=0;

/* Drop Tables */

DROP TABLE IF EXISTS rd_user;




/* Create Tables */

CREATE TABLE rd_user
(
	-- 唯一标识
	id bigint NOT NULL AUTO_INCREMENT COMMENT '唯一标识',
	username varchar(50) NOT NULL,
	password varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	phone varchar(50),
	PRIMARY KEY (id)
);



