import React from 'react';

// Feature components imports
import BasicFeatures from './BasicFeatures';
import LoginSystem from './LoginSystem';
import UserAccount from './UserAccounts';
import LocationAndDates from './LocationAndDates';
import UserEngagement from './UserEngagement';
import Payment from './Payment';
import APIIntegration from './APIIntegration';
import Design from './Design';
import Admin from './Admin';

// UI-Feature data
import featureData from '../../featuresData.json'

const index = () => {
  return (
    <div>
      <BasicFeatures featureData = {featureData}/>
      <LoginSystem featureData = {featureData}/>
      <UserAccount featureData = {featureData}/>
      <LocationAndDates featureData = {featureData}/>
      <UserEngagement featureData = {featureData}/>
      <Payment featureData = {featureData}/>
      <APIIntegration featureData = {featureData}/>
      <Design featureData = {featureData}/>
      <Admin featureData = {featureData}/>
    </div>
  )
}

export default index
