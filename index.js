'use strict';

//key: タスクの文字列、　value: 完了しているかどうかの真偽値
let tasks = new Map();

const fs = require('fs');
const fileName = './tasks.json';

try 
{
  const dataString = fs.readFileSync(fileName, 'utf8');
  tasks = new Map(JSON.parse(dataString));
}
catch(err)
{
  console.log(`${fileName}から復元できませんでした`);
}

/**
 * タスクをファイルに保存する
 */
function saveTasks() 
{
  fs.writeFileSync(fileName, JSON.stringify(Array.from(tasks)), 'utf8');
}

/**
 * タスクを追加する（未完了）
 * @param {String} task 
 */
function todo(task) 
{
    tasks.set(task, false);
    saveTasks();
}

//タスクが完了している場合
function isDone(pair)
{
    return pair[1];
}

//タスクが完了していない場合
function isNotDone(pair)
{
    return !pair[1];
}

//TODOの一覧の配列を取得する
function list()
{
    return Array.from(tasks)
        .filter(isNotDone)
        .map(t => t[0]);
}

/**
 * タスクを完了する
 * @param {String} task 
 */
//完了したタスク
function done(task) {
    if (tasks.has(task)) {
      tasks.set(task, true);
      saveTasks();
    }
  }
  
//完了したタスクのリスト
function donelist() {
    return Array.from(tasks)
      .filter(isDone)
      .map(t => t[0]);
}

function del(task){
  tasks.delete(task);
  saveTasks();
}

module.exports = {
  todo,
  list,
  done,
  donelist,
  del
};
