const { Router } = require('express')

const router = Router()

// Mock Users
const depts = [
  {
    label: '中心部门',
    id: 1,
    children: [
      {
        label: '信息部',
        id: 11,
        parentId: 1,
        children: [
          {
            label: '测试组',
            id: 111,
            parentId: 11,
          }
        ]
      },
      {
        label: '市场部',
        id: 12,
        parentId: 1,
      }
    ]
  },
  {
    label: '省内高校',
    id: 2,
    children: [
      {
        label: '测试学校1',
        id: 21,
        parentId: 2,
        children: [
          {
            label: '学籍部门',
            id: 211,
            parentId: 21,
          },
          {
            label: '就业部门',
            id: 212,
            parentId: 21,
          }
        ]
      },
      {
        label: '测试学校2',
        id: 22,
        parentId: 2,
        children: [
          {
            label: '学籍部门',
            id: 221,
            parentId: 22,
          },
          {
            label: '就业部门',
            id: 222,
            parentId: 22,
          }
        ]
      },
    ]
  },
];

/* GET users listing. */
router.get('/api/dept/list', function (req, res, next) {
  res.json({errcode: 0, errmsg: 'ok', data: depts})
})

module.exports = router
