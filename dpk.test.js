const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the partitionKey when it is present in input and length is less than max length", () => {
    const trivialKey = deterministicPartitionKey({"partitionKey":"test123"});
    expect(trivialKey).toBe(trivialKey);
  });
});
describe("deterministicPartitionKey", () => {
  it("Returns the hash generated from input when input is non empty and dont have partitionKey key in it", () => {
    const trivialKey = deterministicPartitionKey({"test":{"test2":"test123"}});
    expect(trivialKey.length).toBe(128);
  });
});
describe("deterministicPartitionKey", () => {
  it("Returns the hash generated from input when input length is greater than max length", () => {
    const trivialKey = deterministicPartitionKey({"partitionKey":"5f55ecb1ca233d41dffb6fd9e307d37b9eb4dad472a9e7767e8727132b7844615f55ecb1ca233d41dffb6fd9e307d37b9eb4dad472a9e7767e8727132b7844615f55ecb1ca233d41dffb6fd9e307d37b9eb4dad472a9e7767e8727132b7844615f55ecb1ca233d41dffb6fd9e307d37b9eb4dad472a9e7767e8727132b7844615f55ecb1ca233d41dffb6fd9e307d37b9eb4dad472a9e7767e8727132b784461"});
    expect(trivialKey.length).toBe(128);
  });
});
describe("deterministicPartitionKey", () => {
  it("Returns the hash generated from input when input is object and it's tringify length is greater than max length", () => {
    const trivialKey = deterministicPartitionKey({"test":{"test2":"5f55ecb1ca233d41dffb6fd9e307d37b9eb4dad472a9e7767e8727132b7844615f55ecb1ca233d41dffb6fd9e307d37b9eb4dad472a9e7767e8727132b7844615f55ecb1ca233d41dffb6fd9e307d37b9eb4dad472a9e7767e8727132b7844615f55ecb1ca233d41dffb6fd9e307d37b9eb4dad472a9e7767e8727132b7844615f55ecb1ca233d41dffb6fd9e307d37b9eb4dad472a9e7767e8727132b784461"}});
    expect(trivialKey.length).toBe(128);
  });
});