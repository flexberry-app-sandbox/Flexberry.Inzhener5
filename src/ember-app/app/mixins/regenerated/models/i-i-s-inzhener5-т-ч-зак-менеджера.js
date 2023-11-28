import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  действия_для_устранения_проблемы: DS.attr('string'),
  закМенеджера: DS.belongsTo('i-i-s-inzhener5-зак-менеджера', { inverse: null, async: false })
});

export let ValidationRules = {
  действия_для_устранения_проблемы: {
    descriptionKey: 'models.i-i-s-inzhener5-т-ч-зак-менеджера.validations.действия_для_устранения_проблемы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  закМенеджера: {
    descriptionKey: 'models.i-i-s-inzhener5-т-ч-зак-менеджера.validations.закМенеджера.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧЗакМенеджераE', 'i-i-s-inzhener5-т-ч-зак-менеджера', {
    действия_для_устранения_проблемы: attr('Действия_для_устранения_проблемы', { index: 0 })
  });

  modelClass.defineProjection('ТЧЗакМенеджераL', 'i-i-s-inzhener5-т-ч-зак-менеджера', {
    действия_для_устранения_проблемы: attr('Действия_для_устранения_проблемы', { index: 0 })
  });
};
