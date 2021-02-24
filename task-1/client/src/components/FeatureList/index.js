import React from 'react';

import BasicFeatures from './BasicFeatures';
import LoginSystem from './LoginSystem';
import UserAccount from './UserAccounts';

// Feature data
import featureData from '../../featuresData.json'

const index = () => {
  return (
    <div>
      <BasicFeatures/>
      <LoginSystem featureData = {featureData}/>
      <UserAccount featureData = {featureData}/>
    </div>
  )
}

export default index
