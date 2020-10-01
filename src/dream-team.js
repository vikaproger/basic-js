const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0) return false;
  members = members.filter(item => typeof item === "string");
  return members.map(i => i.trim().toUpperCase().charAt(0)).sort().join('');
};
