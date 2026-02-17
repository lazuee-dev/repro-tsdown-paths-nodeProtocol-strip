Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

//#region src/crypto-polyfill.ts
var _ref, _ref$crypto, _crypto, _crypto$randomUUID;
function hex(byte) {
	return byte.toString(16).padStart(2, "0");
}
(_ref$crypto = (_ref = globalThis).crypto) !== null && _ref$crypto !== void 0 || (_ref.crypto = {});
(_crypto$randomUUID = (_crypto = globalThis.crypto).randomUUID) !== null && _crypto$randomUUID !== void 0 || (_crypto.randomUUID = function randomUUID() {
	const bytes = new Uint8Array(16);
	for (let i = 0; i < 16; i++) bytes[i] = Math.trunc(Math.random() * 256);
	return hex(bytes[0]) + hex(bytes[1]) + hex(bytes[2]) + hex(bytes[3]) + "-" + hex(bytes[4]) + hex(bytes[5]) + "-" + hex(bytes[6]) + hex(bytes[7]) + "-" + hex(bytes[8]) + hex(bytes[9]) + "-" + hex(bytes[10]) + hex(bytes[11]) + hex(bytes[12]) + hex(bytes[13]) + hex(bytes[14]) + hex(bytes[15]);
});
const randomUUID = globalThis.crypto.randomUUID.bind(globalThis.crypto);
var crypto_polyfill_default = globalThis.crypto;

//#endregion
exports.randomUUID = randomUUID;