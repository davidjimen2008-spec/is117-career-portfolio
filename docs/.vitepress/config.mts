import { defineConfig } from 'vitepress'
export default defineConfig({
 title: 'Web Development Career Research',
 description: 'IS117 career research',
 base: '/is117-career-portfolio/',
 themeConfig: {
 nav: [{text:'Home',link:'/'},{text:'Role Cards',link:'/research/roles'},{text:'Comparison',link:'/research/comparison'},{text:'Portfolio Plan',link:'/portfolio/plan'},{text:'Review Log',link:'/review/log'}],
 sidebar: [{text:'Research',items:[{text:'Role Cards',link:'/research/roles'},{text:'Comparison',link:'/research/comparison'}]},{text:'Project',items:[{text:'Portfolio Plan',link:'/portfolio/plan'},{text:'Review Log',link:'/review/log'}]}]
 }
})
