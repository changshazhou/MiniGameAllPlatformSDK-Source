# VERSION 1.0.0


# 墨雪SDK结构说明

http://git.liteplay.com.cn/open/moosnowSdk

## 点击下载压缩包

![Image text](https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/SDK/guide/sdk_guide.png)


## 文档结构
    MOOSNOWSDK

            -->oppo oppo 平台的导出广告SDK

            -->platform  多平台适配SDK，包含墨雪的导出广告SDK和平台的banner,video,inter等广告    ---开发中 敬请期待

            -->wechat 微信平台的导出广告SDK

            -->utils 阿拉丁  微信平台需要使用


## laya使用

将文件moosnow.conf.js、moosnow.sdk.js 拷贝到src目录

![Image text](https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/SDK/guide/sdk_guide_laya.png)

在Main.ts的顶部

```js 

import  './moosnowSdk/moosnow.conf'
import  './moosnowSdk/moosnow.sdk'

```



## Cocos Creator 使用方式
![Image text](https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/SDK/guide/sdk_guide_cocos.png)




## 获取广告

```js 


    var moosnowResult;
    
    moosnow.getAd(function(res) {
    
        console.log('moosnowResult ',res)
       
        moosnowResult=res;
    
    });

```

moosnowResult 结构如下图
![Image text](https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/SDK/guide/sdk_guide_moosnowResult.png)

目前的广告仅有indexLeft数据，其他请忽略




## 广告跳转


```js 
    var btn=new Button();
    /* 跳转传入参数结构
    var navigateData={
        appid:"",
        
        boxAppid:"",
        
        desc:"",
        
        img:"",
        
        path:"",
        
        title:""
    }
    *///导出页 跳转到 第1个app，这个是示例  ， 请根据实际情况填写

    var navigateData=moosnowResult.exportPage[0]
    btn.on("click",function(){
        //将会跳转到navigateData.appid 的小app, 注意！！！ 不要再使用wx.navigateToMiniProgram  
        moosnow.navigate2Mini(navigateData)
    })


```



##  微信平台 上报开始游戏，结束游戏  


```js 

    /**
     * 统计开始游戏
     * @param level 关卡数 必须是1 || 2 || 1.1 || 12.2 格式
     */
    moosnow.startGame(“1”)




 	 /**
     * 统计结束游戏
     * @param level 关卡数 必须是1 || 2 || 1.1 || 12.2 格式
     * @param isWin 是否成功
     */
    moosnow.endGame(“1”, true)

```


##  微信平台 上报视频广告数据

```js 
/**
     * 视频统计
     * @param type 0：视频点击 1：视频观看完成
     * @param info 信息 ex:“领取三倍金币”
     * @param level 关卡数	没有请填”0”
     */
    moosnow.videoPoint(0, “领取三倍金币”, “1”)
```

注意：点击之后上报一次，type=0，观看完视频后应再上报一次，type=1。




## 获取误点次数间隔
```js 

    /**
     * 获取误点间隔次数，启动游戏时调用
     * @param callback 回调参数为misTouchNum:int，当misTouchNum=0时关闭误点，
        当misTouchNum=1时，每次都触发误点（即当misTouchNum=n(0除外)时，每	隔n次，触发误点1次）
     */

    var misTouchNum = 0;
    moosnow.getMisTouchNum((res) => {
        misTouchNum = res;		//误点次数间隔
    })
```


## 获取位移次数间隔

```js 

    /**
    * 获取位移间隔次数，启动游戏时调用
    * @param callback 回调参数为misTouchPosNum :int，当misTouchPosNum =0时关闭位移误点，
    当misTouchPosNum =1时，每次都触发误点（即当misTouchPosNum =n(0除外)时，每	隔n次，触发位移1次）
    */

    var misTouchPosNum = 0;
    moosnow.getMisTouchPosNum((res) => {
        misTouchPosNum = res;		//位移次数间隔
    })

```



## 微信平台 配置安全域名
```js 

https://api.liteplay.com.cn
https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com
https://cdn.liteplay.com.cn
https://glog.aldwx.com
https://log.aldwx.com

```
### 复制这里更快噢
```js 
api.liteplay.com.cn
cdn.liteplay.com.cn
glog.aldwx.com
liteplay-1253992229.cos.ap-guangzhou.myqcloud.com
log.aldwx.com
```
