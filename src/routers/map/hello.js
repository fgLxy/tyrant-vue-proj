// import hello from '@/views/hello' // <写法一> 走正常的预编译，最终在prod环境下合入app.js
const hello = resolve => require(['@/views/hello'], resolve) // <写法二> 懒加载用这种写法，会打包成不同的chunk， 默认的chunkName：app
// const hello = r => require.ensure([], () => r(require('@/views/hello')), 'helloworld') // <写法三>按组:helloworld分块
export default {
    path: '/hello',
    component: hello,
    redirect: '/hello/fir',  /*默认为第一个显示二级路由*/
    meta: {transitionType: 'slide'}
}
