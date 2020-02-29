'use strict'

const todo = require('./index.js');
const assert = require('assert');

//todoとlistのテスト
todo.todo('ノートを買う');
todo.todo('鉛筆を買う');
assert.deepEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);


//doneとdonelistのテスト
todo.done('鉛筆を買う');
assert.deepEqual(todo.list(), ['ノートを買う']);
assert.deepEqual(todo.donelist(), ['鉛筆を買う']);

//delのテスト
todo.del('鉛筆を買う');
todo.del('ノートを買う');
assert.deepEqual(todo.list(), []);
assert.deepEqual(todo.donelist(), []);

console.log('全てのテストが通過しました');