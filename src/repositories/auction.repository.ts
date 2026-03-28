import { Bid } from "../domains/bid"

export class AuctionRepository {
    public findAuctionById(){
        throw new Error("Implement me!")
    }

    public findBidByAuctionId(_auctionId: string){
        throw new Error("Implement me!")
    }

    public findAllBidsByAuctionId(_auctionId: string){
        throw new Error("Implement me!")
    }

    public createBid(bid: Bid){
        return bid;
    }
}