module.exports = {
  title: 'vue press',
  description: 'vue press description',
  port: 2222,
  themeConfig: {
    nav: [
      {
        text: '无下拉菜单',
        link: 'https://www.baidu.com/'
      },
      {
        text: '菜单1',
        items: [
          { text: '要点1', link: '/menu1/point1/' },
          { text: '要点2', link: '/menu1/point2/' }
        ]
      },
      {
        text: '菜单2',
        link: '/menu2/'
      },
    ],
    sidebar: {
      '/menu1/point1/': [
        {
          title: '要点1',
          collapsable: false,
          children: [
            '/menu1/point1/',
            '/menu1/point1/test1.md',
            '/menu1/point1/test2.md',
            '/menu1/point1/test3.md',
            '/menu1/point1/test4.md',
          ]
        },
      ],
      '/menu2/': [
        {
          title: '要点1',
          collapsable: false,
          children: [
            '/menu2/',
            '/menu2/point1/',
            '/menu2/point1/test1.md',
          ]
        },
      ],
    }
  }
}