import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  гарантии_производителя: DS.attr('string'),
  дата_производства: DS.attr('string'),
  инструкция_по_использованию: DS.attr('string'),
  описание_продукта: DS.attr('string'),
  производитель: DS.attr('string'),
  серия_и_номер_партии: DS.attr('number'),
  сертификация_и_стандарты: DS.attr('string'),
  экологичность_продукта: DS.attr('string')
});

export let ValidationRules = {
  гарантии_производителя: {
    descriptionKey: 'models.i-i-s-inzhener5-инженер.validations.гарантии_производителя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата_производства: {
    descriptionKey: 'models.i-i-s-inzhener5-инженер.validations.дата_производства.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  инструкция_по_использованию: {
    descriptionKey: 'models.i-i-s-inzhener5-инженер.validations.инструкция_по_использованию.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  описание_продукта: {
    descriptionKey: 'models.i-i-s-inzhener5-инженер.validations.описание_продукта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  производитель: {
    descriptionKey: 'models.i-i-s-inzhener5-инженер.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серия_и_номер_партии: {
    descriptionKey: 'models.i-i-s-inzhener5-инженер.validations.серия_и_номер_партии.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сертификация_и_стандарты: {
    descriptionKey: 'models.i-i-s-inzhener5-инженер.validations.сертификация_и_стандарты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  экологичность_продукта: {
    descriptionKey: 'models.i-i-s-inzhener5-инженер.validations.экологичность_продукта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИнженерE', 'i-i-s-inzhener5-инженер', {
    описание_продукта: attr('Описание_продукта', { index: 0 }),
    дата_производства: attr('Дата_производства', { index: 1 }),
    сертификация_и_стандарты: attr('Сертификация_и_стандарты', { index: 2 }),
    экологичность_продукта: attr('Экологичность_продукта', { index: 3 }),
    серия_и_номер_партии: attr('Серия_и_номер_партии', { index: 4 }),
    гарантии_производителя: attr('Гарантии_производителя', { index: 5 }),
    производитель: attr('Производитель', { index: 6 }),
    инструкция_по_использованию: attr('Инструкция_по_использованию', { index: 7 })
  });

  modelClass.defineProjection('ИнженерL', 'i-i-s-inzhener5-инженер', {
    описание_продукта: attr('Описание_продукта', { index: 0 }),
    дата_производства: attr('Дата_производства', { index: 1 }),
    сертификация_и_стандарты: attr('Сертификация_и_стандарты', { index: 2 }),
    экологичность_продукта: attr('Экологичность_продукта', { index: 3 }),
    серия_и_номер_партии: attr('Серия_и_номер_партии', { index: 4 }),
    гарантии_производителя: attr('Гарантии_производителя', { index: 5 }),
    производитель: attr('Производитель', { index: 6 }),
    инструкция_по_использованию: attr('Инструкция_по_использованию', { index: 7 })
  });
};
