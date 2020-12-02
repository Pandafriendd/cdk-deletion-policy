#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkDeletionpolicyStack } from '../lib/cdk-deletionpolicy-stack';

const app = new cdk.App();
new CdkDeletionpolicyStack(app, 'CdkDeletionpolicyStack');
