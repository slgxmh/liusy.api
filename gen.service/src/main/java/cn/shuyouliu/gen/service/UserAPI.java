package cn.shuyouliu.gen.service;

import java.util.List;
import java.util.Map;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import cn.shuyouliu.gen.dao.GenSchemeDao;
import cn.shuyouliu.gen.dao.GenTableColumnDao;
import cn.shuyouliu.gen.dao.GenTableDao;
import cn.shuyouliu.gen.dao.GenTemplateDao;
import cn.shuyouliu.gen.entity.GenConfig;
import cn.shuyouliu.gen.entity.GenScheme;
import cn.shuyouliu.gen.entity.GenTable;
import cn.shuyouliu.gen.entity.GenTemplate;

@Path("/user")
public class UserAPI {
	
	protected Logger logger = LoggerFactory.getLogger(getClass());
	
	@Autowired
	private GenSchemeDao genSchemeDao;
	@Autowired
	private GenTableDao genTableDao;
	@Autowired
	private GenTableColumnDao genTableColumnDao;
	@Autowired
	private GenTemplateDao genTemplateDao;
	
	public GenScheme get(int id) {
		return genSchemeDao.getById(id);
	}
	 
	private String generateCode(GenScheme genScheme){
		StringBuilder result = new StringBuilder();
		// 查询主表及字段列
		logger.debug("----------------"+genScheme.toString()+"  "+genScheme.getGenTableId());
		
		GenTable genTable = genTableDao.getById(genScheme.getGenTableId());
		logger.debug("genTable :"+genTable.getName());
		genTable.setColumnList(genTableColumnDao.getListByTable(genTable.getId()));
		logger.debug("ColumnList :"+genTable.getColumnList().size() );
		// 获取所有代码模板
		GenConfig config = GenUtils.getConfig();
		
		// 获取模板列表
		List<GenTemplate> templateList = 
				//genTemplateDao.getListByCategory(genScheme.getCategory());
				//genScheme.getCategory()
				GenUtils.getTemplateList(config, "curd", false);
		List<GenTemplate> childTableTemplateList = GenUtils.getTemplateList(config, genScheme.getCategory(), true);
		
		// 如果有子表模板，则需要获取子表列表
		if (childTableTemplateList.size() > 0){
			GenTable parentTable = new GenTable();
			parentTable.setParentTable(genTable.getName());
			genTable.setChildList(genTableDao.getList());
		}
		
		// 生成子表模板代码
		for (GenTable childTable : genTable.getChildList()){
			childTable.setParent(genTable);
			//liusy childTable.setColumnList(genTableColumnDao.findList(new GenTableColumn(new GenTable(childTable.getId()))));
			//liusy genScheme.setGenTable(childTable);
			Map<String, Object> childTableModel = GenUtils.getDataModel(genScheme,genTable);
			for (GenTemplate tpl : childTableTemplateList){
				result.append(GenUtils.generateToFile(tpl, childTableModel, genScheme.getReplaceFile()));
			}
		}
		
		// 生成主表模板代码
		//liusy genScheme.setGenTable(genTable);
		Map<String, Object> model = GenUtils.getDataModel(genScheme,genTable);
		for (GenTemplate tpl : templateList){
			result.append(GenUtils.generateToFile(tpl, model, genScheme.getReplaceFile()));
		}
		return result.toString();
	}
	
	@GET
	@Path("/{name}")
	@Produces(MediaType.APPLICATION_JSON)
	public String test(@PathParam("name") String name) {
		logger.debug("start create code!");
		GenScheme s= genSchemeDao.getById(Integer.valueOf(name));
		logger.debug(s.getName() + " name ");
		/*s.setCategory("Category");
		s.setFunctionAuthor("author");
		s.setFunctionName("funcname");*/
		return  generateCode(s);
	}
	
}
