import "@babel/polyfill";
import request from "supertest";
import app from "./../../index";
import model from "../models";

const ENDPOINT = "/api/profissionais";

it("should get the list of professionals", async (done) => {
  request(app)
    .get(ENDPOINT)
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) return done(err);
      return done();
    });
});

it("should create a new professional", async (done) => {
  const { TipoDeProfissional } = model;
  const tipoDeProfissional = await TipoDeProfissional.create({
    descricao: "teste",
    situacao: true,
  });

  request(app)
    .post(ENDPOINT)
    .send({
      nome: "teste",
      telefone: "999999999",
      email: "teste@mail212.com.br",
      tipoDeProfissional: tipoDeProfissional.dataValues.id,
      situacao: true,
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(201)
    .end(function (err, res) {
      if (err) return done(err);
      return done();
    });
});

it("should validate the body and return 422 on invalid data", async (done) => {
  const { TipoDeProfissional } = model;
  const tipoDeProfissional = await TipoDeProfissional.create({
    descricao: "teste",
    situacao: true,
  });

  request(app)
    .post(ENDPOINT)
    .send({
      nome: "teste",
      telefone: "999999999",
      email: "testemail.com.br", // invalid email
      tipoDeProfissional: tipoDeProfissional.dataValues.id,
      situacao: true,
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(422)
    .end(function (err, res) {
      if (err) return done(err);
      return done();
    });
});

it("should return 200 on successful update", async (done) => {
  const { Profissional, TipoDeProfissional } = model;
  const tipoDeProfissional = await TipoDeProfissional.create({
    descricao: "teste",
    situacao: true,
  });
  const profissional = await Profissional.create({
    nome: "teste",
    telefone: "999999999",
    email: "teste@mail98788.com.br",
    tipoDeProfissional: tipoDeProfissional.dataValues.id,
    situacao: true,
  });

  request(app)
    .put(`${ENDPOINT}/${profissional.dataValues.id}`)
    .send({
      ...profissional.dataValues,
      nome: "teste987",
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) return done(err);
      return done();
    });
});
