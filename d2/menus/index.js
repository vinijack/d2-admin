import { Menu } from 'd2/utils/menu.js'

export const dashboardIndexMenu = new Menu('控制台')
  .url('/dashboard')
  .icon('icon-park-outline:dashboard')

export const indexMenu = new Menu('首页')
  .url('/')
  .icon('icon-park-outline:home')

export const demoComponentScrollMenus = new Menu('滚动')
  .scope('/dashboard/demo/component/scroll')
  .icon('icon-park-outline:move')
  .add(new Menu('总览').index())
  .add(new Menu('基础').url('/base'))

export const demoComponentSvgMenus = new Menu('SVG')
  .icon('icon-park-outline:pic-one')
  .scope('/dashboard/demo/component/svg')
  .add(new Menu('总览').index())
  .add(new Menu('基础').url('/base'))
  .add(new Menu('尺寸').url('/size'))

export const demoComponentIconMenus = new Menu('图标')
  .icon('icon-park-outline:emotion-happy')
  .scope('/dashboard/demo/component/icon')
  .add(new Menu('总览').index())
  .add(new Menu('基础').url('/base'))

export const demoComponentBreakPointMenus = new Menu('断点')
  .icon('icon-park-outline:distribute-horizontally')
  .scope('/dashboard/demo/component/break-point')
  .add(new Menu('总览').index())
  .add(new Menu('基础').url('/base'))
  .add(new Menu('data').url('/data'))
  .add(new Menu('slot').url('/slot'))

export const demoComponentFlexMenus = new Menu('Flex')
  .icon('icon-park-outline:carousel')
  .scope('/dashboard/demo/component/flex')
  .add(new Menu('总览').index())
  .add(new Menu('display').url('/display'))
  .add(new Menu('nesting').url('/nesting'))
  .add(new Menu('self').url('/self'))
  .add(new Menu('wrap').url('/wrap'))
  .add(new Menu('center').url('/center'))
  .add(new Menu('grow').url('/grow'))
  .add(new Menu('order').url('/order'))
  .add(new Menu('content').url('/content'))
  .add(new Menu('layout').url('/layout'))
  .add(new Menu('playground').url('/playground'))
  .add(new Menu('tag').url('/tag'))
  .add(new Menu('all').url('/all'))

export const demoComponentMenus = new Menu('组件')
  .icon('icon-park-outline:components')
  .add(new Menu('总览').url('/dashboard/demo/component').index())
  .add(demoComponentScrollMenus)
  .add(demoComponentSvgMenus)
  .add(demoComponentIconMenus)
  .add(demoComponentBreakPointMenus)
  .add(demoComponentFlexMenus)

export const demoLayoutHeaderAsideMenus = new Menu('HeaderAside')
  .icon('icon-park-outline:page')
  .scope('/dashboard/demo/layout/header-aside')
  .add(new Menu('总览').index())
  .add(new Menu('基础').url('/base'))
  .add(new Menu('absolute').url('/absolute'))
  .add(new Menu('full').url('/full'))
  .add(new Menu('page-width').url('/page-width'))

export const demoLayoutMenus = new Menu('布局')
  .icon('icon-park-outline:page')
  .add(new Menu('总览').url('/dashboard/demo/layout').index())
  .add(demoLayoutHeaderAsideMenus)

export const documentMenus = new Menu('文档')
  .icon('icon-park-outline:doc-detail')
  .scope('/dashboard/document')
  .add([
    new Menu('doc-1').url('/page1'),
    new Menu('doc-2').url('/page2')
  ])
