import { AuctionRepository } from "./repositories/auction.repository"
import { AuctionService } from "./services/auction.service"

const auctionRepository = new AuctionRepository()
const auctionService = new AuctionService(auctionRepository)

export const container = {
  auctionService,
}