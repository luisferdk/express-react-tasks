const { db } = require('../database');

const getTasks = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM tasks", function (err, result, fields) {
      if (err) throw err;
      resolve(result);
    });
  });

}

const findTask = (id) => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM tasks where id =${id}`, function (err, result, fields) {
      if (err) throw err;
      console.log(result[0])
      resolve(result[0] || {});
    });
  });
}

const createTask = (task) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO tasks (title,description,completed) VALUES ('${task.title}','${task.description}','0')`;
    db.query(sql, function (err, result, fields) {
      if (err) throw err;
      resolve(result['insertId'] || null);
    });
  });
}

const updateTask = (id, newData) => {
  return new Promise((resolve, reject) => {
    const data = Object.entries(newData);
    let fields = "";
    for (let i = 0; i < data.length; i++) {
      fields += `${data[i][0]} = '${data[i][1]}'`;
      if (i < data.length - 1) {
        fields += ','
      }
    }

    const sql = `UPDATE tasks SET ${fields} WHERE id = ${id}`;
    db.query(sql, function (err, result, fields) {
      if (err) throw err;
      resolve(result || null);
    });
  });
}

const deleteTask = (id) => {
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM tasks WHERE id = ${id}`, function (err, result, fields) {
      if (err) throw err;
      resolve(result || null);
    });
  });
}

module.exports = {
  getTasks,
  findTask,
  createTask,
  updateTask,
  deleteTask
}