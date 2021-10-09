import { useState, useContext } from 'react';
import UserContext, { UserState } from '../store';

function ConsumerComponent() {
  const user = useContext<UserState>(UserContext);
  return (
    <div>
      <div>First : {user.first}</div>
      <div>Last : {user.last}</div>
    </div>
  );
}

function UseContextComponent() {
  const [user, setUser] = useState<UserState>({
    first: 'Panji',
    last: 'Asmoro'
  });

  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        type="button"
        onClick={() =>
          setUser({
            first: 'Salman',
            last: 'Alfarisi'
          })
        }
      >
        Change Context
      </button>
    </UserContext.Provider>
  );
}

export default UseContextComponent;
