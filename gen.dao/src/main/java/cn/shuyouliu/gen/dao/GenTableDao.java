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
import cn.shuyouliu.gen.entity.GenTable;

/**
 * 业务表DAO接口
 * @author ThinkGem
 * @version 2013-10-15
 */
public interface GenTableDao
{
		@Select("SELECT * FROM gen_table WHERE id = #{id}")
		@Results({
			@Result(id=true,property="id",column="id"),
			@Result(property="className",column="class_name"),
			@Result(property="parentTable",column="parent_table"),
			@Result(property="parentTableFk",column="parent_table_fk")
		})
		public GenTable getById(@Param("id") int id);
		
		@Select("SELECT * FROM gen_table WHERE name = #{name}")
		@Results({
			@Result(id=true,property="id",column="id"),
			@Result(property="className",column="class_name"),
			@Result(property="parentTable",column="parent_table"),
			@Result(property="parentTableFk",column="parent_table_fk")
		})
		public GenTable getByName(@Param("name") String name);
		
		@Select("SELECT * FROM gen_table order by id")
		@Results({
			@Result(id=true,property="id",column="id"),
			@Result(property="className",column="class_name"),
			@Result(property="parentTable",column="parent_table"),
			@Result(property="parentTableFk",column="parent_table_fk")
		})
		public List<GenTable> getList();
		public List<GenTable> getList(PageBounds pageBounds);
		
		
		@Insert("INSERT INTO gen_table( "+
		"	id, name,comments,class_name,parent_table,parent_table_fk "+
		" ) VALUES ( "+
		"	#{id}, 	#{name},#{comments},#{className},#{parentTable},#{parentTableFk} "+
		" )")
		@SelectKey(statement="SELECT @@IDENTITY", keyProperty="id", before=false, resultType=int.class)
		public void insert(GenTable genTable);
		
		@Update("UPDATE gen_table SET " +
				"name = #{name},  " +
				"comments = #{comments}, " +
				"class_name = #{className}, " +
				"parent_table = #{parentTable}, " +
				"parent_table_fk = #{parentTableFk} +" +
				"WHERE id=#{id}")
		public void update(GenTable genTable);
		
		@Delete("DELETE FROM gen_table WHERE id = #{id}")
		public void deleteById(@Param("id") int id);
}
