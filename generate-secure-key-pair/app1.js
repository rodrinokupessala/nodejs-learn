// Node.js program to demonstrate the
// crypto.generateKeyPair() method

// Including generateKeyPair from crypto module
const { generateKeyPair } = require('crypto');

// Calling generateKeyPair() method
// with its parameters
generateKeyPair('ec', {
namedCurve: 'secp256k1', // Options
publicKeyEncoding: {
	type: 'spki',
	format: 'der'
},
privateKeyEncoding: {
	type: 'pkcs8',
	format: 'der'
}
},
(err, publicKey, privateKey) => { // Callback function
	if(!err)
	{
		// Prints new asymmetric key
		// pair after encoding
		console.log("Public Key is: ",
				publicKey.toString('hex'));
		console.log();
		console.log("Private Key is: ",
				privateKey.toString('hex'));
	}
	else
	{
		// Prints error
		console.log("Errr is: ", err);
	}
		
});
