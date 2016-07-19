SET SESSION FOREIGN_KEY_CHECKS=0;

/* Drop Indexes */

DROP INDEX gen_scheme_del_flag ON gen_scheme;
DROP INDEX gen_table_name ON gen_table;
DROP INDEX gen_table_del_flag ON gen_table;
DROP INDEX gen_table_column_table_id ON gen_table_column;
DROP INDEX gen_table_column_name ON gen_table_column;
DROP INDEX gen_table_column_sort ON gen_table_column;
DROP INDEX gen_table_column_del_flag ON gen_table_column;
DROP INDEX gen_template_del_falg ON gen_template;



/* Drop Tables */

DROP TABLE IF EXISTS gen_scheme;
DROP TABLE IF EXISTS gen_table_column;
DROP TABLE IF EXISTS gen_table;
DROP TABLE IF EXISTS gen_template;




/* Create Tables */

-- 生成方案 : 生成方案
CREATE TABLE gen_scheme
(
	-- 编号
	id varchar(64) NOT NULL COMMENT '编号 : 编号',
	-- 名称
	name varchar(200) COMMENT '名称 : 名称',
	-- 分类
	category varchar(2000) COMMENT '分类 : 分类',
	-- 生成包路径
	package_name varchar(500) COMMENT '生成包路径 : 生成包路径',
	-- 生成模块名
	module_name varchar(30) COMMENT '生成模块名 : 生成模块名',
	-- 生成子模块名
	sub_module_name varchar(30) COMMENT '生成子模块名 : 生成子模块名',
	-- 生成功能名
	function_name varchar(500) COMMENT '生成功能名 : 生成功能名',
	-- 生成功能名（简写）
	function_name_simple varchar(100) COMMENT '生成功能名（简写） : 生成功能名（简写）',
	-- 生成功能作者
	function_author varchar(100) COMMENT '生成功能作者 : 生成功能作者',
	-- 生成表编号
	gen_table_id varchar(200) COMMENT '生成表编号 : 生成表编号',
	PRIMARY KEY (id)
) COMMENT = '生成方案 : 生成方案';


-- 业务表 : 业务表
CREATE TABLE gen_table
(
	-- 编号
	id varchar(64) NOT NULL COMMENT '编号 : 编号',
	-- 名称
	name varchar(200) COMMENT '名称 : 名称',
	-- 描述
	comments varchar(500) COMMENT '描述 : 描述',
	-- 实体类名称
	class_name varchar(100) COMMENT '实体类名称 : 实体类名称',
	-- 关联父表
	parent_table varchar(200) COMMENT '关联父表 : 关联父表',
	-- 关联父表外键
	parent_table_fk varchar(100) COMMENT '关联父表外键 : 关联父表外键',
	PRIMARY KEY (id)
) COMMENT = '业务表 : 业务表';


-- 业务表字段 : 业务表字段
CREATE TABLE gen_table_column
(
	-- 编号
	id varchar(64) NOT NULL COMMENT '编号 : 编号',
	-- 归属表编号
	gen_table_id varchar(64) COMMENT '归属表编号 : 归属表编号',
	-- 名称
	name varchar(200) COMMENT '名称 : 名称',
	-- 描述
	comments varchar(500) COMMENT '描述 : 描述',
	-- 列的数据类型的字节长度
	jdbc_type varchar(100) COMMENT 'JDBC类型 : 列的数据类型的字节长度',
	-- JAVA类型
	java_type varchar(500) COMMENT 'JAVA类型 : JAVA类型',
	-- JAVA字段名
	java_field varchar(200) COMMENT 'JAVA字段名 : JAVA字段名',
	-- 是否主键
	is_pk char(1) COMMENT '是否主键 : 是否主键',
	-- 是否可为空
	is_null char(1) COMMENT '是否可为空 : 是否可为空',
	-- 是否为插入字段
	is_insert char(1) COMMENT '是否为插入字段 : 是否为插入字段',
	-- 是否编辑字段
	is_edit char(1) COMMENT '是否编辑字段 : 是否编辑字段',
	-- 是否列表字段
	is_list char(1) COMMENT '是否列表字段 : 是否列表字段',
	-- 是否查询字段
	is_query char(1) COMMENT '是否查询字段 : 是否查询字段',
	-- 查询方式（等于、不等于、大于、小于、范围、左LIKE、右LIKE、左右LIKE）
	query_type varchar(200) COMMENT '查询方式 : 查询方式（等于、不等于、大于、小于、范围、左LIKE、右LIKE、左右LIKE）',
	-- 字段生成方案（文本框、文本域、下拉框、复选框、单选框、字典选择、人员选择、部门选择、区域选择）
	show_type varchar(200) COMMENT '显示类型 : 字段生成方案（文本框、文本域、下拉框、复选框、单选框、字典选择、人员选择、部门选择、区域选择）',
	-- 字典类型
	dict_type varchar(200) COMMENT '字典类型 : 字典类型',
	-- 其它设置（扩展字段JSON）
	settings varchar(2000) COMMENT '其它设置 : 其它设置（扩展字段JSON）',
	-- 排序（升序）
	sort decimal COMMENT '排序（升序） : 排序（升序）',
	PRIMARY KEY (id)
) COMMENT = '业务表字段 : 业务表字段';


-- 代码模板表 : 代码模板表
CREATE TABLE gen_template
(
	-- 编号
	id varchar(64) NOT NULL COMMENT '编号 : 编号',
	-- 名称
	name varchar(200) COMMENT '名称 : 名称',
	-- 分类
	category varchar(2000) COMMENT '分类 : 分类',
	-- 生成文件路径
	file_path varchar(500) COMMENT '生成文件路径 : 生成文件路径',
	-- 生成文件名
	file_name varchar(200) COMMENT '生成文件名 : 生成文件名',
	-- 内容
	content text COMMENT '内容 : 内容',
	PRIMARY KEY (id)
) COMMENT = '代码模板表 : 代码模板表';



/* Create Foreign Keys */

ALTER TABLE gen_table_column
	ADD FOREIGN KEY (gen_table_id)
	REFERENCES gen_table (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;



/* Create Indexes */

CREATE INDEX gen_scheme_del_flag ON gen_scheme ();
CREATE INDEX gen_table_name ON gen_table (name ASC);
CREATE INDEX gen_table_del_flag ON gen_table ();
CREATE INDEX gen_table_column_table_id ON gen_table_column (gen_table_id ASC);
CREATE INDEX gen_table_column_name ON gen_table_column (name ASC);
CREATE INDEX gen_table_column_sort ON gen_table_column (sort ASC);
CREATE INDEX gen_table_column_del_flag ON gen_table_column ();
CREATE INDEX gen_template_del_falg ON gen_template ();



