正如实际看到的结果一样，message和时间循环是两套逻辑，当postMessage时消息就发出去了不会等当前线程宏任务结束。

但消息之间的顺序是一定的，线程任务之间的顺序是一定的。