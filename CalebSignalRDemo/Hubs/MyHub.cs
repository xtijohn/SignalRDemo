using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace CalebSignalRDemo.Hubs
{
    public class MyHub : Hub
    {
        public void Announce(string message)
        {
            //every single client has a function named Announced.
            Clients.All.Announce(message);
        }
    }
}