import { FC } from 'react';
import Does from '@/shared/components/cases/does/does';
import Get from '@/shared/components/cases/get/get';

const Cases: FC = () => {
  return (
    <div id="cases">
      <Does />
      <Get />
    </div>
  );
};

export default Cases;
