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

import cn.shuyouliu.gen.entity.GenScheme;
import cn.shuyouliu.gen.entity.User;

/**
 * 生成方案DAO接口
 * @author ThinkGem
 * @version 2013-10-15
 */
public interface GenSchemeDao  {
		@Select("SELECT * FROM gen_scheme WHERE id = #{id}")
		@Results({
			@Result(id=true,property="id",column="id"),
			@Result(property="genTableId",column="gen_table_id"),
			@Result(property="packageName",column="package_name"),
			@Result(property="moduleName",column="module_name"),
			@Result(property="subModuleName",column="sub_module_name"),
			@Result(property="functionName",column="function_name"),
			@Result(property="functionNameSimple",column="function_name_simple"),
			@Result(property="functionAuthor",column="function_author")
			
		})
		public GenScheme getById(@Param("id") int id);
		
		@Select("SELECT * FROM gen_scheme WHERE name = #{name}")
		public GenScheme getByName(@Param("name") String name);
		
		@Select("SELECT * FROM gen_scheme order by id")
		public List<GenScheme> getList();
		public List<GenScheme> getList(PageBounds pageBounds);
		
		
		@Insert("INSERT INTO gen_scheme(id, name,category,package_name,	module_name,sub_module_name,function_name, "+
				"function_name_simple, function_author,gen_table_id) " +
				"VALUES(#{id}, #{name},	#{category},#{packageName},#{moduleName}, "+ 
				"#{subModuleName},  #{functionName},#{functionNameSimple},#{functionAuthor},"+
				"#{genTable.id})")
		@SelectKey(statement="SELECT @@IDENTITY", keyProperty="id", before=false, resultType=int.class)
		public void insert(GenScheme genScheme);
		
		@Update("UPDATE gen_scheme SET " +
				"name = #{name},  " +
				"category = #{category},   " +
				"package_name = #{packageName},   " +
				"module_name = #{moduleName},   " +
				"sub_module_name = #{subModuleName},   " +
				"function_name = #{functionName},   " +
				"function_name_simple = #{functionNameSimple},   " +
				"function_author = #{functionAuthor},   " +
				"gen_table_id = #{genTable.id} " +
				"WHERE id=#{id}")
		public void update(GenScheme genScheme);
		
		@Delete("DELETE FROM gen_scheme WHERE id = #{id}")
		public void deleteById(@Param("id") int id);
		
}
