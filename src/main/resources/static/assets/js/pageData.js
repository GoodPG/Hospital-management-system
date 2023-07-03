

(function () {
  /* tableHead: 表头配置对象   key：为data的字段名，value为表头汉字 */
  function Table(obj) {
    let { tableHead, data, node, caozuo = undefined } = obj
    let header = [
      { title: '姓名', key: 'name' },
      { title: '年龄', key: 'age' },
      { title: '操作', btn: ['删除', '修改'] },
    ]
    let mydata = [
      { name: '张三', age: '18' },
      { name: '张三', age: '18' },
      { name: '张三', age: '18' },
      { name: '张三', age: '18' },
      { name: '张三', age: '18' }
    ]
    $(node).empty()
    $(node).html(`
    <thead>
      <tr></tr>
    </thead>
    <tbody></tbody>
    `)

    header.forEach((item) => {
      $(`${node} thead tr`).append(`<th>${item.title}</th>`)
    });
    mydata.forEach((item) => {
      if (caozuo) {
        $(`${node} tbody`).append(`<tr>
          
        </tr>`)
      }
    })
  }
  window.show = {
    Table
  }
})()
