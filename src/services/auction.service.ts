import { Bid, PlaceBidRequest } from "../domains/bid";
import { AuctionRepository } from "../repositories/auction.repository";
import { v4 as uuidv4 } from 'uuid';

export class AuctionService {
    constructor(
        private readonly auctionRepository: AuctionRepository
    ){}

    public placeBid(input: PlaceBidRequest): Bid {
        const bid: Bid = {
            id: uuidv4(),
            userId: input.userId,
            auctionId: input.auctionId,
            initialPrice: input.initialPrice,
            timestamp: new Date().toISOString(),
        }

        const createBid =this.auctionRepository.createBid(bid);
        return createBid;
    }
}
