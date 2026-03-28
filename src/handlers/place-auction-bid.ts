import { Context, APIGatewayEvent } from 'aws-lambda';
import { container } from '../container';
import { Bid, PlaceBidRequest } from '../domains/bid';

const service = container.auctionService

export const handler = async (event: APIGatewayEvent, context: Context) => {
  try {
    console.log(`Lambda function "${context.functionName}" called with event:`, event);
    const body = JSON.parse(event.body || '{}');
    const placeBidInput: PlaceBidRequest = body as PlaceBidRequest;
    const bid: Bid = service.placeBid(placeBidInput);

    console.log(`Bid placed successfully:`);

    return {
      statusCode: 200,
      body: JSON.stringify(bid),
    };
  } catch(error: any) {
    console.error(`Error placing bid:`, error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error placing bid!',
        error: error,
      }),
    };
  }
};
