// 1、创建一个axios实例
// 2、请求拦截器如果有token进行头部携带
// 3、相应拦截器：1、剥离无效数据  2、处理token失效
// 4、导出一个函数，调用当前的axios实例发请求，返回promise
import axios from 'axios'
import store from '@/store'
import router from '@/router'

const instance = axios.create({
  // 导出基准地址，原因：其它地方不是通过axios发请求的地方用基准地址
  baseURL: 'https://apipc-xiaotuxian-front.itheima.net/',
  timeout: 5000 
  // axios的一些配置，baseURL\timeout
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
  // 拦截业务逻辑  // 可以在此进行本地配置的的修改，如果本地又token又在本地携带
  const { profile } = store.state.user // 1、获取用户信息对象
  if (profile.token) { // 2、判断是否有token
    config.headers.Authorization=`Bearer ${profile.token}` // 3、设置token，这个token是store下面user里面的数据
  }
  return config
    }, err=>{
        // 对请求错误做些什么
        return Promise.reject(err)
    }
)

// 添加响应拦截器
// res.data 取出data数据，将来调用接口的时候拿到的就是后台的数据
instance.interceptors.response.use(err => {
  // 401状态码时进入该函数
  if (err.response && err.response.status === 401) {
    // 1、清空本地无效信息
    // 2、跳转到登录页码
    // 3、跳转需要传参（当前路由地址）给登录页码
    store.commit('user/setUser', {})
    // js模块中：router.currentRoute.value.fulPath就是当前路由地址。router.currentRoute是ref响应式
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath) // 仔细了解
    // encodeURIComponent转换url码防止解析地址出问题
    router.push('/login?redirectUrl='+fullPath)
  }
        return response
    },err=>{
        // 对响应错误做点什么
        return Promise.reject(err)
})
    // 请求工具函数
export default (url, method, submitData) => {
  // 负责发请求：请求地址，请求方式，提交的数据
  return instance({
    url,
    method,
    // 1、如果是get请求，需要使用params来传递submitData   ?a=10&c=10
    // 2、如果不是get请求  需要使用data来传递submitData   请求体传参--如post
    // []设置一个动态的key,写js表达式，js表达式的执行结果当作key
    // method参数：get,Get,GET 转换成小写再来判断的方法
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}