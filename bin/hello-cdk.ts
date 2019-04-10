#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import s3 = require('@aws-cdk/aws-s3');


// import ec2 = require('@aws-cdk/aws-ec2');

class HelloCdkStack extends cdk.Stack {
    constructor(parent: cdk.App, id: string, props?: cdk.StackProps) {
        super(parent, id, props);

        new s3.Bucket(this, 'MyFirstBucket', {
            bucketName: 'dm.dm.dm.xyz.a.b.c.joelsfeet'
        });
    }
}

const app = new cdk.App();
new HelloCdkStack(app, 'HelloCdkStack');
