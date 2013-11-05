using System;
using System.Collections.Generic;
using System.Linq;
//using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using BackboneSandbox.Models;

namespace BackboneSandbox.Controllers
{
    public class TasksController : Controller
    {
        protected IEnumerable<Task> Collection { get; private set; }

        public TasksController()
        {
            var collection = new List<Task>();
            for (int i = 1; i < 5; i++)
            {
                collection.Add(new Task()
                {
                    Id = i,
                    DueDate = DateTime.Now.AddDays(i),
                    IsCompleted = false,
                    Title = "taak nr. " + i
                });
            }

            Collection = collection;
        }

        /// <summary>
        /// Lists all tasks
        /// </summary>
        public ActionResult Overview()
        {
            return View();
        }

        public ActionResult Retrieve(int id)
        {
            var model = Collection.FirstOrDefault(x => x.Id == id);
            return Json(model, JsonRequestBehavior.AllowGet);
        }

        public JsonResult List()
        {
            var model = Collection.ToList();
            return Json(model, JsonRequestBehavior.AllowGet);
        }

        [HttpPut]
        public JsonResult Update(Task model)
        {
            Console.WriteLine("yeah");
            return Json(model, JsonRequestBehavior.AllowGet);
        }
	}
}