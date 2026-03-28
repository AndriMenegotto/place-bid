"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event, context) => {
    console.log(`Lambda function "${context.functionName}" called with event:`, event);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from TypeScript Lambda!',
            input: event,
        }),
    };
};
exports.handler = handler;
