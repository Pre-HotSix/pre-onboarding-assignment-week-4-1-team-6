import React, { ChangeEvent, useState } from 'react';

export default function Filter({ account }: any) {
  const [accountData, setAccountData] = useState({});
  const [Toggle, setToggle] = useState(false);

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    switch (e.target.value) {
      case 'is_active':
        setToggle((prev) => !prev);
        if (Toggle) {
          setAccountData(
            account.sort(function (
              a: { is_active: number },
              b: { is_active: number }
            ) {
              return a.is_active - b.is_active;
            })
          );
        } else {
          setAccountData(
            account.sort(function (
              a: { is_active: number },
              b: { is_active: number }
            ) {
              return b.is_active - a.is_active;
            })
          );
        }
        break;
      case 'broker_id':
        if (value) {
          setAccountData(
            account
              .filter((el: { broker_id: string }) => {
                return el.broker_id === id;
              })
              .sort(function (
                a: { broker_id: number },
                b: { broker_id: number }
              ) {
                return a.broker_id - b.broker_id;
              })
          );
        } else {
          setAccountData(
            account
              .filter((el: { broker_id: string }) => {
                return el.broker_id === id;
              })
              .sort(function (
                a: { broker_id: number },
                b: { broker_id: number }
              ) {
                return b.broker_id - a.broker_id;
              })
          );
        }
        break;
      default:
        return setAccountData(account);
    }
    // }
  };

  return <div>Fillter</div>;
}
