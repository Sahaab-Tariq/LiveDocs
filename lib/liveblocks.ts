// "use server"
import { Liveblocks } from "@liveblocks/node";

// Log the environment variable to check if it's being loaded correctly
console.log("LIVEBLOCKS_SECRET_KEY:", process.env.LIVEBLOCKS_SECRET_KEY);

export const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY as string,
  // secret:"sk_dev_j-qQ_l-7yXHdPLD9uC79mUg_14N_QG5HYPsCdfcVsz0Wqvj8eojHy4Dr_cAHF4Bj"
});
