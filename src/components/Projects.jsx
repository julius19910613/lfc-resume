import React from 'react';

const Projects = () => {
  return (
    <div className="area">
      <h2>项目经历</h2>
      <section>
        <h3 className="sub">法币入金2.0 | 开发者&管理者 | 2021.03 - 至今</h3>
        <h4 className="sub-h4">现有痛点</h4>
        <p className="line">• 旧有项目交互逻辑设计不合理，用户反馈不佳</p>
        <p className="line">• 旧有项目代码结构复杂，难以维护</p>
        <h4 className="sub-h4">解决过程</h4>
        <p className="line">• 拆分旧有代码，提取法币入金相关逻辑基于react重构</p>
        <p className="line">• 基于Antd封装组件，快速迭代页面，与交互讨论封装完成的组件标准化为组件库</p>
        <p className="line">• 抽离公共方法（防抖，节流，轮询等）为公共方法，降低后续相似功能的开发成本</p>
        <h4 className="sub-h4">项目成果</h4>
        <p className="line">开发两周后完成上线，PV，UV提升30%，用户反馈问题下降30%</p>
      </section>
      <section>
        <h3 className="sub">Common Modules | 开发者&管理者 | 2019.12 - 2021.03</h3>
        <h4 className="sub-h4">现有痛点</h4>
        <p className="line">• 公司旧有的前端技术栈包括 VueJS，JQuery 和 PHP，VueJS 项目存在不同种类组件库混用情况。</p>
        <p className="line">• 前端开发水平参差不齐。产品设计，交互设计，前端开发缺乏统一设计基准和开发标准，需求传递时间长。</p>
        <p className="line">• 公司产品迭代周期短，要求快速产出交互统一产品，快速达到可 demo 可投入市场</p>
        <h4 className="sub-h4">解决过程</h4>
        <p className="line">• 统一前端技术栈至 VueJS，基础组件库选择 ElementUI，统一基础功能交互，基于 ElementUI和自定义样式实现基础功能样式的统一化</p>
        <p className="line">• 基于 ElementUI，结合公司业务场景，与交互，产品交流后封装与业务流程相关的业务公共组件。如页面头部，侧边菜单栏，卡片页，侧边弹出框等。部分业务公共组件由多个业务公共组件组成且支持单独使用，开发可选择直接使用完整的业务组件直接搭建页面，也支持自由搭配业务组件形成新页面</p>
        <p className="line">• 封装完成的公共组件支持 npm 依赖形式和基于 nginx webserver 的访问两种形式，nginx webserver 支持多产品部署和开发时，不用关注公共部分是否有版本差异或版本升级。Nginx依赖形式使得某些单独运行产品可以快速集成公共组件能力</p>
        <p className="line">• 引入基于 storybook 的前端自动化测试，保证公共组件开发质量</p>
        <h4 className="sub-h4">项目成果</h4>
        <p className="line">Common modules 推出第一个版本后在两周之内帮助公司 12 个主产品，20+功能模块完成交互和展示初步统一。近一年持续迭代近 20 个业务相关组件。提升新产品开发效率和旧有功能维护效率 30%左右</p>
      </section>
      <section>
        <h3 className="sub">前端整合改造 | 开发者&管理者 | 2019.12 - 2021.03</h3>
        <h4 className="sub-h4">现有痛点</h4>
        <p className="line">• 公司产品独立开发，独立部署，需要展示融合版本或客户使用多个产品时，产品之间关系零碎，界面体感分散</p>
        <p className="line">• 公司前端技术栈尚未统一，要求短时间内完成整合，业务上需要产品支持独立部署和按业务需求整合</p>
        <h4 className="sub-h4">解决过程</h4>
        <p className="line">• 第⼀阶段（2019.12 – 2020.1）为了快速串接业务，达到整合效果。选⽤基于 nginx rewrite 的多⻚应⽤模式。即每个功能模块都统⼀复⽤公共业务组件（头部，侧边菜单栏等）菜单跳转时通过恰当缓存共享信息，从体感上给予⽤户接近⽆感切换的效果。</p>
        <p className="line">• 第⼆阶段（2020.5 – ⾄今）经过⼀段时间的技术调研，完成前置的技术储备和业务调整准备后，使⽤ qiankun 微前端框架来实现前端业务模块有机整合。</p>
        <h4 className="sub-h4">项⽬成果</h4>
        <p className="line">整合⽅案第⼀阶段完成后近⼀年完成⽀撑产品客户部署需求和演⽰需求</p>
        <p className="line">qiankun ⽅案在部分产品中实践得到使⽤者和开发者的认可，正在全公司铺开推⼴</p>
      </section>
      <section>
        <h3 className="sub">前端性能优化 | 开发者&管理者 | 2019.12 – 2021.03</h3>
        <h4 className="sub-h4">现有痛点</h4>
        <p className="line">• 无缓存情况下 FCP 时间， Speed Index 时间均在 10 秒以上，白屏现象明显。用户体验不好，达不到演示标准</p>
        <h4 className="sub-h4">解决过程</h4>
        <p className="line">• 制定性能优化指标，FCP 时间及 Speed Index 时间压缩⾄ chrome 推荐的 moderate⽔平（FCP 时间 2~4s，Speed Index 4s 左右）</p>
        <p className="line">• 结合浏览器访问数据指标和 webpack 打包结果，定位单⽂件过⼤问题，⼀⽅⾯启⽤Vue-router 资源异步加载和 Vue 组件异步加载，⽀持打包后形成多⽂件。另⼀⽅⾯清理，剔除不需要的静态资源，开启 gzip 压缩，压缩单个⽂件⼤⼩</p>
        <p className="line">• 基于浏览器访请求访问情况，与后端⼀同 review 相关逻辑，合并重复功能逻辑，去除非关联逻辑之间的依赖，⻚⾯开启时的请求数由原先的 20+缩减为 5 个</p>
        <p className="line">• 与测试部⻔分享性能检测流程，推荐其将性能测试加入迭代测试范围</p>
        <h4 className="sub-h4">项⽬成果</h4>
        <p className="line">• ⻚⾯ FCP 时间及 Speed Index 时间降低⾄ 3s 以下，平均 2s 左右</p>
        <p className="line">• 性能检测纳入测试检测项，⼤版本迭代必须通过</p>
        <p className="line">• 定期开展打包结果 review，单个⼤⽂件发现后会统⼀分析确认是否合适</p>
      </section>
    </div>
  );
};

export default Projects;