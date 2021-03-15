import "@babel/polyfill";
import request from "supertest";
import app from "../../index";
import model from "../models";

const ENDPOINT = "/api/tipo-de-profissional";

it("should get the list of professional types", async (done) => {
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

it("should create a new professional type", async (done) => {
  request(app)
    .post(ENDPOINT)
    .send({
      descricao: "teste",
      situacao: true,
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(201)
    .end(function (err, res) {
      console.log(res.body);
      if (err) return done(err);
      return done();
    });
});

it("should validate the body and return 422 on invalid data", async (done) => {
  request(app)
    .post(ENDPOINT)
    .send({
      descricao: "", // invalid data
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

it("should return 200 on successful professional type update", async (done) => {
  const { TipoDeProfissional } = model;
  const tipoDeProfissional = await TipoDeProfissional.create({
    descricao: "teste",
    situacao: true,
  });

  request(app)
    .put(`${ENDPOINT}/${tipoDeProfissional.dataValues.id}`)
    .send({
      ...tipoDeProfissional.dataValues,
      descricao: "teste654",
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (err, res) {
      console.log(res);
      if (err) return done(err);
      return done();
    });
});
