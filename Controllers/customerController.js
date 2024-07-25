// controllers/customerController.js
const Customer = require('../models/customerModel');

exports.list = (req, res) => {
    Customer.all((err, results) => {
        if (err) throw err;
        res.render('customers/list', { customers: results });
    });
};

exports.view = (req, res) => {
    const id = req.params.id;
    Customer.find(id, (err, results) => {
        if (err) throw err;
        res.render('customers/view', { customer: results[0] });
    });
};

exports.createForm = (req, res) => {
    res.render('customers/create');
};

exports.create = (req, res) => {
    const data = req.body;
    Customer.create(data, (err) => {
        if (err) throw err;
        res.redirect('/customers');
    });
};

exports.editForm = (req, res) => {
    const id = req.params.id;
    Customer.find(id, (err, results) => {
        if (err) throw err;
        res.render('customers/edit', { customer: results[0] });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Customer.update(id, data, (err) => {
        if (err) throw err;
        res.redirect('/customers');
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Customer.delete(id, (err) => {
        if (err) throw err;
        res.redirect('/customers');
    });
};
