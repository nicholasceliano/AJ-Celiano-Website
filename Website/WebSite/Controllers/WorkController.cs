using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebSite.Controllers
{
    public class WorkController : Controller
    {
        // GET: Work
        public ActionResult CleanRooms()
        {
            return View();
        }
       
        public ActionResult RetroFit()
        {
            return View();
        }

        public ActionResult WorkEthic()
        {
            return View();
        }

        public ActionResult WorkLib()
        {
            return View();
        }
    }
}