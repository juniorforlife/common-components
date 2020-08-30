import firebase from 'react-native-firebase';

export const getToken = () => firebase.messaging().getToken();

export const initNotification = () =>
  firebase
    .messaging()
    .hasPermission()
    .then((enabled) => {
      if (enabled) {
        return getToken();
      }
      return firebase
        .messaging()
        .requestPermission()
        .then(() => getToken());
    });

export const tokenRefreshListener = (callback) =>
  firebase.messaging().onTokenRefresh(callback);

export const createNotificationChannel = () => {
  const channel = new firebase.notifications.Android.Channel(
    'channel id',
    'channel desc',
    firebase.notifications.Android.Importance.Max,
  ).setDescription('');

  firebase.notifications().android.createChannel(channel);
};

export const notificationListener = (callback) =>
  firebase.notifications().onNotification(callback);

export const displayDefaultNotification = (notification) => {
  const newNotification = new firebase.notifications.Notification()
    .setNotificationId(notification.notificationId)
    .setTitle(notification.title)
    .setBody(notification.body)
    .setData(notification.data)
    .android.setChannelId('')
    .android.setAutoCancel(true)
    .android.setPriority(firebase.notifications.Android.Priority.High)
    .android.setSmallIcon('@mipmap/ic_notif');
  firebase.notifications().displayNotification(newNotification);
};

export const onNotificationOpened = (callback) =>
  firebase.notifications().onNotificationOpened(callback);

export const getInitialNotification = () =>
  firebase.notifications().getInitialNotification();

export const revokeToken = () => firebase.messaging().deleteToken();

export const onMessage = (callback) => firebase.messaging().onMessage(callback);
