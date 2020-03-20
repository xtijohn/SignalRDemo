using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CalebSignalRDemo.Startup))]
namespace CalebSignalRDemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
            ConfigureAuth(app);
        }
    }
}
