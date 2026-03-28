import { Bid } from "./bid"

export interface Auction {
    auctionId: string
    initialPrice: number
    currentPrice: number
    startTime: Date
    endTime: Date
    bids: Array<Bid>
}

