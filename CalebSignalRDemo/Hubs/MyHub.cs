using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace CalebSignalRDemo.Hubs
{
    //[HubName("myHub")] //gives a hub name. That name is the name i use in the .js when i want to call the hub
    public class MyHub : Hub
    {
        //[HubMethodName("announceToEverybody")] // rename a method on the client side. so everytime i want to call the Announce() in .js,
        //// i have to call the announceToEverybody() 
        public void Announce(string message)
        {
            //every single client has a function named Announced.
            Clients.All.Announce(message);
        }
        //Return server's date-time to the specific client who called the method.
        //1st way
        //public void GetServerDateTime()
        //{
        //    Clients.Caller.DisplayDateTime();
        //}
        //2nd way
        public DateTime GetServerDateTime()
        {
            return DateTime.Now;
        }
    }
}