import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const module = sdk.getBundleModule("0xf2551971B026BD83cC37333b7AB6dEc8a4Fd6329");



// Address of the wallet to check NFT balance
const address = "0x037EdCc4e28A9450f89cC37432d55cEec92c5F3D";
// The token ID of the NFT you want to check the wallets balance of
const tokenId = "0"

const balance = await module.balanceOf(address, tokenId);
console.log(balance);




// The token ID of the NFT you want to burn
const tokenId = 0;
// The number of specified NFTs you want to burn
const amount = 1

await module.burn({ tokenId, amount });



// Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
const metadata = {
  name: "Cool NFT",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
}

const metadataWithSupply = {
  metadata,
  supply: 1, // The number of this NFT you want to mint
}

await module.createAndMint(metadataWithSupply);







// Custom metadata and supplies of your NFTs
const metadataWithSupply = [{
  supply: 1, // The number of this NFT you want to mint
  metadata: {
    name: "Cool NFT #1",
    description: "This is a cool NFT",
    image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
  },
}, {
  supply: 1,
  metadata: {
    name: "Cool NFT #2",
    description: "This is a cool NFT",
    image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
  },
}];

await module.createAndMintBatch(metadataWithSupply);





// You can get every NFT in the module
const nfts = await module.getAll();
console.log(nfts);

// Or you can get optionally get the NFTs owned by a specific wallet
const address = "0x037EdCc4e28A9450f89cC37432d55cEec92c5F3D"; // The address you want to get the NFTs for;
const ownedNfts = await module.getAll(address);
console.log(ownedNfts);




// Address of the wallet you want to send the NFT to
const toAddress = "0x...";

// The token ID of the NFT you want to send
const tokenId = "0";

// The number of NFTs you want to send
const amount = 1;

await module.transfer(toAddress, tokenId, amount);


// Address of the wallet to send the NFT from
const fromAddress = "0x037EdCc4e28A9450f89cC37432d55cEec92c5F3D";
// Address of the wallet you want to send the NFT to
const toAddress = "0x...";

// The data of the NFTs you want to send
const data = [{
  tokenId: 1, // The token ID of the NFT you want to send
  amount: 1, // The number of this NFT you want to send
}, {
  tokenId: 2,
  amount: 1,
}]

// Note that the connected wallet must have approval to transfer the tokens of the fromAddress
await module.transferBatchFrom(fromAddress, toAddress, data);