
// import pages from '@/views';
const pages = [];

const datas = [
  {
    title: '系统管理',
    path: '/system',
    icon: 'system',
    children: [
      /*{
        title: '通讯录',
        path: '/system/contacts',
        icon: 'account ',
      },*/
      {
        title: '用户管理',
        path: '/system/user',
        icon: 'account',
      },
      {
        title: '部门管理',
        path: '/system/dept',
        icon: 'dept',
      },
      {
        title: '标签管理',
        path: '/system/tag',
        icon: 'tag',
      },
      {
        title: '字典管理',
        path: '/system/dict',
        icon: 'dict',
      },
      {
        title: '证书管理',
        path: '/system/cert',
        icon: 'cert',
      },
      {
        title: '分站管理',
        path: '/system/site',
        icon: 'site',
      },
      {
        title: '操作日志',
        path: '/system/log',
        icon: 'log',
      },
    ],
  },
  {
    title: '企业管理',
    path: '/corp',
    icon: 'corp',
    children: [
      {
        title: '注册审核',
        path: '/corp/check',
        icon: 'shenhe',
      },
      {
        title: '信息认证',
        path: '/corp/info',
        icon: 'renzheng',
      },
      {
        title: '积分体系',
        path: '/corp/points',
        icon: 'jifen',
      },
      {
        title: '企业用户',
        path: '/corp/user',
        icon: 'corpuser',
      },
    ],
  },
  {
    title: '招聘管理',
    path: '/job',
    icon: 'job',
    children: [
      {
        title: '招聘信息',
        path: '/job/job-info',
        icon: 'info',
      },
      {
        title: '招聘会',
        path: '/job/job-fair',
        page: 'job.fair',
        icon: 'info',
      },
      {
        title: '校园宣讲会',
        path: '/job/campus-talk',
        icon: 'info',
      },
    ],
  },
  {
    title: '信息发布',
    path: '/cms',
    icon: 'news',
    children: [
      {
        title: '通知公告',
        path: '/cms/notice',
        icon: 'column',
      },
      {
        title: '政策法规',
        path: '/cms/policy',
        icon: 'column',
      },
      {
        title: '新闻栏目',
        path: '/cms/news',
        icon: 'column',
      },
    ],
  },
  {
    title: '友情链接',
    icon: 'menu',
    children: [
      {
        title: '中心网站',
        url: 'http://www.jilinjobs.cn',
        target: '_blank',
        icon: 'lianjie',
      },
      {
        title: '吉林省教育厅',
        url: 'http://www.jledu.gov.cn/jyt/',
        target: '_blank',
        icon: 'lianjie',
      },
      {
        title: '学信网',
        url: 'http://www.chsi.com.cn/',
        target: '_blank',
        icon: 'lianjie',
      },
      {
        title: '全国大学生就业一站式服务系统',
        url: 'http://jilinbys.ncss.org.cn/',
        target: '_blank',
        icon: 'lianjie',
      },
      {
        title: '新职业',
        tooltip: '教育部大学生就业网',
        url: 'http://www.ncss.org.cn/',
        target: '_blank',
        icon: 'lianjie',
      },
    ],
  },
];

export const MapMenu = item => ({
  title: item.title,
  options: {
    icon: item.icon,
    path: item.path,
    url: item.url,
    target: item.target,
    tooltip: item.tooltip
  },
  children: (item.children || []).map(MapMenu),
});


function DeepGetPropertyValue(obj, name) {
  if (!obj) {
    return undefined;
  }
  const names = name.split('.', 2);
  if (names.length === 1) {
    return obj[name];
  }
  return DeepGetPropertyValue(obj[names[0]], names[1]);
}

/**
 *
 * @param {*} catalog 父节点的路径信息
 * 菜单定义
 *  title 菜单标题
 *  tooltip 提示信息
 *  icon 菜单图标,如果使用element-ui的图标，直接用图标全名，如：el-icon-menu;如果使用naf图标，只写图标名字，如：user，实际上使用图标naf-icon-user
 *  children 子菜单项
 *  url 外链地址
 *  target 打开方式：_self、_blank
 *  path 路由路径
 *  page 页面，可以是两种形式：1.页面名（从pages中获取）2.页面对象（直接加载显示）。url和page不能同时出现
 */
const MapRoute = (catalog = []) => item => [{
  path: item.path,
  component: typeof (item.page) === 'string' ? DeepGetPropertyValue(pages, item.page) : item.page || pages.Error404,
  meta: { catalog: catalog.concat(item.title) },
},
].concat((item.children || []).map(MapRoute(catalog.concat(item.title)))
  .reduce((p, c) => p.concat(c), [])
  .filter(p => p.path));


export const menus = datas.map(MapMenu);
export const routes = datas.map(MapRoute())
  .reduce((p, c) => p.concat(c), [])
  .filter(p => p.path);
