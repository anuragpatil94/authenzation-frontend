import { useState } from 'react';

function useAuthSelector(init = 'basic') {
  const [authType, setAuthType] = useState(init);

  return [authType, setAuthType];
}

export { useAuthSelector };
