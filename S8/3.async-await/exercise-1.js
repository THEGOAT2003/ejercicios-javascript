const runTimeOut = async () => {
    return await new Promise((resolve) => {
        setTimeout(function () {
            resolve(console.log(runTimeOut));;
        }, 2000);
    })

    promise.then(() => {console.log('Time out!')})
};

runTimeOut();

