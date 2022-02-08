# Asymmetric encryption in Nodejs
text](https://github.com/rodrinokupessala/nodejs-learn/crypto-Assimetric/asymmetric-encryption.webp?raw=true)
# How asymmetric encryption works?
In an asymmetric key encryption scheme, anyone can encrypt messages using the public key, but only the holder of the paired private key can decrypt. Security depends on the secrecy of the private key.

# Como funciona a criptografia assimétrica?

Em um esquema de criptografia de chave assimétrica, qualquer pessoa pode criptografar mensagens usando a chave pública, mas somente o detentor da chave privada emparelhada pode descriptografar. A segurança depende do sigilo da chave privada.

Generate private and public key
To generate private and public key we will use openssl:
openssl genrsa -out rsa_4096_priv.pem 4096

Next, you can generate the public key by executing the following command:
openssl rsa -pubout -in rsa_4096_priv.pem -out rsa_4096_pub.pem
Run: npm install crypto-js to install it, and you can use these following functions to encrypt and decrypt and run:
node app.js
