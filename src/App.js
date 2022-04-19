import logo from './logo.svg';
import React, { useEffect } from 'react';
import { Diva } from '@sheencity/diva-sdk';

function App() {
  useEffect(() => {
    async function init() {
      try {
        const element = document.getElementById('root');
        const diva = new Diva({ 
          mode: 'embedded',
          apiKey: 'xxx',
          container: element,                   // 用于传递键鼠事件的 DOM 占位元素
        });
        console.log('init');
        const client = await diva.init();
        console.log('client', client);
        const result = await client.request('SetTime', {
          time: "2021-02-22T09:09:54.290Z"      // 时间格式：ISO8601，其中日期部分将会自动忽略
        });
        console.log('result', result);
      } catch (error) {
        // 处理请求响应异常返回值
        console.log(error);
      }
      
      
    }
    console.log('enter');
    init();
    console.log('end');
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='left'>天津大学建筑学院</h1>
        <h2 className="left">ATSI 工作室</h2>
      </header>
    </div>
  );
}

export default App;

// const result1 = await client.request('CreateEntity', {
        // id: "129301",        // 对象标识符，必须全局唯一，建议使用 GUID
        // type: "image3d",                    // 指定类型
        // name: "指定名称",                    // 可选，默认自动生成，资源列表中的名称，必须全局唯一
        // group: "目录1/目录2",                // 可选，默认资源列表根目录（无组），指定资源列表中的目录名称，如不存在将自动创建  
        // visible: true,                      // 可选，可见性，默认 true
        // locked: false,                      // 可选，锁定状态，默认 false     
        // position: [1.0,1.5,1.0],            // 可选，[x, y, z]，单位：cm，默认为 [0,0,0] 即项目原点
        // //coordinate: [116.445,39.918,0],   // 可选，[经度,纬度,高度(单位: m)]，仅CIM模式下支持，指定 coordinate 时可不指定 position     
        // rotation: [0.0,0.0,0.0],            // 可选，[roll,pitch,yaw]，默认[0.0,0.0,0.0]
        // scale:        [1.0,1.0,1.0],                        // 可选，[scaleX,scaleY,scaleZ]，默认为 [1.0,1.0,1.0]
        // property: {
        //   faceCamera: true,                              // 可选，面向镜头，默认为 false
        //   color: [255,0,0],                              // 可选，叠加颜色，[r,g,b]，取值范围[0,0,0]~[255,255,255]，默认 [255,255,255]
        //   emissive: 0.0,                                        // 可选，自发光强度，默认为 0.0
        //   opacity: 1.0,                                            // 可选，不透明度，默认为 1.0
        //   url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242332225H9-0-lp.jpg"                // 必填，显示的图片，支持 http/https、file协议和本地路径
        // }
        // });
        // console.log('result1', result1);