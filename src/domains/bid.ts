export interface PlaceBidRequest {
    userId: string
    auctionId: string 
    currentPrice: number
    initialPrice: number
    startTime: string
    endTime: string
}

export interface Bid {
    id: string
    userId: string
    auctionId: string
    initialPrice: number
    timestamp: string
}