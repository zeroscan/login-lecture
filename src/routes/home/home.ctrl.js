"use strict"

const home = (req, res) => {   // 이크마 스크립트
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    home,
    login,
}