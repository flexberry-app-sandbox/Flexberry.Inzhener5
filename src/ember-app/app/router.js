import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-inzhener5-зак-менеджера-l');
  this.route('i-i-s-inzhener5-зак-менеджера-e',
  { path: 'i-i-s-inzhener5-зак-менеджера-e/:id' });
  this.route('i-i-s-inzhener5-зак-менеджера-e.new',
  { path: 'i-i-s-inzhener5-зак-менеджера-e/new' });
  this.route('i-i-s-inzhener5-инженер-l');
  this.route('i-i-s-inzhener5-инженер-e',
  { path: 'i-i-s-inzhener5-инженер-e/:id' });
  this.route('i-i-s-inzhener5-инженер-e.new',
  { path: 'i-i-s-inzhener5-инженер-e/new' });
  this.route('i-i-s-inzhener5-клиенты-l');
  this.route('i-i-s-inzhener5-клиенты-e',
  { path: 'i-i-s-inzhener5-клиенты-e/:id' });
  this.route('i-i-s-inzhener5-клиенты-e.new',
  { path: 'i-i-s-inzhener5-клиенты-e/new' });
  this.route('i-i-s-inzhener5-номенклатура-l');
  this.route('i-i-s-inzhener5-номенклатура-e',
  { path: 'i-i-s-inzhener5-номенклатура-e/:id' });
  this.route('i-i-s-inzhener5-номенклатура-e.new',
  { path: 'i-i-s-inzhener5-номенклатура-e/new' });
  this.route('i-i-s-inzhener5-отчет-о-тест-п-к-l');
  this.route('i-i-s-inzhener5-отчет-о-тест-п-к-e',
  { path: 'i-i-s-inzhener5-отчет-о-тест-п-к-e/:id' });
  this.route('i-i-s-inzhener5-отчет-о-тест-п-к-e.new',
  { path: 'i-i-s-inzhener5-отчет-о-тест-п-к-e/new' });
  this.route('i-i-s-inzhener5-сотрудники-l');
  this.route('i-i-s-inzhener5-сотрудники-e',
  { path: 'i-i-s-inzhener5-сотрудники-e/:id' });
  this.route('i-i-s-inzhener5-сотрудники-e.new',
  { path: 'i-i-s-inzhener5-сотрудники-e/new' });
  this.route('i-i-s-inzhener5-т-ч-зак-менеджера-l');
  this.route('i-i-s-inzhener5-т-ч-зак-менеджера-e',
  { path: 'i-i-s-inzhener5-т-ч-зак-менеджера-e/:id' });
  this.route('i-i-s-inzhener5-т-ч-зак-менеджера-e.new',
  { path: 'i-i-s-inzhener5-т-ч-зак-менеджера-e/new' });
  this.route('i-i-s-inzhener5-т-ч-отчет-о-тест-п-к-l');
  this.route('i-i-s-inzhener5-т-ч-отчет-о-тест-п-к-e',
  { path: 'i-i-s-inzhener5-т-ч-отчет-о-тест-п-к-e/:id' });
  this.route('i-i-s-inzhener5-т-ч-отчет-о-тест-п-к-e.new',
  { path: 'i-i-s-inzhener5-т-ч-отчет-о-тест-п-к-e/new' });
});

export default Router;
