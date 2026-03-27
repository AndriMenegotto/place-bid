import { Context, APIGatewayEvent } from 'aws-lambda';

export const handler = async (event: APIGatewayEvent, context: Context) => {
  console.log(`Lambda function "${context.functionName}" called with event:`, event);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from TypeScript Lambda!',
      input: event,
    }),
  };
};
