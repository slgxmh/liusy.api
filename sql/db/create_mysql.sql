DROP TABLE rd_user;

/* Create Tables */

CREATE TABLE rd_user
(
	-- 唯一标识
	id bigint NOT NULL,
	username varchar(50) NOT NULL,
	password varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	phone varchar(50),
	PRIMARY KEY (id)
);



