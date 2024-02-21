const request = require("supertest"); // import supertest
const { expect } = require("chai"); // import chai
const baseUrl = require("../globalVariable/baseUrl");

const url = baseUrl; //define global variable

async function getMethod() {
  const response = await request(url).get("/objects/12");
  //assertation / verifikasi
  expect(response.status).to.equal(200);
  console.log(response.body);
}

async function postMethod() {
  try {
    const response = await request(url)
      .post("/objects")
      .send({
        name: "Laptop",
        data: {
          Generation: "2024th",
          Price: "10000",
          Capacity: "125 GB",
        },
      });

    // Pastikan respons berhasil dengan status 200
    expect(response.status).to.equal(200);

    // Pastikan bahwa respons memiliki properti 'id' yang berisi ID dari objek yang baru dibuat
    expect(response.body).to.have.property('id');

    console.log(response.body);

    // Mengembalikan ID dari respons POST
    return response.body.id;
  } catch (error) {
    console.error("Error in postMethod:", error);
    throw error;
  }
}

async function putMethod(id) {
  const response = await request(url)
  .put(`/objects/${id}`)
    .send({
      name: "Laptop",
      data: {
        Generation: "2024th",
        Price: "15000",
        Capacity: "125 GB",
      },
    });
  //assertation / verifikasi
  expect(response.status).to.equal(200);
  expect(response.body.data.Price).to.equal("15000");
  expect(response.body.name).to.equal("Laptop");
}

async function deleteMethod(id) {
  try {
    const response = await request(url).delete(`/objects/${id}`);
    expect(response.status).to.equal(200);
    console.log("Object deleted successfully");
  } catch (error) {
    console.error("Error in deleteMethod:", error);
    throw error;
  }
}

module.exports = { getMethod, postMethod, putMethod, deleteMethod };

