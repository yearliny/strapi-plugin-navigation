const zh = {
  plugin: {
    name: 'UI导航',
    section: {
      name: '导航插件',
      item: '配置',
    },
  },
  header: {
    title: '导航',
    description: '定义您的门户导航',
    meta: 'ID: { id }, 标识: { key }',
    action: {
      newItem: '新建项目',
      manage: '管理',
      collapseAll: '全部折叠',
      expandAll: '全部展开',
    },
  },
  submit: {
    cta: {
      cancel: '取消',
      save: '保存',
    },
  },
  empty: {
    description: '您的导航为空',
    cta: '创建第一个项目',
  },
  popup: {
    navigation: {
      manage: {
        header: {
          LIST: '所有导航',
          CREATE: '新建导航',
          DELETE: '删除中',
          ERROR: '错误',
          EDIT: '正在编辑 "{name}"',
        },
        button: {
          cancel: '取消',
          delete: '删除',
          save: '保存',
          edit: '编辑',
          create: '创建',
          goBack: '返回',
          purge: '清除读取缓存',
        },
        table: {
          id: 'ID',
          name: '名称',
          locale: '语言环境版本',
          visibility: '可见性',
          hasSelected: '已选择{count}项',
        },
        footer: {
          button: {
            purge: '清除',
          },
        },
        purge: {
          header: '此操作将清除API读取缓存，会导致以下导航的读取速度暂时变慢',
        },
        delete: {
          header: '以下导航将被删除:',
        },
        error: {
          header: '发生错误 :(',
          message: '处理请求时出错',
        },
        navigation: {
          visible: '可见',
          hidden: '隐藏',
        },
      },
      form: {
        name: {
          label: '名称',
          placeholder: '导航名称',
          validation: {
            name: {
              required: '名称是必填项',
              tooShort: '名称太短',
              alreadyUsed: '名称已被使用',
            },
            visible: {
              required: '必须选择可见性',
            },
          },
        },
        visible: {
          label: '可见性',
          toggle: {
            visible: '可见',
            hidden: '隐藏',
          }
        },
      },
    },
    item: {
      header: {
        view: '查看导航项目',
        edit: '编辑导航项目',
        new: '新建导航项目',
      },
      form: {
        title: {
          label: '标题',
          autoSync: {
            label: '从关联项读取字段',
          },
          placeholder: '输入项目标题或留空以从关联实体获取',
        },
        uiRouterKey: {
          label: 'UI路由键',
          placeholder: '如果为空，将根据"标题"自动生成',
        },
        uiRouter: {
          unableToRender: '由于包含不支持的字符，无法生成标识和 / 或UI路由键'
        },
        path: {
          label: 'URL',
          placeholder: '唯一标识此项目的URL部分',
          preview: '预览:',
        },
        externalPath: {
          label: '外部URL',
          placeholder: '链接到外部资源',
          validation: {
            type: '此值不是有效的URL',
          },
        },
        menuAttached: {
          label: '附加到菜单',
          value: {
            yes: '是',
            no: '否',
          },
        },
        type: {
          label: '导航项目类型',
          internal: {
            label: '内部资源',
          },
          external: {
            label: '外部资源',
            description: '输出路径: {value}',
          },
          wrapper: {
            label: '包装元素',
          },
        },
        audience: {
          label: '受众',
          placeholder: '选择受众...',
          empty: '没有更多受众',
        },
        relatedSection: {
          label: '关联到',
        },
        relatedType: {
          label: '内容类型',
          placeholder: '选择内容类型...',
          empty: '没有可选的内容类型',
        },
        related: {
          label: '实体',
          placeholder: '选择实体...',
          empty: '没有更多"{contentTypeName}"类型的实体可选',
        },
        i18n: {
          locale: {
            label: '从何处复制详情',
            placeholder: '语言环境',
            button: '复制',
            error: {
              generic: '无法复制项目',
              unavailable: '语言环境版本不可用',
            },
          },
        },
        button: {
          create: '创建项目',
          update: '更新项目',
          restore: '恢复项目',
          remove: '删除',
          save: '保存',
          cancel: '取消',
        },
      },
    },
  },
  notification: {
    navigation: {
      submit: '导航更改已保存',
      error: '路径"{path}"在父项"{parentTitle}"中重复，影响了{errorTitles}个项目',
      item: {
        relation: '实体关联不存在!',
        status: {
          draft: '草稿',
          published: '已发布',
        },
      },
    },
    error: {
      common: '处理请求时出错',
      customField: {
        type: '不支持的自定义字段类型',
        media: {
          missing: '缺少媒体输入组件',
        },
      },
      item: {
        relation: '某些项目中提供的关联不正确',
        slug: '无法从"{query}"创建有效的UI路由键(标识)。收到"{result}"',
      },
    }
  },
  pages: {
    auth: {
      noAccess: '无访问权限',
      not: {
        allowed: '抱歉！您似乎无权访问此页面...',
      },
    },
    main: {
      search: {
        placeholder: '输入开始搜索...',
        subLabel: '按ENTER键高亮下一个项目',
      },
      header: {
        localization: {
          select: {
            placeholder: '选择语言环境',
          },
        },
      },
    },
    settings: {
      title: '导航设置',
      general: {
        title: '常规设置',
      },
      additional: {
        title: '附加设置',
      },
      customFields: {
        title: '自定义字段设置',
      },
      nameField: {
        title: '内容类型设置',
      },
      restoring: {
        title: '恢复',
      },
      section: {
        title: '导航插件',
        subtitle: '配置',
      },
      header: {
        title: '导航',
        description: '配置导航插件',
      },
      form: {
        cascadeMenuAttached: {
          label: '级联菜单附加',
          hint: '如果不想"菜单附加"级联到子项目，请禁用',
        },
        preferCustomContentTypes: {
          label: '首选API内容类型',
          hint: '是否仅使用api::前缀的内容类型',
        },
        contentTypes: {
          label: '启用导航',
          placeholder: '例如：页面、文章',
          hint: '如果未选择任何内容类型，则不会启用任何内容类型',
        },
        i18n: {
          label: '国际化',
          hint: '启用国际化功能',
          hintMissingDefaultLocale: '缺少默认语言环境!',
        },
        allowedLevels: {
          label: '允许层级',
          placeholder: '例如：2',
          hint: '可将项目标记为"菜单附加"的最大层级',
        },
        audience: {
          label: '受众',
          hint: '启用受众字段',
        },
        nameField: {
          default: '默认',
          label: '名称字段',
          placeholder: '至少选择一个或留空使用默认值',
          hint: '如果留空，名称字段将按顺序使用以下字段：“title”、“subject”和“name”',
          empty: '此内容类型没有任何字符串属性',
        },
        populate: {
          label: '要填充的字段',
          placeholder: '至少选择一个或留空以禁用填充关联字段',
          hint: '选中的关联字段将在API响应中填充',
          empty: '此内容类型没有任何关联字段',
        },
        pathDefaultFields: {
          label: '路径默认字段',
          placeholder: '至少选择一个或留空以禁用使用属性值填充路径字段',
          hint: '所选属性的值将作为内部路径的默认值',
          empty: '此内容类型没有任何合适的属性',
        },
        contentTypesSettings: {
          label: '内容类型',
          tooltip: '按内容类型的自定义配置',
          initializationWarning: {
            title: '警告',
            content: '- 内容类型尚未初始化。请先初始化才能在可视化编辑器中使用',
          },
        },
        customFields: {
          table: {
            confirmation: {
              header: '删除自定义字段',
              message: '此操作将从导航项目中删除所有自定义字段值',
              confirm: '继续',
              error: '删除自定义字段时出错',
            },
            header: {
              name: '名称',
              label: '标签',
              type: '类型',
              required: '必填',
            },
            footer: '创建新自定义字段',
            edit: '编辑自定义字段',
            enable: '启用自定义字段',
            disable: '禁用自定义字段',
            remove: '删除自定义字段',
            required: '必填',
            notRequired: '非必填',
          },
          popup: {
            header: {
              edit: '编辑自定义字段',
              new: '添加新自定义字段',
            },
            name: {
              label: '自定义字段名称',
              placeholder: '示例名称',
              description: '自定义字段名称必须唯一',
            },
            label: {
              label: '自定义字段标签',
              placeholder: '示例标签',
              description: '此标签将显示在导航项目表单上',
            },
            type: {
              label: '自定义字段类型',
              description: '自定义字段类型，定义其显示方式',
            },
            required: {
              label: '必填字段',
              description: '启用此字段不会更改已存在的导航项目',
            },
            options: {
              label: '选择输入选项',
              description: '使用“;”分隔选项',
            },
            multi: {
              label: '启用多选项输入',
              description: '允许单选或多选',
            },
          },
        },
      },
      actions: {
        submit: '保存配置',
        restore: {
          label: '恢复配置',
          confirmation: {
            header: '您要继续吗?',
            confirm: '恢复',
            description: '插件配置将从plugins.js文件恢复',
          },
          description: '恢复插件配置将导致其被替换为plugins.js文件中保存的配置',
        },
        restart: {
          label: '重启Strapi',
          alert: {
            title: '需要重启Strapi',
            description: '您已更改了需要重启Strapi应用程序才能生效的配置。请手动重启或使用下方触发器',
            close: '放弃',
            cancel: '取消',
            reason: {
              I18N: '国际化(i18n)更改将生效',
              GRAPH_QL: 'GraphQL更改将生效',
              I18N_NAVIGATIONS_PRUNE: '过时的语言环境导航将被移除',
            },
          },
        },
        disableI18n: {
          confirmation: {
            header: '禁用国际化',
            confirm: '我理解',
            description: {
              line1: '您正在禁用导航的国际化功能。不同语言环境的导航将无法通过此插件查看和修改',
              line2: '您可以选择移除其他语言环境的导航',
              line3: '注意！移除操作不可逆',
            },
          },
          prune: {
            label: '过时导航',
            on: '移除',
            off: '保留',
          },
        },
      },
      notification: {
        fetch: {
          error: '获取配置失败。正在重试...',
        },
        submit: {
          success: '配置已成功更新',
          error: '配置更新失败',
        },
        restore: {
          success: '配置已成功恢复',
          error: '配置恢复失败',
        },
        restart: {
          success: '应用程序已成功重启',
          error: '重启应用程序失败。请尝试手动重启',
        },
      },
    },
    view: {
      actions: {
        i18nCopyItems: {
          confirmation: {
            header: '确认',
            confirm: '复制',
            content: '您要复制导航项目吗?',
          },
        },
      },
    },
  },
  components: {
    toggle: {
      enabled: '已启用',
      disabled: '已禁用',
    },
    navigationItem: {
      action: {
        newItem: '添加嵌套项目',
        edit: '编辑',
        view: '查看',
        restore: '恢复',
        remove: '删除',
      },
      badge: {
        removed: '已删除',
        draft: '草稿',
        published: '已发布',
      },
      related: {
        localeMissing: '(缺少语言环境版本)'
      },
    },
    confirmation: {
      dialog: {
        button: {
          cancel: '取消',
          confirm: '确认',
        },
        description: '您要继续吗?',
        header: '确认',
      },
    },
    notAccessPage: {
      back: '返回首页',
    },
  },
  view: {
    i18n: {
      fill: {
        option: '{locale}语言环境',
        cta: {
          header: '或初始化',
          button: '复制',
        },
      },
    },
  },
};

export default zh;

export type ZH = typeof zh;