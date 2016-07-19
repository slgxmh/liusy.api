/**
 * Copyright &copy; 2012-2014 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package cn.shuyouliu.gen.dao;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectKey;
import org.apache.ibatis.annotations.Update;

import com.github.miemiedev.mybatis.paginator.domain.PageBounds;

import cn.shuyouliu.gen.entity.GenTableColumn;

/**
 * 业务表字段DAO接口
 * @author ThinkGem
 * @version 2013-10-15
 */
public interface GenTableColumnDao{
	@Select("SELECT * FROM gen_table_column WHERE id = #{id}")
	@Results({
		@Result(id=true,property="id",column="id"),
		@Result(property="jdbcType",column="jdbc_type"),
		@Result(property="javaType",column="java_type"),
		@Result(property="javaField",column="java_field"),
		@Result(property="isInsert",column="is_insert"),
		@Result(property="isEdit",column="is_edit"),
		@Result(property="isList",column="is_list"),
		@Result(property="isQuery",column="is_query"),
		@Result(property="queryType",column="query_type"),
		@Result(property="showType",column="show_type"),
		@Result(property="dictType",column="dict_type")
	})
	public GenTableColumn getById(@Param("id") int id);
	
	@Select("SELECT * FROM gen_table_column WHERE name = #{name}")
	public GenTableColumn getByName(@Param("name") String name);
	
	@Select("SELECT * FROM gen_table_column order by id")
	public List<GenTableColumn> getList();
	public List<GenTableColumn> getList(PageBounds pageBounds);
	
	@Select("SELECT * FROM gen_table_column WHERE gen_table_id = #{genTableId} order by id")
	@Results({
		@Result(id=true,property="id",column="id"),
		@Result(property="jdbcType",column="jdbc_type"),
		@Result(property="javaType",column="java_type"),
		@Result(property="javaField",column="java_field"),
		@Result(property="isInsert",column="is_insert"),
		@Result(property="isEdit",column="is_edit"),
		@Result(property="isList",column="is_list"),
		@Result(property="isQuery",column="is_query"),
		@Result(property="queryType",column="query_type"),
		@Result(property="showType",column="show_type"),
		@Result(property="dictType",column="dict_type")
	})

	public List<GenTableColumn> getListByTable(int genTableId);
	public List<GenTableColumn> getListByTable(int genTableId ,PageBounds pageBounds);
	
	@Insert("INSERT INTO gen_table_column( "+
		"	id, gen_table_id,name,	comments,jdbc_type, "+ 
		"	java_type, java_field,is_pk,is_null,  "+
		"	is_insert, is_edit,	is_list,is_query,query_type, "+ 
		"	show_type, 	dict_type,	sort "+
		" ) VALUES ( "+
		"	#{id}, 	#{genTable.id},	#{name},#{comments},#{jdbcType}, "+ 
		"	#{javaType}, #{javaField},#{isPk},#{isNull},#{isInsert},  "+
		"	#{isEdit}, #{isList},#{isQuery},#{queryType},#{showType},  "+
		"	#{dictType}, #{sort} "+
		" )")
	@SelectKey(statement="SELECT @@IDENTITY", keyProperty="id", before=false, resultType=int.class)
	public void insert(GenTableColumn GenTableColumn);
	
	@Update("UPDATE gen_table_column SET " +
		"	comments = #{comments}, " +
		"	jdbc_type = #{jdbcType}, " +
		"	java_type = #{javaType}, " +
		"	java_field = #{javaField}, " +
		"	is_pk = #{isPk}, " +
		"	is_null = #{isNull}," + 
		"	is_insert = #{isInsert}," + 
		"	is_edit = #{isEdit}, " +
		"	is_list = #{isList}, " +
		"	is_query = #{isQuery}, " +
		"	query_type = #{queryType}," + 
		"	show_type = #{showType}, " +
		"	dict_type = #{dictType}, " +
		"	sort = #{sort}, " +
		" WHERE id = #{id}")
	public void update(GenTableColumn GenTableColumn);
	
	@Delete("DELETE FROM gen_table_column WHERE id = #{id}")
	public void deleteById(@Param("id") int id);
}
