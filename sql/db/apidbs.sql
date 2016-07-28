SET SESSION FOREIGN_KEY_CHECKS=0;

/* Drop Tables */

DROP TABLE IF EXISTS apimessage;
DROP TABLE IF EXISTS apiparams;
DROP TABLE IF EXISTS apiresult;




/* Create Tables */

-- apimessage
CREATE TABLE apimessage
(
	-- 唯一
	code char(32) NOT NULL COMMENT '编码 : 唯一',
	name varchar(100) COMMENT '接口名称',
	url varchar(255) NOT NULL COMMENT '接口地址',
	method char(10) COMMENT '调用方式',
	-- 分号分隔
	tag varchar(255) COMMENT '标签 : 分号分隔',
	apiscript varbinary(1000) COMMENT '执行脚本',
	PRIMARY KEY (code),
	UNIQUE (url)
) COMMENT = 'apimessage';


-- 参数表
CREATE TABLE apiparams
(
	code bigint NOT NULL AUTO_INCREMENT COMMENT '编码',
	apicode char(32) NOT NULL COMMENT '接口code',
	name varchar(30) NOT NULL COMMENT '名称',
	typename varchar(32) NOT NULL COMMENT '类型名字',
	must varchar(4) NOT NULL COMMENT 'must',
	remark varchar(100) COMMENT '说明',
	parentcode bigint COMMENT '父类编码',
	paraminout char(4) NOT NULL COMMENT '入出类型',
	PRIMARY KEY (code)
) COMMENT = '参数表';


-- apiresult
CREATE TABLE apiresult
(
	code bigint NOT NULL AUTO_INCREMENT COMMENT '编码',
	apicode char(32) COMMENT '接口编码',
	apitemplet varchar(800) COMMENT '模板',
	name varchar(32) NOT NULL COMMENT '模板名字',
	PRIMARY KEY (code),
	UNIQUE (name)
) COMMENT = 'apiresult';



