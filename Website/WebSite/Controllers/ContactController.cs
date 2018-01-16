using System.Web.Mvc;

namespace WebSite.Controllers
{
    public class ContactController : Controller
    {
        public ActionResult ContactInfo()
        {
            return View();
        }

        public ActionResult Careers()
        {
            return View();
        }
    }
}