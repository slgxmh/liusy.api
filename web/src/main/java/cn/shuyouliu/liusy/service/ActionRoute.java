/**
 * 
 */
package cn.shuyouliu.liusy.service;

import org.springframework.stereotype.Component;

import cn.shuyouliu.liusy.service.impl.TestPathAction;

/**
 * @author zywx
 *
 */
@Component
public class ActionRoute  {

	public PathAction pathAction(String[] paths) {
		if (paths.length >=2){
			if ("people".equals( paths[0])){
				if ("list".equals(paths[1])){
					return new TestPathAction();
				}
			}else{
				if ("message".equals( paths[0])){
					if ("list".equals(paths[1])){
						return new TestPathAction();
					}
				}
			}
		}
		String title = "title:";
		final String[] _paths = paths;
		for (int i = 0; i < _paths.length; i++) {
			title += " "+i+":"+_paths[i];
		}
		final String _title = title;
		return new PathAction() {
			@Override
			public Object execute(String method) {
				return new String[]{"xx","yy","界别 level "+_paths.length+method + _title};
			}
		};
		
	}

	

}
