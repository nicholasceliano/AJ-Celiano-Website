using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Web.Mvc;
using WebSite.Models;

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
            var viewModel = new CareersViewModel();
            var careers = new List<Career>();
            
            foreach (string file in Directory.EnumerateFiles(Server.MapPath("~/App_Data/Careers/"), "*.json"))
            {
                var career = JsonConvert.DeserializeObject<Career>(System.IO.File.ReadAllText(file));
                careers.Add(career);
            }

            viewModel.Careers = careers;
            
            return View(viewModel);
        }
    }
}