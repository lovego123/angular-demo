import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const companies = [
      {id:10,name:'浪潮',established_time:'1945年',main_business:'IT类服务'},
      {id:11,name:'百度',established_time:'2000年',main_business:'搜索引擎'},
      {id:12,name:'腾讯',established_time:'1998年',main_business:'网络游戏'},
      {id:13,name:'阿里巴巴',established_time:"1999年",main_business:'电子商务'},
      {id:14,name:'华为',established_time:'1987年',main_business:'通信设备'},
      {id:15,name:'微软',established_time:'1975年',main_business:'计算机软件'},
      {id:16,name:'谷歌',established_time:'1998年',main_business:'搜索引擎'},
      {id:17,name:'苹果',established_time:'1976年',main_business:'电子消费产品'}
    ];
    return {companies};
  }
}