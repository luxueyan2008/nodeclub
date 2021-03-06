/**
 * config
 */

var path = require('path');

exports.config = {
  debug: false,
  name: 'WEB 攻城老湿',
  description: 'WEB 攻城老湿 是用Node.js开发的社区软件',
  version: '0.2.2',

  // site settings
  site_headers: [
    '<meta name="author" content="EDP@TAOBAO" />',
  ],
  host: 'http://myclub.ap01.aws.af.cm',
  site_logo: '<img src="/images/mylogo.png"/>', // default is `name`
  site_navs: [
    // [ path, title, [target=''] ]
    [ '/about', '关于' ],
  ],
  site_static_host: '', // 静态文件存储域名
  site_enable_search_preview: false, // 开启google search preview
  site_google_search_domain:  'cnodejs.org',  // google search preview中要搜索的域名

  upload_dir: path.join(__dirname, 'public', 'user_data', 'images'),

  db: "mongodb://luxueyan:luxueyan881123@linus.mongohq.com:10043/myclub_luxueyan",
  session_secret: 'luxueyan_club',
  auth_cookie_name: 'luxueyan_club',
  port: 80,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // 限制发帖时间间隔，单位：毫秒
  post_interval: 10000,

  // RSS
  rss: {
    title: 'WEB 攻城老湿中文社区',
    link: 'http://myclub.ap01.aws.af.cm',
    language: 'zh-cn',
    description: 'WEB 攻城老湿中文社区',

    //最多获取的RSS Item数量
    max_rss_items: 50
  },
 
  // site links
  site_links: [
    {
      'text': 'Node 官方网站',
      'url': 'http://nodejs.org/'
    },
    {
      'text': 'Node Party',
      'url': 'http://party.cnodejs.net/'
    },
    {
      'text': 'Node 入门',
      'url': 'http://nodebeginner.org/index-zh-cn.html'
    },
    {
      'text': 'Node 中文文档',
      'url': 'http://docs.cnodejs.net/cman/'
    }
  ],

  // sidebar ads
  side_ads: [
    // {
    //   'url': 'http://www.upyun.com/?utm_source=nodejs&utm_medium=link&utm_campaign=upyun&md=nodejs',
    //   'image': 'http://site-cnode.b0.upaiyun.com/images/upyun_logo.png',
    //   'text': ''
    // },
    // {
    //   'url': 'http://ruby-china.org/?utm_source=nodejs&utm_medium=link&utm_campaign=upyun&md=nodejs',
    //   'image': 'http://site-cnode.b0.upaiyun.com/images/ruby_china_logo.png',
    //   'text': ''
    // },
    // {
    //   'url': 'http://adc.taobao.com/',
    //   'image': 'http://adc.taobao.com/bundles/devcarnival/images/d2_180x250.jpg',
    //   'text': ''
    // }
  ],

  // mail SMTP
  mail_opts: {
    host: 'smtp.126.com',
    port: 25,
    auth: {
      user: 'luxueyan2008@126.com',
      pass: 'luxueyan200888'
    }
  },

  //weibo app key
  weibo_key: 10000000,

  // admin 可删除话题，编辑标签，设某人为达人
  admins: { luxueyan: true },

  // [ { name: 'plugin_name', options: { ... }, ... ]
  plugins: [
    // { name: 'onehost', options: { host: 'localhost.cnodejs.org' } },
    // { name: 'wordpress_redirect', options: {} }
  ]
};
