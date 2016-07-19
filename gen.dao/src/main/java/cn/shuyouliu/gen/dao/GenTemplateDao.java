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

import cn.shuyouliu.gen.entity.GenTemplate;

/**
 * 代码模板DAO接口
 * @author ThinkGem
 * @version 2013-10-15
 */
public interface GenTemplateDao {
	@Select("SELECT * FROM gen_template WHERE id = #{id}")
	@Results({
		@Result(id=true,property="id",column="id"),
		@Result(property="name",column="name"),
		@Result(property="category",column="category"),
		@Result(property="filePath",column="file_path"),
		@Result(property="fileName",column="file_name"),
		@Result(property="content",column="content")
	})
	public GenTemplate getById(@Param("id") int id);
	
	@Select("SELECT * FROM gen_template WHERE name = #{name}")
	@Results({
		@Result(id=true,property="id",column="id"),
		@Result(property="name",column="name"),
		@Result(property="category",column="category"),
		@Result(property="filePath",column="file_path"),
		@Result(property="fileName",column="file_name"),
		@Result(property="content",column="content")
	})
	public GenTemplate getByName(@Param("name") String name);
	
	@Select("SELECT * FROM gen_template order by id")
	@Results({
		@Result(id=true,property="id",column="id"),
		@Result(property="name",column="name"),
		@Result(property="category",column="category"),
		@Result(property="filePath",column="file_path"),
		@Result(property="fileName",column="file_name"),
		@Result(property="content",column="content")
	})
	public List<GenTemplate> getList();
	public List<GenTemplate> getList(PageBounds pageBounds);
	
	@Select("SELECT * FROM gen_template WHERE category = #{category} order by id")
	@Results({
		@Result(id=true,property="id",column="id"),
		@Result(property="name",column="name"),
		@Result(property="category",column="category"),
		@Result(property="filePath",column="file_path"),
		@Result(property="fileName",column="file_name"),
		@Result(property="content",column="content")
	})
	public List<GenTemplate> getListByCategory(String category);
	public List<GenTemplate> getListByCategory(String category ,PageBounds pageBounds);
	
	
	@Insert("INSERT INTO gen_template( "+
	"	id, name,comments,class_name,parent_table,parent_table_fk "+
	" ) VALUES ( "+
	"	#{id}, 	#{name},#{comments},#{className},#{parentTable},#{parentTableFk} "+
	" )")
	@SelectKey(statement="SELECT @@IDENTITY", keyProperty="id", before=false, resultType=int.class)
	public void insert(GenTemplate genTemplate);
	
	@Update("UPDATE gen_template SET " +
			"name = #{name},  " +
			"comments = #{comments}, " +
			"class_name = #{className}, " +
			"parent_table = #{parentTable}, " +
			"parent_table_fk = #{parentTableFk} +" +
			"WHERE id=#{id}")
	public void update(GenTemplate genTemplate);
	
	@Delete("DELETE FROM gen_template WHERE id = #{id}")
	public void deleteById(@Param("id") int id);
}
