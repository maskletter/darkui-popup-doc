import { defineConfig } from 'dumi';

export default defineConfig({
  title: '@darkui/popup',
  mode: 'site',
  // rules: [
  //   {
  //     test: /.mjs$/,
  //     include: /node_modules/,
  //     type: "javascript/auto"
  //   },
  // ],
  styles: [`
    .__dumi-default-navbar-logo { background: none !important;position: relative; }
    .__dumi-default-navbar-logo::before {
      content: '';
      width: 40px;
      height: 40px;
      display: inline-block;
      position: absolute;
      left: 0px;
      border-radius: 50%;
      background: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F30%2F20200330091314_yNVUZ.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662343294&t=9b711c998b52764f1c28fecabfb831af) center / 100% 100%;
    }
  `],
  chainWebpack(memo) {
    memo.module.rule('mjs').test(/.mjs$/).type('javascript/auto')//.include.set(/node_modules/)
  },
  logo: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F30%2F20200330091314_yNVUZ.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662343294&t=9b711c998b52764f1c28fecabfb831af'
  // more config: https://d.umijs.org/config
});
