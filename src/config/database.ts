import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import AWS from 'aws-sdk'

let instance: DocumentClient

const getInstance = (): DocumentClient => {
  if (instance == null) {
    instance = new AWS.DynamoDB.DocumentClient()
  }
  return instance
}

export default getInstance()
