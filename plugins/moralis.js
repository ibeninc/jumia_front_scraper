import Moralis from 'moralis';

Moralis.initialize("j2GNycTIZLhBmEqYjvz3irxYlruZoMnh7FioD6Rc");
Moralis.serverURL = 'https://hzv0oqsq7tbk.usemoralis.com:2053/server'

// const serverUrl = "https://5xnsk3wgk8ob.usemoralis.com:2053/server";
// const appId = "dQNqChehfgiBXYCeMPkpKdgBXxZkK1tAmursry1i";
// Moralis.start({ serverUrl, appId });

export default ({ app }, inject) => {

    inject('moralis', Moralis)

}

