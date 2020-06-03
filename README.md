# hack.run() submission 

## Participants
1. Dhruva Goyal
2. Kathan Desai

Track: Dev Tools


## Steps to run code
1. git clone https://github.com/shero4/hack-run.git
2. cd ./hack-run
3. npm install -g @ionic/cli
4. npm install
5. ionic cordova run browser

You can connect an android phone and run ionic cordova run android instead

The app will not function without firebase creds and I don't want to risk a 3000$ bill in my firebase console today

please create a file called environment.ts in the root directory with the content as shown below. You can obtain this information by creating a firebase project, please use the exported apk to test the app with our bucket

```
export const environment = {
    production: false,
    firebase: {
        apiKey: "<<api key>>",
        authDomain: "<<domain>>",
        databaseURL: "<<url>>",
        projectId: "<<proj id>>",
        storageBucket: "<<bucket>>",
        messagingSenderId: "whatever this is",
        appId: "whatever this is",
        measurementId: "whatever this is"
    }
};
``` 

also everyone is mehul. why? idk...

### bonus

<http://shorturl.at/fnDGQ>