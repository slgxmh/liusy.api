package cn.shuyouliu.liusy.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/")
public class AllApi {
	
	/**
	 * 管理入口， 备用
	 * @param x index 。。等。
	 * @return
	 */
	@GET
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_ATOM_XML })
	@Path("admin/{x}")
	public Response getAdmin(@PathParam("x") String x) {
		return Response.status(200).entity("admin x= "+x).build();
	}
	
	
	@GET
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_ATOM_XML} )
	@Path("{x1}")
	public Response getResX1(	@PathParam("x1") String x1) {
		return MyGetResGet(new String[]{x1});
	}
	


	@GET
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_ATOM_XML })
	@Path("{x1}/{x2}")
	public Response getResX2(	@PathParam("x1") String x1
								,@PathParam("x2") String x2) {
		return MyGetResGet(new String[]{x1,x2});
	}

	@GET
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_ATOM_XML })
	@Path("{x1}/{x2}/{x3}")
	public Response getResX3(	@PathParam("x1") String x1
								,@PathParam("x2") String x2
								,@PathParam("x3") String x3) {
		return MyGetResGet(new String[]{x1,x2,x3});
	}
	@GET
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_ATOM_XML })
	@Path("{x1}/{x2}/{x3}/{x4}")
	public Response getResX4(	@PathParam("x1") String x1
								,@PathParam("x2") String x2
								,@PathParam("x3") String x3
								,@PathParam("x4") String x4) {
		return MyGetResGet(new String[]{x1,x2,x3,x4});
	}
	@GET
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_ATOM_XML })
	@Path("{x1}/{x2}/{x3}/{x4}/{x5}")
	public Response getResX5(	@PathParam("x1") String x1
								,@PathParam("x2") String x2
								,@PathParam("x3") String x3
								,@PathParam("x4") String x4
								,@PathParam("x5") String x5) {
		return MyGetResGet(new String[]{x1,x2,x3,x4,x5});
	}
	@GET
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_ATOM_XML })
	@Path("{x1}/{x2}/{x3}/{x4}/{x5}/{x6}")
	public Response getResX6(	@PathParam("x1") String x1
								,@PathParam("x2") String x2
								,@PathParam("x3") String x3
								,@PathParam("x4") String x4
								,@PathParam("x5") String x5
								,@PathParam("x6") String x6) {
		return MyGetResGet(new String[]{x1,x2,x3,x4,x5,x6});
	}
	@GET
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_ATOM_XML })
	@Path("{x1}/{x2}/{x3}/{x4}/{x5}/{x6}/{x7}")
	public Response getResX7(	@PathParam("x1") String x1
								,@PathParam("x2") String x2
								,@PathParam("x3") String x3
								,@PathParam("x4") String x4
								,@PathParam("x5") String x5
								,@PathParam("x6") String x6
								,@PathParam("x7") String x7) {
		return MyGetResGet(new String[]{x1,x2,x3,x4,x5,x6,x7});
	}
	
	
	
	@POST
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_ATOM_XML })
	@Path("{x1}")
	public Response getResX1POST(	@PathParam("x1") String x1) {
		return MyGetResPOST(new String[]{x1});
	}
	


	


	@POST
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_ATOM_XML })
	@Path("{x1}/{x2}")
	public Response getResX2POST(	@PathParam("x1") String x1
								,@PathParam("x2") String x2) {
		return MyGetResPOST(new String[]{x1,x2});
	}

	@POST
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_ATOM_XML })
	@Path("{x1}/{x2}/{x3}")
	public Response getResX3POST(	@PathParam("x1") String x1
								,@PathParam("x2") String x2
								,@PathParam("x3") String x3) {
		return MyGetResPOST(new String[]{x1,x2,x3});
	}
	@POST
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_ATOM_XML })
	@Path("{x1}/{x2}/{x3}/{x4}")
	public Response getResX4POST(	@PathParam("x1") String x1
								,@PathParam("x2") String x2
								,@PathParam("x3") String x3
								,@PathParam("x4") String x4) {
		return MyGetResPOST(new String[]{x1,x2,x3,x4});
	}
	@POST
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_ATOM_XML })
	@Path("{x1}/{x2}/{x3}/{x4}/{x5}")
	public Response getResX5POST(	@PathParam("x1") String x1
								,@PathParam("x2") String x2
								,@PathParam("x3") String x3
								,@PathParam("x4") String x4
								,@PathParam("x5") String x5) {
		return MyGetResPOST(new String[]{x1,x2,x3,x4,x5});
	}
	@POST
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_ATOM_XML })
	@Path("{x1}/{x2}/{x3}/{x4}/{x5}/{x6}")
	public Response getResX6POST(	@PathParam("x1") String x1
								,@PathParam("x2") String x2
								,@PathParam("x3") String x3
								,@PathParam("x4") String x4
								,@PathParam("x5") String x5
								,@PathParam("x6") String x6) {
		return MyGetResPOST(new String[]{x1,x2,x3,x4,x5,x6});
	}
	@POST
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_ATOM_XML })
	@Path("{x1}/{x2}/{x3}/{x4}/{x5}/{x6}/{x7}")
	public Response getResX7POST(	@PathParam("x1") String x1
								,@PathParam("x2") String x2
								,@PathParam("x3") String x3
								,@PathParam("x4") String x4
								,@PathParam("x5") String x5
								,@PathParam("x6") String x6
								,@PathParam("x7") String x7) {
		return MyGetResPOST(new String[]{x1,x2,x3,x4,x5,x6,x7});
	}
	
	
	public Response MyGetResGet(String[] paths) {
		String method = "GET";
		return GetRes(paths, method);
	}


	private Response GetRes(String[] paths, String method) {
		
		if (paths.length >=2){
			if ("people".equals( paths[0])){
				if ("list".equals(paths[1])){
					 Map <String,Object>map = new HashMap<String,Object>();
					// people -> list;
					List <Map> list = new ArrayList<Map>();
					for (int i = 0 ; i < 10 ; i ++){
						Map <String,String>map2 = new HashMap<String,String>();
						map2.put("id","id"+i );
						map2.put("name","name"+i );
						map2.put("value","value"+i );
						map2.put("type","type"+i );
						map2.put("info","info"+i );
						list.add(map2);
					}
					map.put("status", "0");
					map.put("data", list);
					
					return Response.status(200).entity(map).build();
				}
			}else{
				if ("message".equals( paths[0])){
					if ("list".equals(paths[1])){
						// message -> list;
						 Map <String,Object>map = new HashMap<String,Object>();					        
						List <Map> list = new ArrayList<Map>();
						for (int i = 0 ; i < 10 ; i ++){
							Map <String,String>map2 = new HashMap<String,String>();
							map2.put("id","id"+i );
							map2.put("name","name"+i );
							map2.put("value","value"+i );
							map2.put("type","type"+i );
							map2.put("info","info"+i );
							list.add(map2);
						}
						map.put("status", "0");
						map.put("data", list);
						
						return Response.status(200).entity(map).build();
					}
				}

			}
			
		}
		
		
		String title = "title:";
		for (int i = 0; i < paths.length; i++) {
			title += " "+i+":"+paths[i];
		}
		return Response.status(200).entity(new String[]{"xx","yy","界别 level "+paths.length+method + title}).build();
		//return  Response.status(200).entity("界别 level "+paths.length+method + title).build();
	}
	
	private Response MyGetResPOST(String[] paths) {
		String method = "POST";
		return GetRes(paths, method);
	}
}
