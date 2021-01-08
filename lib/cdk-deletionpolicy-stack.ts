import * as sns from '@aws-cdk/aws-sns';
import * as subs from '@aws-cdk/aws-sns-subscriptions';
import * as sqs from '@aws-cdk/aws-sqs';
import * as cdk from '@aws-cdk/core';

import * as lambda from '@aws-cdk/aws-lambda';

export class CdkDeletionpolicyStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const handler = new lambda.Function(this, 'MyFunc', {
      code: lambda.Code.fromInline('boom'),
      handler: 'index.handler',
      runtime: lambda.Runtime.NODEJS,
    });
    
    const resource = handler.node.defaultChild as cdk.CfnResource;
    resource.applyRemovalPolicy(cdk.RemovalPolicy.DESTROY);
    /*
    resource.cfnOptions.deletionPolicy = cdk.RemovalPolicy.RETAIN;
    resource.cfnOptions.updateReplacePolicy = cdk.RemovalPolicy.RETAIN;
    */
    
    
    /* cfn template:
        "MyFunc8A243A2C": {
      "Type": "AWS::Lambda::Function",
      "Properties": {
        "Code": {
          "ZipFile": "boom"
        },
        "Handler": "index.handler",
        "Role": {
          "Fn::GetAtt": [
            "MyFuncServiceRole54065130",
            "Arn"
          ]
        },
        "Runtime": "nodejs"
      },
      "DependsOn": [
        "MyFuncServiceRole54065130"
      ],
      "UpdateReplacePolicy": "Retain",
      "DeletionPolicy": "Retain",
      "Metadata": {
        "aws:cdk:path": "CdkDeletionpolicyStack/MyFunc/Resource"
      }
    },
    
    */
    
  }
}
