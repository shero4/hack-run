Submission for hack.run() 

#How to run code
1. git clone https://github.com/shero4/hack-run.git
2. cd ./hack-run
3. npm install -g @ionic/cli
4. npm install
5. ionic cordova run browser

You can connect an android phone and run ionic cordova run android instead

App will not function without firebase creds and I don't plan on giving them away today

please create a file called environment.ts in the root directory with the content

you can obtain this information by creating a firebase project, please use the exported apk to test with our bucket

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

also everyone is mehul. why? idk. 