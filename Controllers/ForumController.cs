using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Forum.Models;

namespace PW.Controllers
{
    public class ForumController : Controller
    {
        private ForumContext db = new ForumContext();

        // GET: Forum

        [HttpPost]
        public ActionResult Index(ForumEntry forumEntry)
        {
            forumEntry.Name = User.Identity.Name;
            forumEntry.SentDate = DateTime.Now;
            db.Entries.Add(forumEntry);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        public ActionResult Index()
        {
            return View();
        }

        public PartialViewResult Show()
        {
            ViewData["hasPermission"] = User.Identity.IsAuthenticated;
            var resentComments = from forum in db.Entries orderby forum.SentDate ascending select forum;
            ViewBag.Entries = resentComments.ToList();
            return PartialView();
        }

        [HttpPost]
        public JsonResult Delete(string Id)
        {
            var e = db.Entries.Find(Int32.Parse(Id));
            bool hasPermission = User.Identity.Name == e.Name;
            if (hasPermission)
            {
                db.Entries.Remove(e);
                db.SaveChanges();
                return Json(true, JsonRequestBehavior.AllowGet);
            }
            return Json(false, JsonRequestBehavior.AllowGet);
        }
    }
}

