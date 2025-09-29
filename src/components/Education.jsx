import React from 'react';

const Education = () => {
  return (
    <div className="area">
      <h2>教育经历</h2>
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td>纽卡斯尔大学</td>
            <td>计算机科学（硕士）</td>
            <td>2013:09 - 2015.01</td>
          </tr>
          <tr>
            <td>中瑞典大学</td>
            <td>信息科学（学士）</td>
            <td>2012:09 - 2013.06</td>
          </tr>
          <tr>
            <td>东华大学</td>
            <td>软件工程（学士）</td>
            <td>2009:09 - 2013.06</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Education;