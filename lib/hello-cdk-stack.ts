import cdk = require('@aws-cdk/cdk');
import s3 = require('@aws-cdk/aws-s3');
import configurator = require('../lib/configurator');

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    console.log(__dirname);
    new configurator.Config();

    new s3.Bucket(this, 'MyFirstBucket', {
      versioned: true
    });
  }
}