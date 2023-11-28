import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISInzhener5ЗакМенеджераLForm from './forms/i-i-s-inzhener5-зак-менеджера-l';
import IISInzhener5ИнженерLForm from './forms/i-i-s-inzhener5-инженер-l';
import IISInzhener5КлиентыLForm from './forms/i-i-s-inzhener5-клиенты-l';
import IISInzhener5НоменклатураLForm from './forms/i-i-s-inzhener5-номенклатура-l';
import IISInzhener5ОтчетОТестПКLForm from './forms/i-i-s-inzhener5-отчет-о-тест-п-к-l';
import IISInzhener5СотрудникиLForm from './forms/i-i-s-inzhener5-сотрудники-l';
import IISInzhener5ТЧЗакМенеджераLForm from './forms/i-i-s-inzhener5-т-ч-зак-менеджера-l';
import IISInzhener5ТЧОтчетОТестПКLForm from './forms/i-i-s-inzhener5-т-ч-отчет-о-тест-п-к-l';
import IISInzhener5ЗакМенеджераEForm from './forms/i-i-s-inzhener5-зак-менеджера-e';
import IISInzhener5ИнженерEForm from './forms/i-i-s-inzhener5-инженер-e';
import IISInzhener5КлиентыEForm from './forms/i-i-s-inzhener5-клиенты-e';
import IISInzhener5НоменклатураEForm from './forms/i-i-s-inzhener5-номенклатура-e';
import IISInzhener5ОтчетОТестПКEForm from './forms/i-i-s-inzhener5-отчет-о-тест-п-к-e';
import IISInzhener5СотрудникиEForm from './forms/i-i-s-inzhener5-сотрудники-e';
import IISInzhener5ТЧЗакМенеджераEForm from './forms/i-i-s-inzhener5-т-ч-зак-менеджера-e';
import IISInzhener5ТЧОтчетОТестПКEForm from './forms/i-i-s-inzhener5-т-ч-отчет-о-тест-п-к-e';
import IISInzhener5ЗакМенеджераModel from './models/i-i-s-inzhener5-зак-менеджера';
import IISInzhener5ИнженерModel from './models/i-i-s-inzhener5-инженер';
import IISInzhener5КлиентыModel from './models/i-i-s-inzhener5-клиенты';
import IISInzhener5НоменклатураModel from './models/i-i-s-inzhener5-номенклатура';
import IISInzhener5ОтчетОТестПКModel from './models/i-i-s-inzhener5-отчет-о-тест-п-к';
import IISInzhener5СотрудникиModel from './models/i-i-s-inzhener5-сотрудники';
import IISInzhener5ТЧЗакМенеджераModel from './models/i-i-s-inzhener5-т-ч-зак-менеджера';
import IISInzhener5ТЧОтчетОТестПКModel from './models/i-i-s-inzhener5-т-ч-отчет-о-тест-п-к';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-inzhener5-зак-менеджера': IISInzhener5ЗакМенеджераModel,
    'i-i-s-inzhener5-инженер': IISInzhener5ИнженерModel,
    'i-i-s-inzhener5-клиенты': IISInzhener5КлиентыModel,
    'i-i-s-inzhener5-номенклатура': IISInzhener5НоменклатураModel,
    'i-i-s-inzhener5-отчет-о-тест-п-к': IISInzhener5ОтчетОТестПКModel,
    'i-i-s-inzhener5-сотрудники': IISInzhener5СотрудникиModel,
    'i-i-s-inzhener5-т-ч-зак-менеджера': IISInzhener5ТЧЗакМенеджераModel,
    'i-i-s-inzhener5-т-ч-отчет-о-тест-п-к': IISInzhener5ТЧОтчетОТестПКModel
  },

  'application-name': 'Inzhener5',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Inzhener5',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Inzhener5',
          title: 'Inzhener5'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        inzhener5: {
          caption: 'Inzhener5',
          title: 'Inzhener5',
          'i-i-s-inzhener5-инженер-l': {
            caption: 'Инженер',
            title: ''
          },
          'i-i-s-inzhener5-зак-менеджера-l': {
            caption: 'Зак менеджера',
            title: ''
          },
          'i-i-s-inzhener5-номенклатура-l': {
            caption: 'Номенклатура',
            title: ''
          },
          'i-i-s-inzhener5-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-inzhener5-т-ч-зак-менеджера-l': {
            caption: 'Т ч зак менеджера',
            title: ''
          },
          'i-i-s-inzhener5-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-inzhener5-т-ч-отчет-о-тест-п-к-l': {
            caption: 'Т ч отчет о тест ПК',
            title: ''
          },
          'i-i-s-inzhener5-отчет-о-тест-п-к-l': {
            caption: 'Отчет о тест ПК',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-inzhener5-зак-менеджера-l': IISInzhener5ЗакМенеджераLForm,
    'i-i-s-inzhener5-инженер-l': IISInzhener5ИнженерLForm,
    'i-i-s-inzhener5-клиенты-l': IISInzhener5КлиентыLForm,
    'i-i-s-inzhener5-номенклатура-l': IISInzhener5НоменклатураLForm,
    'i-i-s-inzhener5-отчет-о-тест-п-к-l': IISInzhener5ОтчетОТестПКLForm,
    'i-i-s-inzhener5-сотрудники-l': IISInzhener5СотрудникиLForm,
    'i-i-s-inzhener5-т-ч-зак-менеджера-l': IISInzhener5ТЧЗакМенеджераLForm,
    'i-i-s-inzhener5-т-ч-отчет-о-тест-п-к-l': IISInzhener5ТЧОтчетОТестПКLForm,
    'i-i-s-inzhener5-зак-менеджера-e': IISInzhener5ЗакМенеджераEForm,
    'i-i-s-inzhener5-инженер-e': IISInzhener5ИнженерEForm,
    'i-i-s-inzhener5-клиенты-e': IISInzhener5КлиентыEForm,
    'i-i-s-inzhener5-номенклатура-e': IISInzhener5НоменклатураEForm,
    'i-i-s-inzhener5-отчет-о-тест-п-к-e': IISInzhener5ОтчетОТестПКEForm,
    'i-i-s-inzhener5-сотрудники-e': IISInzhener5СотрудникиEForm,
    'i-i-s-inzhener5-т-ч-зак-менеджера-e': IISInzhener5ТЧЗакМенеджераEForm,
    'i-i-s-inzhener5-т-ч-отчет-о-тест-п-к-e': IISInzhener5ТЧОтчетОТестПКEForm
  },

});

export default translations;
