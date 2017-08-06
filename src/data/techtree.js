/**
 * An array of skills. Each skill contains the following properties:
 * - id
 * - names, an object with locale as key and name as value, en is default locale
 * - children, an array of more detailed skills
 */
export default [
    {
        id: 'design',
        names: {
            en: 'Design',
            zh: '设计'
        },
        children: [
            {
                id: 'ui-design',
                names: {
                    en: 'UI Design',
                    zh: '界面设计'
                },
                children: []
            },
            {
                id: 'ux-design',
                names: {
                    en: 'UX Design',
                    zh: '用户体验设计'
                },
                children: []
            },
            {
                id: 'graphic-design',
                names: {
                    en: 'Graphic Design',
                    zh: '平面设计'
                }
            }
        ]
    },
    {
        id: 'development',
        names: {
            en: 'Development',
            zh: '开发'
        },
        children: [
            {
                id: 'web-dev',
                names: {
                    en: 'Web Development',
                    zh: 'Web 开发'
                },
                children: [
                    {
                        id: 'html',
                        names: {
                            en: 'HTML'
                        }
                    },
                    {
                        id: 'css',
                        names: {
                            en: 'CSS'
                        },
                        children: [
                            {
                                id: 'sass',
                                names: {
                                    en: 'SaSS'
                                }
                            },
                            {
                                id: 'less',
                                names: {
                                    en: 'LESS'
                                }
                            },
                            {
                                id: 'bootstrap',
                                names: {
                                    en: 'Bootstrap'
                                }
                            },
                            {
                                id: 'foundation',
                                names: {
                                    en: 'Foundation'
                                }
                            }
                        ]
                    },
                    {
                        id: 'javascript',
                        names: {
                            en: 'JavaScript'
                        },
                        children: [
                            {
                                id: 'jquery',
                                names: {
                                    en: 'jQuery',
                                }
                            },
                            {
                                id: 'backbone',
                                names: {
                                    en: 'Backbone'
                                }
                            },
                            {
                                id: 'angular',
                                names: {
                                    en: 'Angular'
                                }
                            },
                            {
                                id: 'react',
                                names: {
                                    en: 'React'
                                }
                            },
                            {
                                id: 'vue',
                                names: {
                                    en: 'Vue'
                                }
                            }
                        ]
                    },
                    {
                        id: 'web-dev-tools',
                        names: {
                            en: 'Web Development Tools',
                            zh: 'Web 开发工具'
                        },
                        children: [
                            {
                                id: 'gulp',
                                names: {
                                    en: 'Gulp'
                                }
                            },
                            {
                                id: 'grunt',
                                names: {
                                    en: 'Grunt'
                                }
                            },
                            {
                                id: 'webpack',
                                names: {
                                    en: 'Webpack'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: 'mobile-app-dev',
                names: {
                    en: 'Mobile App Development',
                    zh: '移动应用开发'
                },
                children: [
                    {
                        id: 'android-app-dev',
                        names: {
                            en: 'Android App Development',
                            zh: 'Android 应用开发'
                        },
                        children: []
                    },
                    {
                        id: 'ios-app-dev',
                        names: {
                            en: 'iOS App Development',
                            zh: 'iOS 应用开发'
                        },
                        children: []
                    },
                    {
                        id: 'wp-app-dev',
                        names: {
                            en: 'Windows Phone/Mobile App Development'
                        },
                        children: []
                    }
                ]
            },
            {
                id: 'database',
                names: {
                    en: 'Database',
                    zh: '数据库'
                },
                children: [
                    {
                        id: 'sql-db',
                        names: {
                            en: 'SQL Database/Relation Database',
                            zh: 'SQL 数据库/关系型数据库'
                        },
                        children: [
                            {
                                id: 'mysql',
                                names: {
                                    en: 'MySQL'
                                },
                            },
                            {
                                id: 'mariadb',
                                names: {
                                    en: 'MariaDB'
                                }
                            },
                            {
                                id: 'postgres',
                                names: {
                                    en: 'PostgreSQL'
                                }
                            },
                            {
                                id: 'sqlite',
                                names: {
                                    en: 'SQLite'
                                }
                            }
                        ]
                    },
                    {
                        id: 'nosql-db',
                        names: {
                            en: 'NoSQL Database',
                            zh: 'NoSQL 数据库',
                        },
                        children: [
                            {
                                id: 'mongodb',
                                names: {
                                    en: 'MongoDB'
                                }
                            },
                            {
                                id: 'couchdb',
                                names: {
                                    en: 'CouchDB'
                                }
                            },
                            {
                                id: 'redis',
                                names: {
                                    en: 'Redis'
                                }
                            },
                            {
                                id: 'leveldb',
                                names: {
                                    en: 'LevelDB'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: 'server',
                names: {
                    en: 'Server Administration',
                    zh: '服务器管理'
                },
                children: [
                    {
                        id: 'linux-server',
                        names: {
                            en: 'Linux Server',
                            zh: 'Linux 服务器'
                        },
                        children: [
                            {
                                id: 'bash-script',
                                names: {
                                    en: 'Bash Script',
                                    zh: 'Bash 脚本'
                                }
                            },
                            {
                                id: 'apache',
                                names: {
                                    en: 'Apache'
                                }
                            },
                            {
                                id: 'nginx',
                                names: {
                                    en: 'nginx'
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
