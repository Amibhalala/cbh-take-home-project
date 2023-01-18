const crypto = require("crypto");
const generateHash = (data) => {
  return crypto.createHash("sha3-512").update(data).digest("hex");
}
const getCandidateFromPartitionKeyOfEvent = (partitionKey,MAX_PARTITION_KEY_LENGTH) => {
  if(partitionKey){
    const candidate= typeof partitionKey !== "string" ? JSON.stringify(partitionKey) : partitionKey
    if (candidate?.length > MAX_PARTITION_KEY_LENGTH) {
      return generateHash(candidate);
    }
    return candidate
  }
  return null;
}
exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate=TRIVIAL_PARTITION_KEY;

  if (event) {
    candidate =  getCandidateFromPartitionKeyOfEvent(event?.partitionKey,MAX_PARTITION_KEY_LENGTH) ?? generateHash(JSON.stringify(event));
  }
  return candidate;
};