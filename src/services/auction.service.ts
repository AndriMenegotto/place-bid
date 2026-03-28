import { AuctionRepository } from "../repositories/auction.repository";

export class AuctionService {

    constructor(
        private readonly auctionRepository: AuctionRepository
    ){}
}