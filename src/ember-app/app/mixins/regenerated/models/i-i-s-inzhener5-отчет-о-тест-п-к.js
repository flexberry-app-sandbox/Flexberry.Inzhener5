import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({});

export let ValidationRules = {};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчетОТестПКE', 'i-i-s-inzhener5-отчет-о-тест-п-к', {
    
  });

  modelClass.defineProjection('ОтчетОТестПКL', 'i-i-s-inzhener5-отчет-о-тест-п-к', {
    
  });
};
