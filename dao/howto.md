META-INF
	context.xml -> tomcat 连接池
	<Context>
  	<Resource
	   name="jdbc/shuyouliuDB"
	   auth="Container"
	   type="javax.sql.DataSource"
	   factory="org.apache.tomcat.jdbc.pool.DataSourceFactory"
	   initialSize="5"
	   maxActive="55"
	   maxIdle="21"
	   minIdle="13"
	   timeBetweenEvictionRunsMillis="34000"
	   minEvictableIdleTimeMillis="55000"
	   validationQuery="SELECT 1"
	   validationInterval="34"
	   testOnBorrow="true"
	   removeAbandoned="true"
	   removeAbandonedTimeout="233"
	   username="shuyouliu"
	   password="shuyouliu"
	   driverClassName="com.mysql.jdbc.Driver"
	   url="jdbc:mysql://localhost:3306/shuyouliudb?allowMultiQueries=true"
   />  
</Context>
WEB-INF
	web.xml ->
	<resource-ref>
        <description>Database resource for rest demo web application </description>
        <res-ref-name>jdbc/shuyouliuDB</res-ref-name>
        <res-type>javax.sql.DataSource</res-type>
        <res-auth>Container</res-auth>
    </resource-ref>	
    
jetty9.xml
	<Configure class="org.eclipse.jetty.webapp.WebAppContext">
	   <New id="DSTest" class="org.eclipse.jetty.plus.jndi.Resource">
	     <Arg></Arg>
	     <Arg>jdbc/shuyouliuDB</Arg>
	     <Arg>
	        <New class="com.mysql.jdbc.jdbc2.optional.MysqlConnectionPoolDataSource">
	           <Set name="Url">jdbc:mysql://localhost:3306/shuyouliuDB?allowMultiQueries=true</Set>
	           <Set name="User">shuyouliu</Set>
	           <Set name="Password">shuyouliu</Set>
	        </New>
	     </Arg>
	    </New> 
	</Configure>
    
applicationContext.xml
	<import resource="daoBean.xml"/>
	

pom.xml

			<dependency>
				<groupId>org.springframework</groupId>
				<artifactId>spring-jdbc</artifactId>
				<version>${spring.version}</version>
			</dependency>

			<dependency>
				<groupId>org.springframework</groupId>
				<artifactId>spring-tx</artifactId>
				<version>${spring.version}</version>
			</dependency>



    