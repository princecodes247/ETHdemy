import { ethers } from "ethers"
import { ThirdwebSDK } from "@3rdweb/sdk";
//Instantiate 3rdweb SDK
const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        // Your wallet private key
        process.env.PRIVATE_KEY,
        // RPC URL
        ethers.getDefaultProvider("https://rinkeby-light.eth.linkpool.io/")
    )
);

const marketplace = sdk.getMarketplaceModule("0x5963F5d819625447Bd5746E145A5472E947c803C");

const bundle = sdk.getBundleModule("0xf2551971B026BD83cC37333b7AB6dEc8a4Fd6329");


const createDirectListing = async (id) => {
  // The contract address of the NFT that will be auctioned
const nftCollectionAddress = "0xf2551971B026BD83cC37333b7AB6dEc8a4Fd6329";
// Data of the listing you want to create
const listing = {
  // address of the contract the asset you want to list is on
  assetContractAddress: nftCollectionAddress,
  // token ID of the asset you want to list
  tokenId: id,
  // in how many seconds with the listing open up
  startTimeInSeconds: 0,
  // how long the listing will be open for
  listingDurationInSeconds: 86400,
  // how many of the asset you want to list
  quantity: 1,
  // address of the currency contract that will be used to pay for the listing
  currencyContractAddress: "0x037EdCc4e28A9450f89cC37432d55cEec92c5F3D",
  // how much the asset will be sold for
  buyoutPricePerToken: "1",
}

return await marketplace.createDirectListing(listing);
};
const mintNFT = async (name="Course", description="Course NFT", image="", video="") => {
      // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
    const metadata = {
      name,
      description,
      image, // This can be an image url or file
      video, // For the course being sold
    }

    const metadataWithSupply = {
      metadata,
      supply: 1, // The number of this NFT you want to mint
    }

    let course = await bundle.createAndMint(metadataWithSupply);
    return course
}
const createCourseListing = async (name, description, image, video) => {
  let res = await mintNFT(name, description, image, video)
  console.log(res)
  console.log(await createDirectListing(res.metadata.id))
}

const getAllListings = async () => {
    let temp = null
  await marketplace
    .getAllListings()
    .then((data) => {
        temp = data
    }

        )
    .catch((error) => console.error(error));
        return temp
};
const getListing = async (id) => {
  let temp = null

  // Get any listing by listingId
  await marketplace
    .getListing(id)
    .then((data) => {
        temp = data
        console.log("see data", data)
    })
    .catch((error) => console.error(error));
    return temp
};
const deleteListing = async (id) => {

  const listingId = "0"

  await module.cancelDirectListing(listingId);
    return 0
};

const ThirdWebService = {
  getAllListings,
  getListing,
  createCourseListing,
  deleteListing
}

export default ThirdWebService;

