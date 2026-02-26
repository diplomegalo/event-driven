---
draft: true
---

using System.Threading;

var gate = new ManualResetEventSlim(false);

// Worker thread
var worker = Task.Run(() =>
{
    Console.WriteLine("Worker waiting...");
    gate.Wait();               // blocks until Set()
    Console.WriteLine("Worker continues");
});

// Main thread
Thread.Sleep(500);
Console.WriteLine("Opening gate");
gate.Set();                    // release all waiters

worker.Wait();