import React from 'react';

const Experience = () => {
  return (
    <div className="area">
      <h2>工作经历</h2>
      <section>
        <h3 className="sub">Bybit | 前端开发工程师 | 2021.03 - 至今</h3>
        <p className="line">• 支持公司业务推进。完成法币入金业务 0-1 落地。</p>
        <p className="line">• 支持公司技术栈更新，参与公司旧有项目从vue迁移到react开发</p>
        <p className="line">• 参与公司前端工程化建设，参与公司前端工程脚手架开发</p>
      </section>
      <section>
        <h3 className="sub">竹间智能 | 前端开发工程师 & 前端组长 | 2018.06 - 2021.03</h3>
        <p className="line">• 支持公司业务推进。完成包括机器人平台，电话机器人，NLU 平台，语音平台等多个旧有产品的有序迭代。协助知识工程，智能知识库，知识图谱等新产品 0-1 落地。</p>
        <p className="line">• 主导公司前端开发流程统一与优化，推出前端开发统一规范并以公共组件库与公共脚手架的形式落地。主导公司前端模块业务整合与公司前端产品性能优化。</p>
        <p className="line">• 建设专业前端团队，强调团队成员思辨能力，鼓励对潜在业务需求和技术优化点进行自我规划和递进式解决。参与跨团队沟通协调，开展团队技术分享等工作。</p>
      </section>
      <section>
        <h3 className="sub">思爱普中国 | 开发工程师 | 2015.10 - 2018.06</h3>
        <p className="line">• 基于业务场景，完成资金管理工具前端操作界面开发工作。保证产品按时迭代</p>
      </section>
      <section>
        <h3 className="sub">携程 | 开发工程师 | 2014.10 - 2015.10</h3>
        <p className="line">• 基于酒店后台业务场景，开发并完成酒店预定后端流程操作</p>
        <p className="line">• 完成酒店历史数据归集，预定信息发送，异常数据补偿等业务操作。</p>
      </section>
    </div>
  );
};

export default Experience;