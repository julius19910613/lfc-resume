const resumeData = {
  zh: {
    ui: {
      langSwitch: { zh: "中文", en: "EN" },
      contactTitle: "联系方式",
      phoneLabel: "电话",
      emailLabel: "邮箱",
      summaryTitle: "个人优势",
      skillsTitle: "专业技能",
      educationTitle: "教育经历",
      experienceTitle: "工作经历",
      projectsTitle: "项目经历",
      painPointsTitle: "现有痛点",
      solutionsTitle: "解决过程",
      resultsTitle: "项目成果",
      achievementsTitle: "业绩"
    },
    personalInfo: {
      name: "李繁宸",
      title: "全栈工程师 / AI 应用开发",
      phone: "13641875733",
      email: "lifanchenjulius@hotmail.com",
      location: "上海"
    },
    summary: [
      "全栈开发 + AI 应用开发能力，熟悉 Python、React、Vue，了解 Java。",
      "对智能体开发与知识图谱开发有较多项目经验。",
      "熟悉 CI/CD 流程，了解 Kubernetes、Docker。",
      "具备团队/项目管理能力，管理过 5 人以上团队；有产品设计与运营经验。"
    ],
    skills: [
      ["Python", "FastAPI", "JavaScript (ES6+)", "TypeScript"],
      ["React", "Vue", "ECharts", "AntV G6"],
      ["Neo4j", "MongoDB", "GraphQL", "DuckDB"],
      ["Airflow", "Docker", "Kubernetes", "CI/CD"]
    ],
    education: [
      { school: "纽卡斯尔大学（英国）", degree: "计算机科学 硕士", period: "2013 - 2015" },
      { school: "中瑞典大学", degree: "信息技术 本科（交换）", period: "2012 - 2013" },
      { school: "东华大学", degree: "软件工程 本科", period: "2009 - 2013" }
    ],
    experience: [
      {
        company: "特斯拉（上海）有限公司",
        position: "全栈工程师",
        period: "2021.12 - 至今",
        responsibilities: [
          "负责公司内部数据分析/可视化平台与生产制造 AI 助手相关能力建设。",
          "参与基于 LLM + 知识图谱的智能体应用研发，提升现场问题分析与数据获取效率。"
        ]
      },
      {
        company: "上海亿锦网络科技有限公司",
        position: "Web 前端",
        period: "2021.04 - 2021.12",
        responsibilities: ["参与交易系统开发工作。"]
      },
      {
        company: "竹间智能科技（上海）有限公司",
        position: "前端开发经理 / 前端开发工程师",
        period: "2018.06 - 2021.04",
        responsibilities: [
          "推动前端团队技术改造，基于 ElementUI 的公共组件体系提升交付效率。",
          "推动前端页面性能优化，剔除冗余依赖，合并/优化阻塞请求。",
          "推动前端解耦改造，从多页面逐步切换至微前端架构。"
        ]
      },
      {
        company: "SAP",
        position: "Web 前端",
        period: "2015.10 - 2018.06",
        responsibilities: [
          "基于 Fiori（JavaScript + HTML5）开发资金管理工具前端界面（列表/图表/表单）。",
          "参与自动化测试与后台服务模块开发，保障质量并支持客户交付。"
        ]
      },
      {
        company: "携程（Trip.com）",
        position: "开发工程师",
        period: "2014.10 - 2015.10",
        responsibilities: [
          "从订单池抓取订单并按状态自动化处理（提示、支付、联系确认等）。",
          "设计并开发订单备份还原与酒店间夜量统计功能模块。",
          "参与订单处理系统重构与优化，降低 DB 压力并缩短响应时间。"
        ]
      }
    ],
    projects: [
      {
        name: "公司内部可视化报表平台",
        role: "全栈开发",
        period: "Tesla | 2021.12 - 至今",
        painPoints: ["数据源分散、报表需求多样，用户需要自助配置与可视化展示能力。"],
        solutions: [
          "基于 ECharts + AntV G6 构建图表能力，支持缩放、下载导出等交互。",
          "提供 ReactJS + FastAPI 配置化界面，支持数据源链接、报表数据与展示形式配置。",
          "二次开发 Superset 组件，接入多种数据源（MySQL/SQL Server/Trino/Vertica）与在线文档（SharePoint）。",
          "基于 DuckDB + Airflow Job 提供跨库 Join、查询结果预缓存等轻量分析能力。",
          "支持通过邮件、IM 消息推送报表结果。"
        ],
        results: "沉淀可复用报表与数据接入能力，提升业务自助分析效率。"
      },
      {
        name: "生产制造溯源平台",
        role: "全栈开发",
        period: "Tesla | 2021.12 - 至今",
        painPoints: ["生产制造数据定义混乱，跨车间/场景数据获取成本高。"],
        solutions: [
          "使用 Neo4j（图数据库）+ MongoDB（NoSQL）构建混合存储。",
          "构建元数据管理模块，维护查询条件与表/字段映射关系。",
          "基于 LLM 构建查询计划生成模块，按元数据选择单步/多步最优查询策略。",
          "基于 FastAPI + ReactJS 开发数据服务平台，执行查询计划并返回结果。",
          "基于 GraphQL 提供统一查询接口，便于不同平台系统调用。"
        ],
        results: "降低跨系统取数与溯源成本，为多业务系统提供统一数据服务入口。"
      },
      {
        name: "生产制造现场问题辅助助手",
        role: "AI 应用 / 智能体",
        period: "Tesla | 2021.12 - 至今",
        painPoints: ["现场问题规整与查询困难，夜班期间大量问题需要工程师介入。"],
        solutions: [
          "基于 Neo4j 设计制造问题知识图谱并存储数据。",
          "结合 LLM + 知识图谱范式抽取问题核心知识，并以图结构保存。",
          "将自然语言查询转化为单步/多步图查询，输出对应解决方法。",
          "整合知识查询与数据查询为辅助智能体，LLM 自动选择工具并生成最终方案。"
        ],
        results: "显著提升现场技术人员分析与解决问题效率。"
      },
      {
        name: "公司数据分析与可视化助手",
        role: "AI 应用 / 智能体",
        period: "Tesla | 2021.12 - 至今",
        painPoints: ["数据查询与分析门槛高，用户需要更自然的交互方式完成探索与可视化。"],
        solutions: [
          "将内部分析与可视化平台能力拆分并封装为智能体工具。",
          "参与开发元数据查询助手：解析用户输入并返回相关元数据，帮助快速定位数据。",
          "参与开发数据可视化助手：选择授权数据源、生成查询并可视化展示结果。",
          "参与开发数据分析助手：结合查询结果与私有知识库生成可执行分析成果。"
        ],
        results: "提升用户自助完成数据查询、可视化与分析的能力。"
      }
    ],
    achievements: [
      "生产制造辅助助手：现场反馈夜班期间约 70% 原先需联系值班工程师的问题可由现场技术人员独立分析解决。",
      "数据分析与可视化助手：提升用户独立完成数据查询和分析能力，日均使用量 200+。",
      "生产制造溯源平台：日均使用量 200+；估算每年可节约质量和工艺工程师约 2000 小时工作时间。"
    ]
  },
  en: {
    ui: {
      langSwitch: { zh: "中文", en: "EN" },
      contactTitle: "Contact",
      phoneLabel: "Phone",
      emailLabel: "Email",
      summaryTitle: "Summary",
      skillsTitle: "Skills",
      educationTitle: "Education",
      experienceTitle: "Experience",
      projectsTitle: "Projects",
      painPointsTitle: "Context",
      solutionsTitle: "Highlights",
      resultsTitle: "Outcome",
      achievementsTitle: "Achievements"
    },
    personalInfo: {
      name: "Fanchen Li",
      title: "Full-Stack Engineer / AI Applications",
      phone: "+86 13641875733",
      email: "lifanchenjulius@hotmail.com",
      location: "Shanghai, China"
    },
    summary: [
      "Full-stack engineer with hands-on experience building AI agents and knowledge-graph-powered applications.",
      "Strong with Python, React, and Vue; familiar with Java; experienced in CI/CD and containerized delivery.",
      "Built internal analytics/visualization platforms and manufacturing AI assistants with measurable impact."
    ],
    skills: [
      ["Python", "FastAPI", "JavaScript (ES6+)", "TypeScript"],
      ["React", "Vue", "ECharts", "AntV G6"],
      ["Neo4j", "MongoDB", "GraphQL", "DuckDB"],
      ["Airflow", "Docker", "Kubernetes", "CI/CD"]
    ],
    education: [
      { school: "Newcastle University, UK", degree: "MSc Computer Science", period: "2013 – 2015" },
      { school: "Mid Sweden University, Sweden", degree: "BSc Information Technology", period: "2012 – 2013" },
      { school: "Donghua University, China", degree: "BSc Software Engineering", period: "2009 – 2013" }
    ],
    experience: [
      {
        company: "Tesla (Shanghai) Co., Ltd.",
        position: "Full-Stack Engineer & Product Owner",
        period: "Dec 2021 – Present",
        responsibilities: [
          "Built AI-agent and knowledge-graph solutions for manufacturing problem solving and data discovery.",
          "Developed internal analytics and visualization capabilities to enable self-service reporting and insights."
        ]
      },
      {
        company: "Shanghai Yijin Network Technology Co., Ltd.",
        position: "Web Front-End Developer",
        period: "Apr 2021 – Dec 2021",
        responsibilities: ["Participated in the development of trading systems."]
      },
      {
        company: "Emotibot Technologies (Shanghai) Co., Ltd.",
        position: "Front-End Development Manager / Front-End Engineer",
        period: "Jun 2018 – Apr 2021",
        responsibilities: [
          "Led front-end technical transformation with ElementUI-based reusable components.",
          "Optimized performance by removing redundant dependencies and minimizing blocking requests.",
          "Promoted decoupling: migrated from multi-page apps to a micro-frontend architecture."
        ]
      },
      {
        company: "SAP",
        position: "Web Front-End Developer",
        period: "Oct 2015 – Jun 2018",
        responsibilities: [
          "Developed financial data management tools using Fiori (JavaScript + HTML5).",
          "Built UI layouts for queries, charts, and forms; designed automated testing for both front-end and back-end services."
        ]
      },
      {
        company: "Ctrip (Trip.com)",
        position: "Software Engineer",
        period: "Oct 2014 – Oct 2015",
        responsibilities: [
          "Automated order pool processing (payment, confirmation, alerts).",
          "Designed order backup & restore system and a hotel night-stay statistics module.",
          "Improved order system performance, optimized DB load and reduced latency."
        ]
      }
    ],
    projects: [
      {
        name: "Manufacturing Problem-Solving AI Agent",
        role: "AI Agent / Knowledge Graph",
        period: "Tesla | Dec 2021 – Present",
        painPoints: ["On-site issues required experts; solutions were hard to retrieve and reuse consistently."],
        solutions: [
          "Designed a knowledge graph (Neo4j) to structure and store manufacturing problem data.",
          "Extracted core knowledge from issues using a paradigm combining LLMs and knowledge graphs.",
          "Converted natural language queries into single-step or multi-step graph queries to find solutions.",
          "Integrated knowledge and data queries into an assistant that lets LLMs select tools and provide final answers."
        ],
        results: "Improved on-site troubleshooting efficiency and reduced reliance on on-call engineers."
      },
      {
        name: "Company Data Analytics & Visualization AI Agent",
        role: "AI Agent Tooling",
        period: "Tesla | Dec 2021 – Present",
        painPoints: ["Data discovery and analysis were difficult for non-technical users."],
        solutions: [
          "Modularized internal analytics and visualization capabilities into agent tools.",
          "Co-developed a metadata query agent to interpret user input and retrieve relevant metadata.",
          "Co-developed a visualization agent to generate queries, retrieve authorized data, and visualize results.",
          "Co-developed a data analysis agent combining retrieved data with private knowledge bases to generate insights."
        ],
        results: "Enabled self-service data querying, visualization, and analysis."
      },
      {
        name: "Manufacturing Traceability Platform",
        role: "Full-Stack Development",
        period: "Tesla | Dec 2021 – Present",
        painPoints: ["Inconsistent data definitions and high cross-workshop data retrieval cost."],
        solutions: [
          "Designed a hybrid storage system using Neo4j + MongoDB.",
          "Built a data service platform with FastAPI + ReactJS, converting user inputs into optimized query strategies.",
          "Provided unified access via GraphQL for downstream business systems."
        ],
        results: "Reduced data retrieval cost and improved traceability across scenarios."
      },
      {
        name: "Data Visualization Platform",
        role: "Full-Stack Development",
        period: "Tesla | Dec 2021 – Present",
        painPoints: ["Teams needed interactive dashboards and configurable reports across heterogeneous data sources."],
        solutions: [
          "Designed and developed a platform based on FastAPI and ReactJS.",
          "Used ECharts and AntV to build interactive visualization components.",
          "Supported report push via email and IM messages."
        ],
        results: "Improved accessibility of analytics and reporting for internal stakeholders."
      }
    ],
    achievements: [
      "Manufacturing Problem-Solving Agent: During night shifts, ~70% of issues previously requiring on-call engineers could be resolved by technicians independently.",
      "Data Analytics & Visualization Agent: 200+ average daily active users; improved users’ ability to query and analyze data independently.",
      "Manufacturing Traceability Platform: 200+ average daily active users; estimated 2,000 engineering hours saved annually for quality and process engineers."
    ]
  }
};

export default resumeData;