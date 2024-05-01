import { defineConfig } from 'vitepress'
import { set_sidebar } from './autoSider.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "SOULBOX",
    description: "关注前端技术",
    srcDir: "docs", // 配置md文档的映射目录，默认根路径
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'seo', link: '/seo/' },
            { text: 'ui', link: '/ui/' },
            { text: 'js', link: '/js/' },
            { text: 'photo', link: '/photo/' },
            // {
            //     text: 'other',
            //     items: [
            //         { text: 'Item A', link: '/item-1' },
            //         { text: 'Item B', link: '/item-2' }
            //     ]
            // }
            
        ],

        sidebar: {
            '/js/': [
                {
                    text: 'js',
                    collapsed: false,
                    items: set_sidebar('/docs/js'),
                }
            ],
            '/ui/': [
                {
                    text: 'ui',
                    collapsed: false,
                    items: set_sidebar('/docs/ui'),
                }
            ],
            '/seo/': [
                {
                    text: 'seo',
                    collapsed: false,
                    items: set_sidebar('/docs/seo'),
                }
            ],
            '/photo/': [
                {
                    text: 'photo',
                    collapsed: false,
                    items: set_sidebar('/docs/photo'),
                }
            ],
            // '/other/': [
            //     {
            //         text: 'other',
            //         collapsed: false,
            //         items: [
            //             { text: '测试1', link: '/other/测试1' },
            //             { text: '测试2', link: '/other/测试2' }
            //         ]
            //     }
            // ],
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        },

        // 设置搜索框的样式
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "搜索文档",
                    },
                    modal: {
                        noResultsText: "无法找到相关结果",
                        resetButtonTitle: "清除查询条件",
                        footer: {
                            selectText: "选择",
                            navigateText: "切换",
                        },
                    },
                }
            }
        },

    },
    // 配置markdown扩展
    markdown: {
        lineNumbers: true, // 开启代码块行号
    },
    // 时间戳
    lastUpdated: true,
})


