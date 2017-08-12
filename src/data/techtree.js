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
                id: 'general-programming',
                names: {
                    en: 'General Programming',
                    zh: '通用编程'
                },
                children: [
                    {
                        id: 'c',
                        names: {
                            en: 'C'
                        },
                        children: []
                    },
                    {
                        id: 'cpp',
                        names: {
                            en: 'C++'
                        },
                        children: [
                            {
                                id: 'qt',
                                names: {
                                    en: 'Qt'
                                }
                            },
                            {
                                id: 'gtk',
                                names: {
                                    en: 'GTK'
                                }
                            }
                        ]
                    },
                    {
                        id: 'csharp',
                        names: {
                            en: 'C#'
                        },
                        children: []
                    },
                    {
                        id: 'go',
                        names: {
                            en: 'Go'
                        },
                        children: []
                    },
                    {
                        id: 'java',
                        names: {
                            en: 'Java'
                        },
                        children: [
                            {
                                id: 'java-ee',
                                names: {
                                    en: 'Java EE'
                                }
                            },
                            {
                                id: 'spring',
                                names: {
                                    en: 'Spring Framework'
                                }
                            }
                        ]
                    },
                    {
                        id: 'lua',
                        names: {
                            en: 'Lua'
                        },
                        children: []
                    },
                    {
                        id: 'objective-c',
                        names: {
                            en: 'Objective-C'
                        },
                        children: []
                    },
                    {
                        id: 'perl',
                        names: {
                            en: 'Perl'
                        },
                        children: []
                    },
                    {
                        id: 'python',
                        names: {
                            en: 'Python'
                        },
                        children: []
                    },
                    {
                        id: 'rust',
                        names: {
                            en: 'Rust'
                        },
                        children: []
                    },
                    {
                        id: 'scala',
                        names: {
                            en: 'Scala'
                        },
                        children: []
                    },
                    {
                        id: 'swift',
                        names: {
                            en: 'Swift'
                        },
                        children: []
                    }
                ]
            },
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
                        id: 'php',
                        names: {
                            en: 'PHP'
                        },
                        children: [
                            {
                                id: 'laravel',
                                names: {
                                    en: 'Laravel'
                                }
                            },
                            {
                                id: 'zend',
                                names: {
                                    en: 'Zend Framework'
                                }
                            },
                            {
                                id: 'cakephp',
                                names: {
                                    en: 'CakePHP'
                                }
                            },
                            {
                                id: 'codeigniter',
                                names: {
                                    en: 'CodeIgniter'
                                }
                            },
                            {
                                id: 'symfony',
                                names: {
                                    en: 'Symfony'
                                }
                            },
                            {
                                id: 'phpunit',
                                names: {
                                    en: 'PHPUnit'
                                }
                            },
                            {
                                id: 'wordpress',
                                names: {
                                    en: 'WordPress'
                                }
                            },
                            {
                                id: 'drupal',
                                names: {
                                    en: 'Drupal'
                                }
                            },
                            {
                                id: 'joomla',
                                names: {
                                    en: 'Joomla'
                                }
                            },
                            {
                                id: 'mediawiki',
                                names: {
                                    en: 'MediaWiki'
                                }
                            }
                        ]
                    },
                    {
                        id: 'nodejs',
                        names: {
                            en: 'NodeJS'
                        },
                        children: [
                            {
                                id: 'express',
                                names: {
                                    en: 'Express Framework',
                                    zh: 'Express 框架'
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
                            en: 'Windows Phone App Development'
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
            },
            {
                id: 'game-dev',
                names: {
                    en: 'Game Development',
                    zh: '游戏开发'
                },
                children: [
                    {
                        id: 'unity',
                        names: {
                            en: 'Unity'
                        }
                    },
                    {
                        id: 'unreal',
                        names: {
                            en: 'Unreal Engine',
                            zh: '虚幻引擎'
                        }
                    }
                ]
            }
        ]
    }
];
