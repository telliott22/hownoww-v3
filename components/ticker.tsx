import { FunctionComponent, useEffect, useState } from 'react';
import { getNotification } from '../sanity/queries';

const ticker: FunctionComponent = () => {
  const [notificationText, setNotificationText] = useState('');

  const fetchNotificatitonText = async () => {
    const result = await getNotification();

    console.log('result', result);

    setNotificationText(result.text);
  };

  useEffect(() => {
    fetchNotificatitonText();
  }, []);

  return (
    <div className="absolute top-0 flex overflow-x-hidden text-white text-sm uppercase border-b border-gray-200 space-x-8 w-full bg-gray-800">
      <div className="py-[2px] animate-marquee whitespace-nowrap space-x-8">

        <span>
          {notificationText}
        </span>

        <span>
          -
        </span>

        <span>
          {notificationText}
        </span>

        <span>
          -
        </span>

        <span>
          {notificationText}
        </span>

        <span>
          -
        </span>

      </div>

      <div className="absolute top-0 py-[2px] animate-marquee2 whitespace-nowrap space-x-8">

        <span>
          {notificationText}
        </span>

        <span>
          -
        </span>

        <span>
          {notificationText}
        </span>

        <span>
          -
        </span>

        <span>
          {notificationText}
        </span>

        <span>
          -
        </span>

      </div>
    </div>
  );
};

export default ticker;
