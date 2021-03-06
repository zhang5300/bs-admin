import request from '@/utils/request'

export function getAllSysUsers(page_size, page_num) {
  const data = {
    page_size,
    page_num
  }
  return request({
    url: '/api/admin/sys_user/allusers',
    method: 'post',
    data
  })
}

export function resetPassword(id) {
  const data = {
    id
  }
  return request({
    url: '/api/admin/sys_user/updateUserPwd',
    method: 'post',
    data
  })
}

export function deleteUser(id) {
  const data = {
    id
  }
  return request({
    url: '/api/admin/sys_user/deleteUser',
    method: 'post',
    data
  })
}

export function newUser(info) {
  const data = {
    username: info.username,
    nickname: info.nickname,
    name: info.name,
    password: info.password,
    avatar: info.avatar
  }
  return request({
    url: '/api/admin/sys_user/newUser',
    method: 'post',
    data
  })
}

export function updateUser(info) {
  const data = {
    id: info.id,
    username: info.username,
    nickname: info.nickname,
    name: info.name,
    password: info.password,
    avatar: info.avatar
  }
  return request({
    url: '/api/admin/sys_user/updateUser',
    method: 'post',
    data
  })
}

export function userInfo() {
  const data = {

  }
  return request({
    url: '/api/admin/sys_user/info',
    method: 'post',
    data
  })
}

export function getUserDetail(id) {
  const data = {
    id
  }
  return request({
    url: '/api/admin/sys_user/getUserDetail',
    method: 'post',
    data
  })
}
