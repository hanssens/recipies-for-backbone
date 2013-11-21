using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BackboneSandbox.Models;

namespace BackboneSandbox.Controllers
{
    public class TasksController : Controller
    {
        protected ICollection<Task> Collection { get; private set; }

        public TasksController()
        {
            // populate a dummy collection of tasks
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
        /// Task overview - shows the default page.
        /// </summary>
        public ActionResult Overview()
        {
            return View();
        }

        #region -- BACKBONE CRUD OPERATIONS --

        /// <summary>
        /// Creates, or inserts, a single Task, as Json object.
        /// </summary>
        /// <remarks>
        /// Path: /tasks/create/
        /// </remarks>
        [HttpPut]
        public ActionResult Create(Task task)
        {
            Collection.Add(task);
            return Json(task, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// Returns a single Task, as Json object.
        /// </summary>
        /// <remarks>
        /// Path: /tasks/retrieve/{id}
        /// </remarks>
        [HttpGet]
        public ActionResult Retrieve(int id)
        {
            var model = Collection.FirstOrDefault(x => x.Id == id);
            return Json(model, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// Returns a list of all Tasks, as Json object.
        /// </summary>
        /// <remarks>
        /// Path: /tasks/list/
        /// </remarks>
        public JsonResult List()
        {
            var model = Collection.ToList();
            return Json(model, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// Updates a single Task.
        /// </summary>
        /// <remarks>
        /// Path: /tasks/update/
        /// </remarks>
        [HttpPut]
        public JsonResult Update(Task model)
        {
            var task = Collection.FirstOrDefault(x => x.Id == model.Id);
            Collection.Remove(task);
            Collection.Add(model);
            return Json(model, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// Deletes a single Task from the collection, by Id.
        /// </summary>
        /// <remarks>
        /// Path: /tasks/delete/{id}
        /// </remarks>
        [HttpDelete]
        public JsonResult Delete(int id)
        {
            var task = Collection.FirstOrDefault(x => x.Id == id);
            Collection.Remove(task);
            return Json(true, JsonRequestBehavior.AllowGet);
        }

        #endregion

    }
}