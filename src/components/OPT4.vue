<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <input
          type="text"
          v-model="keyword"
        >
        <div class="match-num">{{ currentIdx }} / {{ matchCount }}</div>
        <button @click.stop="searchLast">上一个</button>
        <button @click.stop="searchNext">下一个</button>
      </div>
      <search-highlight
        class="search-highlight"
        ref="search"
        @current-change="currentChange"
        @mactch-count-change="matchCountChange"
        :content="content"
        :keyword="keyword"
        v-html="content"
      >
      </search-highlight>
    </div>
  </div>
</template>

        // class="search-highlight"
        // ref="search"
        // @current-change="currentChange"
        // @mactch-count-change="matchCountChange"
        // :content="content"
        // :keyword="keyword">
<script>
import SearchHighlight from './SearchHighlight'

export default {
  components: {
    SearchHighlight
  },
  data() {
    return {
      currentIdx: 0,
      matchCount: 0,
      keyword: '月',
      content: `
          [LOG-PATH]: /opt/idp/backend/logs/30/102/831.log, [HOST]:  10.24.68.241
[INFO] 2021-04-23 15:41:16.779  - [taskAppId=TASK-30-102-831]:[132] -  -> java -classpath /opt/idp/backend/conf:/opt/idp/backend/collection/task-executors-1.3.3-SNAPSHOP-jar-with-dependencies.jar com.ruisdata.octopus.ExecutorApplication export /tmp/idp_demo/exec/process/1/30/102/831/30_102_831.conf
	21/04/23 15:41:16 INFO octopus.Exec23 15:41:16 INFO octopus.ExecutorApplication: sl : {"data_date":{"direct":"IN","prop":"data_date","type":"VARCHAR","value":"20210422"}}
	21/04/23 15:41:17 INFO octopus.ExecutorApplication: export config : ExportConfig(sourceConnectionParams=DatasourceConfig{address='jdbc:hive2://10.24.65.120:10000', jdbcUrl='jdbc:hive2://10.24.65.120:10000/default;principal=hive/dev-new-cdh2.lab.com@RUISDATA.COM', database=default', user='hive', password='******', other='null', owner='null'}, sourceDatasource=2, sourceTable=score, sourceType=HIVE, targetConnectionParams=DatasourceConfig{address='jdbc:mysql://10.24.67.188:3306', jdbcUrl='jdbc:mysql://10.24.67.188:3306/octopus_demo', database=octopus_demo', user='octopus_demo', password='******', other='null', owner='null'}, targetDatasource=1, targetTable=score, targetType=MYSQL, preStatements=[], postStatements=[], fieldList=[ExportField(position=1, sourceFieldName=s_id, sourceFieldType=varchar(40), sourceDescription=??id, targetFieldName=s_id, targetFieldType=varchar(40), targetDescription=学生id, enabled=true), ExportField(position=2, sourceFieldName=c_id, sourceFieldType=varchar(40), sourceDescription=??id, targetFieldName=c_id, targetFieldType=varchar(40), targetDescription=课程id, enabled=true), ExportField(position=3, sourceFieldName=s_score, sourceFieldType=int, sourceDescription=????, targetFieldName=s_score, targetFieldType=int, targetDescription=学生分数, enabled=true)], exportConfig=ExportCollectionConfig(overwriteMode=FULL, extractMode=FULL, overwriteColumn=, overwritePattern=, extractColumn=, extractPattern=))
	21/04/23 15:41:17 INFO ocnd"
	21/04/23 15:41:17 INFO octopus.ExecutorApplication: export config : ExportConfig(sourceConnectionParams=DatasourceConfig{address='jdbc:hive2://10.24.65.120:10000', jdbcUrl='jdbc:hive2://10.24.65.120:10000/default;principal=hive/dev-new-cdh2.lab.com@RUISDATA.COM', database=default', user='hive', password='******', other='null', owner='null'}, sourceDatasource=2, sourceTable=score, sourceType=HIVE, targetConnectionParams=DatasourceConfig{address='jdbc:mysql://10.24.67.188:3306', jdbcUrl='jdbc:mysql://10.24.67.188:3306/octopus_demo', database=octopus_demo', user='octopus_demo', password='******', other='null', owner='null'}, targetDatasource=1, targetTable=score, targetType=MYSQL, preStatements=[], postStatements=[], fieldList=[ExportField(position=1, sourceFieldName=s_id, sourceFieldType=varchar(40), sourceDescription=??id, targetFieldName=s_id, targetFieldType=varchar(40), targetDescription=学生id, enabled=true), ExportField(position=2, sourceFieldName=c_id, sourceFieldType=varchar(40), sourceDescription=??id, targetFieldName=c_id, targetFieldType=varchar(40), targetDescription=课程id, enabled=true), ExportField(position=3, sourceFieldName=s_score, sourceFieldType=int, sourceDescription=????, targetFieldName=s_score, targetFieldType=int, targetDescription=学生分数, enabled=true)], exportConfig=ExportCollectionConfig(overwriteMode=FULL, extractMode=FULL, overwriteColumn=, overwritePattern=, extractColumn=, extractPattern=))
	21/04/23 15:41:17 INFO octopus.ExecutorApplication: export param : ExportLocalParam(dataDate=LocalParam(direct=IN, prop=data_date, type=VARCHAR, value=20210422))
	21/04/23 15:41:20 INFO export.ExecutorExportTask: ----> SqoopCommand by table default.score is sqoop export --connect "jdbc:mysql://10.24.67.188:3306/octopus_demo" --username "octopus_demo" --password "******" --driver "com.mysql.jdbc.Driver" --table "score" --hcatalog-database "default" --hcatalog-table "score" --columns "s_id, c_id, s_score" --num-mappers "4" 
[INFO] 2021-04-23 15:41:25.910  - [taskAppId=TASK-30-102-831]:[132] -  -> 21/04/23 15:41:20 INFO export.ExportHiveUtils: generateTableExistSql : SHOW TABLES LIKE 'score'    [LOG-PATH]: /opt/idp/backend/logs/30/102/831.log, [HOST]:  10.24.68.241
[INFO] 2021-04-23 15:41:16.779  - [taskAppId=TASK-30-102-831]:[132] -  -> java -classpath /opt/idp/backend/conf:/opt/idp/backend/collection/task-executors-1.3.3-SNAPSHOP-jar-with-dependencies.jar com.ruisdata.octopus.ExecutorApplication export /tmp/idp_demo/exec/process/1/30/102/831/30_102_831.conf
	21/04/23 15:41:16 INFO octopus.ExecutorApplication: fl : {"checkDepend":false,"checkDependFlag":0,"exportConfig":{"extractColumn":"","extractMode":0,"extractPattern":"","overwriteColumn":"","overwriteMode":0,"overwritePattern":""},"fieldList":[{"enabled":true,"position":1,"sourceDescription":"??id","sourceFieldName":"s_id","sourceFieldType":"varchar(40)","targetDescription":"学生id","targetFieldName":"s_id","targetFieldType":"varchar(40)"},{"enabled":true,"position":2,"sourceDescription":"??id","sourceFieldName":"c_id","sourceFieldType":"varchar(40)","targetDescription":"课程id","targetFieldName":"c_id","targetFieldType":"varchar(40)"},{"enabled":true,"position":3,"sourceDescription":"????","sourceFieldName":"s_score","sourceFieldType":"int","targetDescription":"学生分数","targetFieldName":"s_score","targetFieldType":"int"}],"localParametersMap":{},"localParams":[],"postStatements":[],"preStatements":[],"resourceFilesList":[],"sourceConnectionParams":{"principal":"hive/dev-new-cdh2.lab.com@RUISDATA.COM","database":"default","password":"******","address":"jdbc:hive2://10.24.65.120:10000","jdbcUrl":"jdbc:hive2://10.24.65.120:10000/default;principal=hive/dev-new-cdh2.lab.com@RUISDATA.COM","user":"hive"},"sourceDatasource":2,"sourceDescription":"源表描述","sourceTable":"score","sourceType":"HIVE","targetConnectionParams":{"database":"octopus_demo","password":"******","address":"jdbc:mysql://10.24.67.188:3306","jdbcUrl":"jdbc:mysql://10.24.67.188:3306/octopus_demo","user":"octopus_demo"},"targetDatabase":"octopus_demo","targetDatasource":1,"targetDescription":"","targetTable":"score","targetType":"MYSQL"}
[INFO] 2021-04-23 15:41:20.622  - [taskAppId=TASK-30-102-831]:[132] -  -> 21/04/23 15:41:16 INFO octopus.ExecutorApplication: sl : {"data_date":{"direct":"IN","prop":"data_date","type":"VARCHAR","value":"20210422"}}
	21/04/23 15:41:17 INFO octopus.ExecutorApplication: export config : ExportConfig(sourceConnectionParams=DatasourceConfig{address='jdbc:hive2://10.24.65.120:10000', jdbcUrl='jdbc:hive2://10.24.65.120:10000/default;principal=hive/dev-new-cdh2.lab.com@RUISDATA.COM', database=default', user='hive', password='******', other='null', owner='null'}, sourceDatasource=2, sourceTable=score, sourceType=HIVE, targetConnectionParams=DatasourceConfig{address='jdbc:mysql://10.24.67.188:3306', jdbcUrl='jdbc:mysql://10.24.67.188:3306/octopus_demo', database=octopus_demo', user='octopus_demo', password='******', other='null', owner='null'}, targetDatasource=1, targetTable=score, targetType=MYSQL, preStatements=[], postStatements=[], fieldList=[ExportField(position=1, sourceFieldName=s_id, sourceFieldType=varchar(40), sourceDescription=??id, targetFieldName=s_id, targetFieldType=varchar(40), targetDescription=学生id, enabled=true), ExportField(position=2, sourceFieldName=c_id, sourceFieldType=varchar(40), sourceDescription=??id, targetFieldName=c_id, targetFieldType=varchar(40), targetDescription=课程id, enabled=true), ExportField(position=3, sourceFieldName=s_score, sourceFieldType=int, sourceDescription=????, targetFieldName=s_score, targetFieldType=int, targetDescription=学生分数, enabled=true)], exportConfig=ExportCollectionConfig(overwriteMode=FULL, extractMode=FULL, overwriteColumn=, overwritePattern=, extractColumn=, extractPattern=))
	21/04/23 15:41:17 INFO octopus.ExecutorApplication: export param : ExportLocalParam(dataDate=LocalParam(direct=IN, prop=data_date, type=VARCHAR, value=20210422))
	21/04/23 15:41:20 INFO export.ExecutorExportTask: ----> SqoopCommand by table default.score is sqoop export --connect "jdbc:mysql://10.24.67.188:3306/octopus_demo" --username "octopus_demo" --password "******" --driver "com.mysql.jdbc.Driver" --table "score" --hcatalog-database "default" --hcatalog-table "score" --columns "s_id, c_id, s_score" --num-mappers "4" 
[INFO] 2021-04-23 15:41:25.910  - [taskAppId=TASK-30-102-831]:[132] -  -> 21/04/23 15:41:20 INFO export.ExportHiveUtils: generateTableExistSql : SHOW TABLES LIKE 'score'    [LOG-PATH]: /opt/idp/backend/logs/30/102/831.log, [HOST]:  10.24.68.241
[INFO] 2021-04-23 15:41:16.779  - [taskAppId=TASK-30-102-831]:[132] -  -> java -classpath /opt/idp/backend/conf:/opt/idp/backend/collection/task-executors-1.3.3-SNAPSHOP-jar-with-dependencies.jar com.ruisdata.octopus.ExecutorApplication export /tmp/idp_demo/exec/process/1/30/102/831/30_102_831.conf
	21/04/23 15:41:16 INFO octopus.ExecutorApplication: fl : {"checkDepend":false,"checkDependFlag":0,"exportConfig":{"extractColumn":"","extractMode":0,"extractPattern":"","overwriteColumn":"","overwriteMode":0,"overwritePattern":""},"fieldList":[{"enabled":true,"position":1,"sourceDescription":"??id","sourceFieldName":"s_id","sourceFieldType":"varchar(40)","targetDescription":"学生id","targetFieldName":"s_id","targetFieldType":"varchar(40)"},{"enabled":true,"position":2,"sourceDescription":"??id","sourceFieldName":"c_id","sourceFieldType":"varchar(40)","targetDescription":"课程id","targetFieldName":"c_id","targetFieldType":"varchar(40)"},{"enabled":true,"position":3,"sourceDescription":"????","sourceFieldName":"s_score","sourceFieldType":"int","targetDescription":"学生分数","targetFieldName":"s_score","targetFieldType":"int"}],"localParametersMap":{},"localParams":[],"postStatements":[],"preStatements":[],"resourceFilesList":[],"sourceConnectionParams":{"principal":"hive/dev-new-cdh2.lab.com@RUISDATA.COM","database":"default","password":"******","address":"jdbc:hive2://10.24.65.120:10000","jdbcUrl":"jdbc:hive2://10.24.65.120:10000/default;principal=hive/dev-new-cdh2.lab.com@RUISDATA.COM","user":"hive"},"sourceDatasource":2,"sourceDescription":"源表描述","sourceTable":"score","sourceType":"HIVE","targetConnectionParams":{"database":"octopus_demo","password":"******","address":"jdbc:mysql://10.24.67.188:3306","jdbcUrl":"jdbc:mysql://10.24.67.188:3306/octopus_demo","user":"octopus_demo"},"targetDatabase":"octopus_demo","targetDatasource":1,"targetDescription":"","targetTable":"score","targetType":"MYSQL"}
[INFO] 2021-04-23 15:41:20.622  - [taskAppId=TASK-30-102-831]:[132] -  -> 21/04/23 15:41:16 INFO octopus.ExecutorApplication: sl : {"data_date":{"direct":"IN","prop":"data_date","type":"VARCHAR","value":"20210422"}}
	21/04/23 15:41:17 INFO octopus.ExecutorApplication: export config : ExportConfig(sourceConnectionParams=DatasourceConfig{address='jdbc:hive2://10.24.65.120:10000', jdbcUrl='jdbc:hive2://10.24.65.120:10000/default;principal=hive/dev-new-cdh2.lab.com@RUISDATA.COM', database=default', user='hive', password='******', othe`,
    }
  },
  methods: {
    searchNext() {
      this.$refs.search.searchNext()
    },
    searchLast() {
      this.$refs.search.searchLast()
    },
    matchCountChange(count) {
      this.matchCount = count
    },
    currentChange(idx) {
      this.currentIdx = idx
    },
    checkKeydown(event) {
      if (event.shiftKey) {
        this.searchLast()
      } else {
        this.searchNext()
      }
    }
  }
}
</script>