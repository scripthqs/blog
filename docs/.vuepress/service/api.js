import request from './request'
// 查询生词本
export function getCategory(params) {
  return request({
    url: `/studylist/category`,
    method: 'get',
    params
  })
}

// 查询生词
export function getWords(params) {
  return request({
    url: `studylist/words/`,
    method: 'get',
    params
  })
}


// 删除生词
export function deleteWords(params) {
  return request({
    url: `studylist/words/`,
    method: 'delete',
    data: params
  })
}
