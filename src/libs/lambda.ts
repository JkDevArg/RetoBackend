import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

interface IBodyResponse<T> {
  data: T | T[];
  status: number;
  success: boolean;
  message: string;
  error?: string;
}

export const formatJSONResponse = <T>({
  data,
  status,
  success,
  message,
  error,
}: IBodyResponse<T>): APIGatewayProxyResult => {
  const response: IBodyResponse<T> = {
    status,
    data,
    success,
    message,
    error,
  };
  return {
    statusCode: status,
    body: JSON.stringify(response),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE",
    },
  };
};

export const structure =
  <F extends (event: APIGatewayProxyEvent) => any>(callback: F) =>
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
      const data = await callback(event);
      return formatJSONResponse<F>({
        data,
        status: 200,
        success: true,
        message: "Success",
      });
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        return formatJSONResponse({
          data: null,
          status: 500,
          success: false,
          message: error.message,
          error: "Error Internal Server",
        });
      }
      return formatJSONResponse({
        data: null,
        status: 500,
        success: false,
        message: "Error Internal Server",
        error: "Error Internal Server",
      });
    }
  };
