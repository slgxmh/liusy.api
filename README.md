# liusy.api
2016/5/10

QQ交流群： 571422187


项目

7个段 URL



service 工程的  UserAPI 

    GET /resources 获取资源列表
    POST /resources 创建一个资源，返回资源的全部或部分字段
    GET /resources/{id} 获取某个id的资源详情，返回资源的全部或部分字段
    DELETE /resources/{id} 删除某个资源
    PUT /resources/{id} 更新某个资源的 全部 字段，返回资源的全部或部分字段
   ????? PATCH /resources/{id} 更新某个资源的 部分 字段，返回资源的全部或部分字段

     方法

HTTP 方法映射到资源的 CRUD（创建、读取、更新和删除） 操作。尽管您可以做一些小修改，比如让 PUT 方法变成创建或更新，但基本的模式如下：

    HTTP GET：获取/列出/检索单个资源或资源集合。
    HTTP POST：新建资源。
    HTTP PUT：更新现有资源或资源集合。
    HTTP DELETE：删除资源或资源集合。

方法/资源
	

资源集合; URI 如：
http://host/api/resources
	

成员资源; URI 如：
http://host/api /resources/123
	

对应的操作

POST
	

列出资源集合的所有成员。
	

检索标识为 1234 的资源的表示形式。
	

C（创建）

GET
	

使用一个集合更新（替换）另一个集合。
	

更新标记为 1234 的数字资源。
	

R（读取）

PUT
	

在集合中创建数字资源，其ID 是自动分配的。
	

在下面创建一个子资源。
	

U（更新）

DELETE
	

删除整个资源集合。
	

删除标记为 1234 的数字资源。
	

D（删除）
