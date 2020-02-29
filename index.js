'use strict';

//key: タスクの文字列、　value: 完了しているかどうかの真偽値
const tasks = new Map();

/**
 * タスクを追加する（未完了）
 * @param {String} task 
 */
function todo(task) 
{
    tasks.set(task, false);
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
}

module.exports = {
  todo,
  list,
  done,
  donelist,
  del
};
