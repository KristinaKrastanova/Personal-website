using System;
using System.Data.Entity;
using System.Linq;

namespace Forum.Models
{
    public class ForumEntry
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string Comment { get; set; }

        public DateTime SentDate { get; set; }

    }
}