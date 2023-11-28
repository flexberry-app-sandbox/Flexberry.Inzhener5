import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.inzhener5.caption'),
          title: i18n.t('forms.application.sitemap.inzhener5.title'),
          children: [{
            link: 'i-i-s-inzhener5-инженер-l',
            caption: i18n.t('forms.application.sitemap.inzhener5.i-i-s-inzhener5-инженер-l.caption'),
            title: i18n.t('forms.application.sitemap.inzhener5.i-i-s-inzhener5-инженер-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-inzhener5-зак-менеджера-l',
            caption: i18n.t('forms.application.sitemap.inzhener5.i-i-s-inzhener5-зак-менеджера-l.caption'),
            title: i18n.t('forms.application.sitemap.inzhener5.i-i-s-inzhener5-зак-менеджера-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-inzhener5-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.inzhener5.i-i-s-inzhener5-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.inzhener5.i-i-s-inzhener5-номенклатура-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-inzhener5-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.inzhener5.i-i-s-inzhener5-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.inzhener5.i-i-s-inzhener5-сотрудники-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-inzhener5-т-ч-зак-менеджера-l',
            caption: i18n.t('forms.application.sitemap.inzhener5.i-i-s-inzhener5-т-ч-зак-менеджера-l.caption'),
            title: i18n.t('forms.application.sitemap.inzhener5.i-i-s-inzhener5-т-ч-зак-менеджера-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-inzhener5-клиенты-l',
            caption: i18n.t('forms.application.sitemap.inzhener5.i-i-s-inzhener5-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.inzhener5.i-i-s-inzhener5-клиенты-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-inzhener5-т-ч-отчет-о-тест-п-к-l',
            caption: i18n.t('forms.application.sitemap.inzhener5.i-i-s-inzhener5-т-ч-отчет-о-тест-п-к-l.caption'),
            title: i18n.t('forms.application.sitemap.inzhener5.i-i-s-inzhener5-т-ч-отчет-о-тест-п-к-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-inzhener5-отчет-о-тест-п-к-l',
            caption: i18n.t('forms.application.sitemap.inzhener5.i-i-s-inzhener5-отчет-о-тест-п-к-l.caption'),
            title: i18n.t('forms.application.sitemap.inzhener5.i-i-s-inzhener5-отчет-о-тест-п-к-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})