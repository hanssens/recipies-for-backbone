using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BackboneSandbox.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime? DueDate { get; set; }
        public bool IsCompleted { get; set; }
    }
}