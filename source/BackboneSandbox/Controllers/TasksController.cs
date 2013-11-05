using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BackboneSandbox.Controllers
{
    public class TasksController : Controller
    {

        /// <summary>
        /// Lists all tasks
        /// </summary>
        public ActionResult Overview()
        {
            return View();
        }
	}
}