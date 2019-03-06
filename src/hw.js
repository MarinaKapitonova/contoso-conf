addEventListener("message", function (e) {

    var data = e.data;

    switch (data.cmd) {
        case 'start':
            postMessage("Начало : " + data.msg);
            break;
        case 'stop':
            postMessage("Конец : " + data.msg);
            close();
            break;
    }
}, true);