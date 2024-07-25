// models/customerModel.js
const db = require('../config/database');

class Customer {
    static all(callback) {
        db.query('SELECT * FROM cliente', callback);
    }

    static find(id, callback) {
        db.query('SELECT * FROM cliente WHERE idcliente = ?', [id], callback);
    }

    static create(data, callback) {
        const { nome, email, telefone } = data;
        db.query('INSERT INTO cliente (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone], callback);
    }

    static update(id, data, callback) {
        const { nome, email, telefone } = data;
        db.query('UPDATE cliente SET nome = ?, email = ?, telefone = ? WHERE idcliente = ?', [nome, email, telefone, id], callback);
    }

    static delete(id, callback) {
        db.query('DELETE FROM cliente WHERE idcliente = ?', [id], callback);
    }
}

module.exports = Customer;
