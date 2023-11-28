import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('string'),
  номер_заявки: DS.attr('number'),
  операционная_система: DS.attr('string'),
  описание_проблемы: DS.attr('string')
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-inzhener5-зак-менеджера.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер_заявки: {
    descriptionKey: 'models.i-i-s-inzhener5-зак-менеджера.validations.номер_заявки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  операционная_система: {
    descriptionKey: 'models.i-i-s-inzhener5-зак-менеджера.validations.операционная_система.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  описание_проблемы: {
    descriptionKey: 'models.i-i-s-inzhener5-зак-менеджера.validations.описание_проблемы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗакМенеджераE', 'i-i-s-inzhener5-зак-менеджера', {
    операционная_система: attr('Операционная_система', { index: 0 }),
    номер_заявки: attr('Номер_заявки', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    описание_проблемы: attr('Описание_проблемы', { index: 3 })
  });

  modelClass.defineProjection('ЗакМенеджераL', 'i-i-s-inzhener5-зак-менеджера', {
    операционная_система: attr('Операционная_система', { index: 0 }),
    номер_заявки: attr('Номер_заявки', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    описание_проблемы: attr('Описание_проблемы', { index: 3 })
  });
};
