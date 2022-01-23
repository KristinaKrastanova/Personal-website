using System.Data.Entity;

namespace Forum.Models
{
    public class ForumContext : DbContext
    {
        public ForumContext(): base("ForumContext"){ }

        public DbSet<ForumEntry> Entries { get; set; }
    }
}