import { useContext } from 'react';

import CostContext from '../../context/costContext/costContext';

import CheckBox from '../common/CheckBox';
import CardLayout from '../common/CardLayout';

const UserAccount = ({ featureData }) => {
  const { addFeature } = useContext(CostContext);

  const handleInputChange = (event) => {
    addFeature(event);
  }

  return (
    <CardLayout sectionTitle = 'User Account'>
      <CheckBox
        id='dashboard'
        name={featureData.dashboard.name}
        value={featureData.dashboard.price}
        handleInputChange = {handleInputChange}
        featureData = {featureData}
      />

      <CheckBox
        id='userProfile'
        name={featureData.userProfile.name}
        value={featureData.userProfile.price}
        handleInputChange = {handleInputChange}
      />
    </CardLayout>
  )
}

export default UserAccount;
