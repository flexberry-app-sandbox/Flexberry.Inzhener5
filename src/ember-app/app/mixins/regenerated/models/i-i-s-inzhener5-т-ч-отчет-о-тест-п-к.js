import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  выводы_и_рекомендации: DS.attr('string'),
  операционная_система: DS.attr('string'),
  результаты_тестирования: DS.attr('string'),
  тестируемые_приложения_и_игры: DS.attr('string'),
  отчетОТестПК: DS.belongsTo('i-i-s-inzhener5-отчет-о-тест-п-к', { inverse: null, async: false })
});

export let ValidationRules = {
  выводы_и_рекомендации: {
    descriptionKey: 'models.i-i-s-inzhener5-т-ч-отчет-о-тест-п-к.validations.выводы_и_рекомендации.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  операционная_система: {
    descriptionKey: 'models.i-i-s-inzhener5-т-ч-отчет-о-тест-п-к.validations.операционная_система.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  результаты_тестирования: {
    descriptionKey: 'models.i-i-s-inzhener5-т-ч-отчет-о-тест-п-к.validations.результаты_тестирования.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  тестируемые_приложения_и_игры: {
    descriptionKey: 'models.i-i-s-inzhener5-т-ч-отчет-о-тест-п-к.validations.тестируемые_приложения_и_игры.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчетОТестПК: {
    descriptionKey: 'models.i-i-s-inzhener5-т-ч-отчет-о-тест-п-к.validations.отчетОТестПК.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧОтчетОТестПКE', 'i-i-s-inzhener5-т-ч-отчет-о-тест-п-к', {
    тестируемые_приложения_и_игры: attr('Тестируемые_приложения_и_игры', { index: 0 }),
    операционная_система: attr('Операционная_система', { index: 1 }),
    результаты_тестирования: attr('Результаты_тестирования', { index: 2 }),
    выводы_и_рекомендации: attr('Выводы_и_рекомендации', { index: 3 })
  });

  modelClass.defineProjection('ТЧОтчетОТестПКL', 'i-i-s-inzhener5-т-ч-отчет-о-тест-п-к', {
    тестируемые_приложения_и_игры: attr('Тестируемые_приложения_и_игры', { index: 0 }),
    операционная_система: attr('Операционная_система', { index: 1 }),
    результаты_тестирования: attr('Результаты_тестирования', { index: 2 }),
    выводы_и_рекомендации: attr('Выводы_и_рекомендации', { index: 3 })
  });
};
