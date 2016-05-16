/**
 * 
 */
package cn.shuyouliu.liusy.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.shuyouliu.liusy.service.PathAction;

/**
 * @author zywx
 *
 */
public class TestPathAction implements PathAction{
	@Override
	public Object execute(String method) {
		Map <String,Object>map = new HashMap<String,Object>();
		List <Map> list = new ArrayList<Map>();
		for (int i = 0 ; i < 10 ; i ++){
			Map <String,String>map2 = new HashMap<String,String>();
			map2.put("id","-id"+i );
			map2.put("name","-name"+i );
			map2.put("value","-value"+i );
			map2.put("type","-type"+i );
			map2.put("info","-info"+i );
			list.add(map2);
		}
		map.put("status", "0");
		map.put("data", list);
		return map;
	}

}
