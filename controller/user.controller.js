const db = require('../db');

class UserController {
  async createUser(req, res) {
    const { name, surname } = req.body;
    const newPerson = await db.query('INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *', [name, surname]);
    res.json(newPerson.rows[0]);
  }

  async getUsers(req, res) {
    const persons = await db.query('SELECT * FROM person;');
    res.json(persons.rows);
  }

  async getOneUser(req, res) {
    const { id } = req.params;
    const candidate = await db.query('SELECT * FROM person WHERE id = $1', [id]);
    res.json(candidate.rows[0]);
  }

  async updateUser(req, res) {
    const { id, name, surname } = req.body;
    const updatedUser = await db.query('UPDATE person SET name = $2, surname = $3 WHERE id = $1 RETURNING *', [id, name, surname]);
    res.json(updatedUser.rows[0]);
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    const candidateToDelete = await db.query('DELETE FROM person WHERE id = $1', [id]);
    res.json(candidateToDelete.rows[0]);
  }
}

module.exports = new UserController();
