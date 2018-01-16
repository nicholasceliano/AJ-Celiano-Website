using System.Web.Mvc;

namespace WebSite.Controllers
{
    public class AboutUsController : Controller
    {
        public ActionResult MissionStatement()
        {
            return View();
        }

        public ActionResult History()
        {
            return View();
        }
    }
}