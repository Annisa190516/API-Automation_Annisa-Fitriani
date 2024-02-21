const { expect } = require("chai");
const {
  getMethod,
  postMethod,
  putMethod,
  deleteMethod,
} = require("../apiServer/apiObjects");

//test suites
describe("Testing API restful", function () {
  let postId;

  // Test case GET
  it("Test GET from Function", async function () {
    await getMethod(); //Memanggil function GET
  });

  // Test Case POST
it("Test POST from Function", async function () {
  // Memanggil function POST dan menyimpan ID 
  postId = await postMethod();

  // Memastikan ID yang diperoleh tidak kosong
  expect(postId).to.not.be.empty;
});

// Test Case PUT
it("Test PUT from Function", async function () {
  // Memastikan postId telah didefinisikan sebelumnya
  expect(postId).to.exist;

  // Memanggil function PUT dengan ID yang diperoleh dari operasi POST
  await putMethod(postId);
});

// Test Case DELETE
it("Test DELETE from Function", async function () {
  // Memastikan postId telah didefinisikan sebelumnya
  expect(postId).to.exist;

  // Memanggil function DELETE dengan ID yang diperoleh dari operasi POST
  await deleteMethod(postId);
});
});
